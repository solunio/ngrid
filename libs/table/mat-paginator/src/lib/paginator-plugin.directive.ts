import { Directive, Injector, Input, OnDestroy, ComponentFactoryResolver, ComponentRef, DoCheck } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SgTableComponent } from '@sac/table';
import { SgPaginatorComponent } from './table-paginator.component';

@Directive({ selector: 'sg-table[matPaginator]' })
export class SgTableMatPaginatorDirective implements OnDestroy, DoCheck {
  /**
   * Add's a selection column using material's `mat-checkbox` in the column specified.
   */
  @Input() get matPaginator(): boolean { return this._enabled; }
  set matPaginator(value: boolean ) {
    value = coerceBooleanProperty(value);
    if (value !== this._enabled) {
      this._enabled = value;
      if (!value) {
        if (this.cmpRef) {
          this.cmpRef.destroy();
          this.cmpRef = undefined;
        }
        this.ngDoCheck = SgTableMatPaginatorDirective.prototype.ngDoCheck;
      } else {
        if (!this.cmpRef) {
          this.cmpRef = this.cfr.resolveComponentFactory(SgPaginatorComponent).create(this.injector);
          this.instance = this.cmpRef.instance;
          this.instance.table = this.table;
        }
        const ngDoCheck = () => {
          if (this.instance.paginator !== (this.table.dataSource && this.table.dataSource.paginator)) {
            this.instance.paginator = this.table.dataSource.paginator;
          }
        };
        this.ngDoCheck = ngDoCheck;
        ngDoCheck();
        this.cmpRef.changeDetectorRef.detectChanges();
      }
    }
  }
  private _enabled: boolean;
  private cmpRef: ComponentRef<SgPaginatorComponent>;
  private instance: SgPaginatorComponent;

  constructor(private table: SgTableComponent<any>, private cfr: ComponentFactoryResolver, private injector: Injector) { }

  ngDoCheck(): void { }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  private setPaginator(): void {
    if (this.table.dataSource) {
      this.instance.paginator = this.table.dataSource.paginator;
    }
  }
}
