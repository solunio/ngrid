import { Directive, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import {
  columnFactory,
  SgTableConfigService,
  SgColumnDefinition,
  SgTableColumnDefinitionSet,
  SgTableComponent,
  SgColumn,
  KillOnDestroy,
} from '@sac/table';

import { TransposeTableSession, LOCAL_COLUMN_DEF } from './transpose-table-session';
import { getCellValueTransformed, createTransformedColumn } from './utils';

const DEFAULT_HEADER_COLUMN = { prop: '__transpose__', css: 'sg-table-header-cell sg-table-transposed-header-cell' };

declare module '@sac/table/src/lib/table/services/config' {
  interface SgTableConfig {
    transposePlugin: {
      header?: Partial<SgColumnDefinition>;
      defaultCol?: Partial<SgColumnDefinition>;
      matchTemplates?: boolean;
    }
  }
}

/**
 * Transpose plugin.
 *
 * This plugin will swaps around the rows and columns of the table.
 *
 * A **regular table** (not transposed) represents rows horizontally:
 *
 * - Each horizontal row represents an item in the collection.
 * - Each vertical column represents the same property of all rows in the collection.
 *
 * A **transposed** table represents row vertically:
 *
 * - Each horizontal row represents the same property of all rows in the collection.
 * - Each vertical row represents an item in the collection.
 *
 * > Note that transposing a table might not play nice with other plugins and/or features.
 * For example, using pagination with transpose make no sense.
 */
@Directive({ selector: 'sg-table[transpose]' })
@KillOnDestroy()
export class SgTableTransposePluginDirective implements OnChanges, OnDestroy {

  @Input() transpose: boolean;

  /**
   * Column definitions for the new header column, this is the column the first column that
   * will display all the headers.
   *
   * This is an optional value, when not set a default column settings is used:
   *
   * ```js
   * {
   *  prop: '__transpose__',
   *  css: 'sg-table-header-cell sg-table-transposed-header-cell',
   * }
   * ```
   *
   * When set, the new column values will merge into the default definitions, overriding existing properties
   * set on the default column settings.
   *
   * > The header column behave like any other column and you can also provide define it in the `column` property on the table.
   * When using this approach the column defined on the table is used as is (no merging). Just make sure you use the right `prop` value for it.
   * e.g. if `header` is not set here its `__transpose__` otherwise, the actual `prop` value.
   */
  @Input('transposeHeaderCol') set header(value: Partial<SgColumnDefinition>) {
    this._header = Object.assign({}, DEFAULT_HEADER_COLUMN, value || {})
  }

  /**
   * Column definitions to be used as the base default definitions for the new transposed columns.
   * This is an optional value, when not set no default's are applied.
   */
  @Input('transposeDefaultCol') defaultCol: Partial<SgColumnDefinition>;

  /**
   * When true, will try to use the original template of the cell, i.e. the template that would have been used
   * if we did not transpose at all.
   *
   * Defaults to false.
   */
  @Input() matchTemplates: boolean;

  private enabled: boolean = false;
  private _header: SgColumnDefinition;
  private tableState: TransposeTableSession;
  private columns: SgColumn[];
  private selfColumn: SgColumn;

  constructor(private table: SgTableComponent<any>, config: SgTableConfigService) {
    const transposePlugin = config.get('transposePlugin');
    if (transposePlugin) {
      this.header = transposePlugin.header;
      this.defaultCol = transposePlugin.defaultCol || {};
      this.matchTemplates = transposePlugin.matchTemplates || false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('transpose' in changes) {
      this.enabled = coerceBooleanProperty(this.transpose);
      const isFirst = changes.transpose.isFirstChange;

      if (!this.enabled) {
        this.disable(true);
      } else {
        this.enable(!isFirst || this.table.dataSource.length > 0);
      }
    }
  }

  ngOnDestroy() {
    this.disable(false);
  }

  disable(updateTable: boolean): void {
    if (this.tableState) {
      this.columns = this.selfColumn = undefined;
      this.tableState.destroy();
      this.tableState = this.columns = this.selfColumn = undefined;
      if (updateTable) {
        this.table.invalidateHeader(true);
        this.table.dataSource.refresh();
      }
    }
  }

  enable(refreshDataSource: boolean = false): void {
    if (this.tableState) {
      this.disable(false);
    }

    const sourceFactoryWrapper = (results: any[]) => {
      if (results) {
        const local: SgTableColumnDefinitionSet = this.table.columns = columnFactory()
        .default(this.defaultCol || {})
        .table(
          this.selfColumn,
          ...results.map(createTransformedColumn),
        )
        .build();

        const prev = this.tableState.columnsInput;
        local.header = prev.header;
        local.headerGroup = prev.headerGroup;
        local.footer = prev.footer;
        local[LOCAL_COLUMN_DEF] = true;

        this.table.invalidateHeader(true);

        const matchTemplates = coerceBooleanProperty(this.matchTemplates);
        const { prop } = this._header;
        let currentColumn: SgColumn;
        for (const c of this.table._store.table) {
          if (c.orgProp === prop) {
            c.getValue = (row: SgColumn) => {
              currentColumn = row;
              return row.label as any;
            };
          } else {
            c.getValue = getCellValueTransformed;
            if (matchTemplates) {
              Object.defineProperty(c, 'cellTpl', { get: () => currentColumn.cellTpl });
            }
          }
        }
        return this.columns;
      }
      return results;
    };

    this.tableState = new TransposeTableSession(
      this.table,
      () => this.updateColumns(this.table._store.table),
      sourceFactoryWrapper,
    );

    if (refreshDataSource) {
      this.table.dataSource.refresh();
    }
  }

  private updateColumns(columns: SgColumn[]): void {
    const { prop } = this._header;
    this.columns = [];
    for (const c of columns) {
      if (c.orgProp === prop) {
        this.selfColumn = c;
      } else {
        this.columns.push(c);
      }
    }
    if (!this.selfColumn) {
      this.selfColumn = new SgColumn(this._header);
    }
  }
}