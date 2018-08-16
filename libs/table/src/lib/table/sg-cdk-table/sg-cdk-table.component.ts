import { Observable, Subject } from 'rxjs';

import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EmbeddedViewRef,
  IterableDiffers,
  Optional,
  ViewEncapsulation,
  ViewContainerRef
} from '@angular/core';
import { CDK_TABLE_TEMPLATE, CdkTable, DataRowOutlet } from '@angular/cdk/table';
import { Directionality } from '@angular/cdk/bidi';

import { SgTableComponent } from '../table.component';

/**
 * Wrapper for the CdkTable with Material design styles.
 */
@Component({
  selector: 'sg-cdk-table',
  exportAs: 'sgCdkTable',
  template: CDK_TABLE_TEMPLATE,
  styleUrls: ['./sg-cdk-table.component.scss'],
  host: {
    'class': 'sg-cdk-table',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SgCdkTableComponent<T> extends CdkTable<T> {

  get onRenderRows(): Observable<DataRowOutlet> {
    if (!this.onRenderRows$) {
      this.onRenderRows$ = new Subject<DataRowOutlet>();
    }
    return this.onRenderRows$.asObservable();
  }

  set minWidth(value: string) {
    this._element.style.minWidth = value;
  }

  private get _element(): HTMLElement { return this._elementRef.nativeElement; }
  private onRenderRows$: Subject<DataRowOutlet>;

  constructor(protected _differs: IterableDiffers,
              protected _changeDetectorRef: ChangeDetectorRef,
              protected _elementRef: ElementRef,
              @Attribute('role') role: string,
              @Optional() protected readonly _dir: Directionality,
              private table: SgTableComponent<T>) {
    super(_differs, _changeDetectorRef, _elementRef, role, _dir);
    this.table._cdkTable = this;
  }


  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.onRenderRows$) {
      this.onRenderRows$.complete();
    }
  }

  addClass(cssClassName: string): void {
    this._element.classList.add(cssClassName);
  }

  removeClass(cssClassName: string): void {
    this._element.classList.remove(cssClassName);
  }

  /**
   * An alias for `_cacheRowDefs()`
   */
  updateRowDefCache(): void {
    (this as any)._cacheRowDefs();
  }

  renderRows(): void {
    super.renderRows();
    if (this.onRenderRows$) {
      this.onRenderRows$.next(this._rowOutlet);
    }
  }

  /**
   * Force run change detection for rows.
   * You can run it for spcific groups or for all rows.
   */
  syncRows(rowTypes?: Array<'header' | 'table' | 'footer'>): void {
    if (!rowTypes) {
      rowTypes = [ 'header', 'table', 'footer'];
    }

    const arr: ViewContainerRef[] = rowTypes.map( t => {
      switch(t) {
        case 'header':
          return this._headerRowOutlet.viewContainer;
        case 'table':
          return this._rowOutlet.viewContainer;
        case 'footer':
          return this._footerRowOutlet.viewContainer;
      }
    });

    for (const vcRef of arr) {
      for (let renderIndex = 0, count = vcRef.length; renderIndex < count; renderIndex++) {
        const viewRef = vcRef.get(renderIndex) as EmbeddedViewRef<any>;
        viewRef.markForCheck();
        viewRef.detectChanges();
      }
    }
  }
}
