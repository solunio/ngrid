/* @sac-example:ex-row-1 */
/* @sac-example:ex-row-2 */
/* @sac-example:ex-row-3 */
import { map } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SgDataSource, columnFactory, SgDataSourceAdapter } from '@sac/table';

import { Person, getPersons } from '../../services';

const COLUMNS = columnFactory()
  .default({minWidth: 100})
  .table(
    { prop: 'id', sort: true, width: '40px' },
    { prop: 'name', sort: true },
    { prop: 'gender', width: '50px' },
    { prop: 'birthdate', type: 'date' }
  )
  .header(
    { id: 'MULTI_HEADER_1', label: 'MULTI HEADER 1' },
  )
  .header(
    { id: 'MULTI_HEADER_2_1', label: 'MULTI HEADER 2: Col 1' },
    { id: 'MULTI_HEADER_2_2', label: 'MULTI HEADER 2: Col 2' },
  )
  .footer(
    { id: 'MULTI_FOOTER_1', label: 'This table is the property of Nobody & CO (LLC)' },
  )
  .build();

@Component({
  selector: 'sac-sticky-row-table-example-component',
  templateUrl: './sticky-row.component.html',
  styleUrls: ['./sticky-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickyRowTableExampleComponent {
  columns = COLUMNS.table; /* @sac-ignore-line:ex-row-3 */
  columnsWithMultiHeaders = COLUMNS.all; /* @sac-ignore-line:ex-row-1 */ /* @sac-ignore-line:ex-row-2 */

  dataSource = new SgDataSource<Person>(new SgDataSourceAdapter(
      () => getPersons(0).pipe(map( data => data.slice(0, 15) ))
    )
  );
}
/* @sac-example:ex-row-3 */
/* @sac-example:ex-row-2 */
/* @sac-example:ex-row-1 */
