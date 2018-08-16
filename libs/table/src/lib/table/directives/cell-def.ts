import {
  Directive,
  TemplateRef,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { COLUMN, SgColumn, SgMetaColumn, SgClolumnTypeDefinition, SgTableCellTemplateContext, SgTableMetaCellTemplateContext } from '../columns';
import { SgTableRegistryService } from '../table-registry.service';
import { normalizeId } from '../utils';

export interface SgTableCellDefDirectiveBase {
  name: string;
  typeMatch: boolean;
}

export abstract class SgTableBaseCellDef<T, Z> implements OnInit, OnDestroy, SgTableCellDefDirectiveBase {
  name: string;
  typeMatch: boolean;
  constructor(public tRef: TemplateRef<Z>, protected registry: SgTableRegistryService) { }

  ngOnInit(): void {
    // TODO: listen to property changes (name) and re-register cell
    if (this instanceof SgTableHeaderCellDefDirective) {
      this.registry.addMulti('headerCell', this);
    } else if (this instanceof SgTableCellDefDirective) {
      this.registry.addMulti('tableCell', this);
    } else if (this instanceof SgTableFooterCellDefDirective) {
      this.registry.addMulti('footerCell', this);
    }
  }

  ngOnDestroy(): void {
    if (this instanceof SgTableHeaderCellDefDirective) {
      this.registry.removeMulti('headerCell', this);
    } else if (this instanceof SgTableCellDefDirective) {
      this.registry.removeMulti('tableCell', this);
    } else if (this instanceof SgTableFooterCellDefDirective) {
      this.registry.removeMulti('footerCell', this);
    }
  }
}

/**
 * Header Cell definition for the sg-table.
 * Captures the template of a column's data row header cell as well as header cell-specific properties.
 *
 * `sgTableHeaderCellDef` does the same thing that `matHeaderCellDef` and `cdkHeaderCellDef` do with one difference,
 * `sgTableHeaderCellDef` is independent and does not require a column definition parent, instead it accept the ID of
 * the header cell.
 *
 * NOTE: Defining '*' as id will declare the header cell template as default, replacing the table's default header cell template.
 *
 * Make sure you set the proper id of the property you want to override.
 * When the `id` is set explicitly in the table column definition, this is not a problem but when if it's not set
 * the table generate's a unique id based on a logic. If `name` is set the name is used, if no name is set
 * the `prop` is used (full with dot notation).
 */
@Directive({
  selector: '[sgTableHeaderCellDef]',
  inputs: [ 'name:sgTableHeaderCellDef', 'typeMatch:sgTableHeaderCellDefTypeMatch' ]
})
export class SgTableHeaderCellDefDirective<T> extends SgTableBaseCellDef<T, SgTableMetaCellTemplateContext<T>> {
  constructor(tRef: TemplateRef<SgTableMetaCellTemplateContext<T>>, registry: SgTableRegistryService) { super(tRef, registry); }
}

/**
 * Cell definition for the sg-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 *
 * `sgTableCellDef` does the same thing that `matCellDef` and `cdkCellDef` do with one difference, `sgTableCellDef` is
 * independent and does not require a column definition parent, instead it accept the ID of the cell.
 *
 * NOTE: Defining '*' as id will declare the cell template as default, replacing the table's default cell template.
 *
 * Make sure you set the proper id of the property you want to override.
 * When the `id` is set explicitly in the table column definition, this is not a problem but when if it's not set
 * the table generate's a unique id based on a logic. If `name` is set the name is used, if no name is set
 * the `prop` is used (full with dot notation).
 */
@Directive({
  selector: '[sgTableCellDef]',
  inputs: [ 'name:sgTableCellDef', 'typeMatch:sgTableCellDefTypeMatch' ]
})
export class SgTableCellDefDirective<T> extends SgTableBaseCellDef<T, SgTableCellTemplateContext<T>> {
  constructor(tRef: TemplateRef<SgTableCellTemplateContext<T>>, registry: SgTableRegistryService) { super(tRef, registry); }
}

@Directive({
  selector: '[sgTableFooterCellDef]',
  inputs: [ 'name:sgTableFooterCellDef', 'typeMatch:sgTableFooterCellDefTypeMatch' ]
})
export class SgTableFooterCellDefDirective<T> extends SgTableBaseCellDef<T, SgTableMetaCellTemplateContext<T>> {
  constructor(tRef: TemplateRef<SgTableMetaCellTemplateContext<T>>, registry: SgTableRegistryService) { super(tRef, registry); }
}

function findCellDefById<T extends SgTableCellDefDirectiveBase>(cellDefs: Array<T>, colDef: Partial<SgClolumnTypeDefinition> & { id: string }, searchParent?: boolean): T {
  for (const cellDef of cellDefs) {
    if (cellDef.typeMatch) {
      if (colDef.type && cellDef.name === colDef.type) {
        return cellDef;
      }
    } else {
      const id = normalizeId(cellDef.name);
      if (id === colDef.id) {
        return cellDef;
      }
    }
  }
}

export function findCellDef<T = any>(registry: SgTableRegistryService, colDef: SgColumn, kind: 'tableCell',  searchParent?: boolean): SgTableCellDefDirective<T>;
export function findCellDef<T = any>(registry: SgTableRegistryService, colDef: SgMetaColumn | SgColumn, kind: 'headerCell', searchParent?: boolean): SgTableHeaderCellDefDirective<T>;
export function findCellDef<T = any>(registry: SgTableRegistryService, colDef: SgMetaColumn | SgColumn, kind: 'footerCell', searchParent?: boolean): SgTableFooterCellDefDirective<T>;
export function findCellDef<T = any>(registry: SgTableRegistryService, colDef: COLUMN, kind: 'headerCell' | 'footerCell' | 'tableCell', searchParent?: boolean): SgTableCellDefDirective<T> | SgTableHeaderCellDefDirective<T> | SgTableFooterCellDefDirective <T> {
  const cellDefs: SgTableCellDefDirectiveBase[] = registry.getMulti(kind);

  if (cellDefs) {
    let type: Partial<SgClolumnTypeDefinition> & { id: string };
    if (colDef instanceof SgColumn) {
      switch (kind) {
        case 'headerCell':
          if (colDef.headerType) {
            type = Object.assign({ id: colDef.id }, colDef.headerType);
          }
          break;
        case 'footerCell':
          if (colDef.footerType) {
            type = Object.assign({ id: colDef.id }, colDef.footerType);
          }
          break;
      }
    }
    if (!type) {
      type = colDef;
    }
    const match: any = findCellDefById(cellDefs, type);
    if (match) {
      return match;
    }
  }

  if (searchParent && registry.parent) {
    return findCellDef(registry.parent, colDef as any, kind as any, searchParent);
  }
}

