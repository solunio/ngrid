(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3JFK":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("qFEQ"),n=a("GAih"),o=a("cc5W"),r=a("EM62");let s=(()=>{class t{}return t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({factory:function(e){return new(e||t)},imports:[[i.i,n.e,o.l],i.i,n.e,o.l]}),t})()},D06q:function(t,e,a){"use strict";a.r(e),a.d(e,"PaginationExampleModule",(function(){return z}));var i=a("D57K"),n=a("2kYt"),o=a("PBFl"),r=a("XApm"),s=a("WNo/"),c=a("L7hU"),l=a("cc5W"),p=a("3JFK"),g=a("JRn2"),b=a("EM62"),u=a("Ht9o"),d=a("R3BP"),h=a("CWpx"),f=a("G5ZO"),m=a("v/G+");function k(t,e){if(1&t&&b.Tb(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;b.rc("table",t)("paginator",t.ds.paginator)}}let P=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(r.t)().onTrigger((()=>this.datasource.getPeople(1e3,5e3))).create()}};return t.\u0275fac=function(e){return new(e||t)(b.Sb(g.a))},t.\u0275cmp=b.Mb({type:t,selectors:[["pbl-pagination-example"]],decls:2,vars:2,consts:[["usePagination","","blockUi","","vScrollNone","",3,"dataSource","columns"],[3,"table","paginator",4,"pblNgridPaginatorRef"],[3,"table","paginator"]],template:function(t,e){1&t&&(b.Yb(0,"pbl-ngrid",0),b.Jc(1,k,1,2,"pbl-ngrid-paginator",1),b.Xb()),2&t&&b.rc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,d.b,h.b,f.a,m.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-pagination-example",{title:"Client Side Pagination"})],t),t})();var v=a("GoAz"),S=a("YtkY");function x(t,e){if(1&t&&b.Tb(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;b.rc("table",t)("paginator",t.ds.paginator)}}let O=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(r.t)().onTrigger((t=>{const{page:e,perPage:a}=this.ds.paginator;return function(t,e,a){return Object(v.a)(t.getPeople(500,5e3)).pipe(Object(S.a)((t=>{const i=(e-1)*a,n=Math.min(t.length,i+a);return{total:t.length,data:t.slice(i,n)}})))}(this.datasource,e,a).pipe(Object(S.a)((e=>(t.updateTotalLength(e.total),e.data))))})).setCustomTriggers("pagination").create()}};return t.\u0275fac=function(e){return new(e||t)(b.Sb(g.a))},t.\u0275cmp=b.Mb({type:t,selectors:[["pbl-async-page-number-example"]],decls:2,vars:2,consts:[["usePagination","","blockUi","",3,"dataSource","columns"],[3,"table","paginator",4,"pblNgridPaginatorRef"],[3,"table","paginator"]],template:function(t,e){1&t&&(b.Yb(0,"pbl-ngrid",0),b.Jc(1,x,1,2,"pbl-ngrid-paginator",1),b.Xb()),2&t&&b.rc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,d.b,f.a,m.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-async-page-number-example",{title:"Async: Page Number"})],t),t})();function _(t,e){if(1&t&&b.Tb(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;b.rc("table",t)("paginator",t.ds.paginator)}}function y(t,e,a){return Object(v.a)(t.getPeople(500,5e3)).pipe(Object(S.a)((t=>{const i=(e-1)*a,n=Math.min(t.length,i+a);return{total:t.length,data:t.slice(i,n)}})))}let j=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(r.t)().onTrigger((t=>{const{pagination:e}=t;let a;e.page.changed&&(a=e.page.curr),a||this.ds.paginator.reset();const{perPage:i}=this.ds.paginator;return function(t,e){const a=(t,e)=>btoa(JSON.stringify({page:t,perPage:e}));if("string"==typeof e){const i=JSON.parse(atob(e)),{page:n,perPage:o}=i;return y(t,n,o).pipe(Object(S.a)((t=>({token:a(n+1,o),data:t.data}))))}{const i=a(2,e);return y(t,1,e).pipe(Object(S.a)((t=>({token:i,data:t.data}))))}}(this.datasource,a||i).pipe(Object(S.a)((e=>(e.token&&this.ds.paginator.addNext(e.token),t.updateTotalLength(e.data.length),e.data))))})).setCustomTriggers("pagination").create()}};return t.\u0275fac=function(e){return new(e||t)(b.Sb(g.a))},t.\u0275cmp=b.Mb({type:t,selectors:[["pbl-async-token-example"]],decls:2,vars:2,consts:[["usePagination","token","blockUi","",3,"dataSource","columns"],[3,"table","paginator",4,"pblNgridPaginatorRef"],[3,"table","paginator"]],template:function(t,e){1&t&&(b.Yb(0,"pbl-ngrid",0),b.Jc(1,_,1,2,"pbl-ngrid-paginator",1),b.Xb()),2&t&&b.rc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,d.b,f.a,m.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-async-token-example",{title:"Async Token"})],t),t})(),z=(()=>{let t=class{};return t.\u0275mod=b.Qb({type:t}),t.\u0275inj=b.Pb({factory:function(e){return new(e||t)},imports:[[n.c,o.c,p.a,r.k,s.a,c.a]]}),t=Object(i.a)([Object(l.a)(P,O,j)],t),t})()},D57K:function(t,e,a){"use strict";function i(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r}a.d(e,"a",(function(){return i}))},L7hU:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var i=a("2kYt"),n=a("iAde"),o=a("R7+U"),r=a("Y2X+"),s=a("PBFl"),c=a("XApm"),l=a("EM62");let p=(()=>{class t{constructor(t,e){t.resolveComponentFactory(n.a).create(e)}}return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)(l.cc(l.j),l.cc(l.v))},imports:[[i.c,n.c,o.b,r.d,s.c,c.k]]}),t})()},R3BP:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return c}));var i=a("9bRT"),n=a("5XID"),o=a("XApm"),r=a("EM62");const s="blockUi";let c=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(s,this),t.registry.changes.subscribe((t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}})),e.events.subscribe((t=>{if("onDataSource"===t.kind){const{prev:e,curr:a}=t;e&&o.x.unrx.kill(this,e),a.onSourceChanging.pipe(o.x.unrx(this,a)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())})),a.onSourceChanged.pipe(o.x.unrx(this,a)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())}))}}))}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(n.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(i.a)(t)&&this._blockUi!==t?(Object(i.a)(this._blockUi)&&o.x.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(o.x.unrx(this,this._blockUi)).subscribe((t=>{this._blockInProgress=t,this.setupBlocker()}))):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){o.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(o.g),r.Sb(o.n))},t.\u0275dir=r.Nb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"WNo/":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("2kYt"),n=a("fL1z"),o=a("XApm"),r=a("R3BP"),s=a("EM62");let c=(()=>{class t{}return t.NGRID_PLUGIN=Object(o.v)({id:r.a},r.b),t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(e){return new(e||t)},imports:[[i.c,n.r,o.k]]}),t})()},"v/G+":function(t,e,a){"use strict";a.d(e,"a",(function(){return S}));var i=a("5XID"),n=a("XApm"),o=a("EM62"),r=a("iAde"),s=a("2kYt"),c=a("PBFl"),l=a("Y2X+"),p=a("29Wa"),g=a("R7+U"),b=a("mFH5");function u(t,e){if(1&t&&(o.Yb(0,"mat-option",17),o.Lc(1),o.Xb()),2&t){const t=e.$implicit;o.rc("value",t),o.Gb(1),o.Nc(" ",t," ")}}function d(t,e){if(1&t){const t=o.Zb();o.Yb(0,"mat-form-field",14),o.Yb(1,"mat-select",15),o.gc("selectionChange",(function(e){return o.zc(t),o.kc(2).paginator.perPage=e.value})),o.Jc(2,u,2,2,"mat-option",16),o.Xb(),o.Xb()}if(2&t){const t=o.kc(2);o.Gb(1),o.rc("value",t.paginator.perPage)("aria-label",t._intl.itemsPerPageLabel)("disabled",t.pageSizes[0]>=t.paginator.total&&!t.paginator.hasPrev()&&!t.paginator.hasNext()),o.Gb(1),o.rc("ngForOf",t.pageSizes)}}function h(t,e){if(1&t&&(o.Yb(0,"div"),o.Lc(1),o.Xb()),2&t){const t=o.kc(2);o.Gb(1),o.Mc(null==t.paginator?null:t.paginator.perPage)}}function f(t,e){if(1&t&&(o.Yb(0,"div",11),o.Yb(1,"div",12),o.Lc(2),o.Xb(),o.Jc(3,d,3,4,"mat-form-field",8),o.Jc(4,h,2,1,"div",13),o.Xb()),2&t){const t=o.kc();o.Gb(2),o.Nc(" ",t._intl.itemsPerPageLabel," "),o.Gb(1),o.rc("ngIf",t.pageSizes.length>1),o.Gb(1),o.rc("ngIf",t.pageSizes.length<=1)}}function m(t,e){if(1&t&&(o.Yb(0,"div",18),o.Lc(1),o.Xb()),2&t){const t=o.kc();o.Gb(1),o.Nc(" ",t._intl.getRangeLabel(t.paginator.page-1,t.paginator.perPage,t.paginator.total)," ")}}function k(t,e){if(1&t&&(o.Yb(0,"mat-option",17),o.Lc(1),o.Xb()),2&t){const t=e.$implicit;o.rc("value",t),o.Gb(1),o.Mc(t)}}function P(t,e){if(1&t){const t=o.Zb();o.jc(),o.ic(),o.Yb(0,"mat-form-field",14),o.Yb(1,"mat-select",19),o.gc("selectionChange",(function(e){return o.zc(t),o.kc().paginator.page=e.value})),o.Jc(2,k,2,2,"mat-option",16),o.Xb(),o.Xb()}if(2&t){const t=o.kc();o.Gb(1),o.rc("value",t.paginator.page)("disabled",1===t.paginator.totalPages),o.Gb(1),o.rc("ngForOf",t.pages)}}const v=[5,10,20,50,100];let S=(()=>{class t{constructor(t,e,a){this._intl=e,this.cdr=a,this.pages=[],this.pageSizes=v.slice(),this._hidePageSize=!1,this._hideRangeSelect=!1,t&&(this.table=t),e.changes.pipe(n.x.unrx(this)).subscribe((()=>this.cdr.markForCheck()))}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=t,this.pageSizes=(t||v).slice(),this.updatePageSizes()}get paginator(){return this._paginator}set paginator(t){this._paginator!==t&&(this._paginator&&n.x.unrx.kill(this,this._paginator),this._paginator=t,t&&(t.onChange.pipe(n.x.unrx(this,t)).subscribe((t=>this.handlePageChange(t))),this.updatePageSizes()))}get hidePageSize(){return this._hidePageSize}set hidePageSize(t){this._hidePageSize=Object(i.c)(t)}get hideRangeSelect(){return this._hideRangeSelect}set hideRangeSelect(t){this._hideRangeSelect=Object(i.c)(t)}ngOnDestroy(){n.x.unrx.kill(this)}updatePageSizes(){this.paginator&&-1===this.pageSizes.indexOf(this.paginator.perPage)&&this.pageSizes.push(this.paginator.perPage),this.pageSizes.sort(((t,e)=>t-e))}handlePageChange(t){if(this.pages.length!==this.paginator.totalPages){const t=this.pages=[];for(let e=1,a=this.paginator.totalPages+1;e<a;e++)t.push(e)}this.cdr.detectChanges(),this.cdr.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(n.g,8),o.Sb(r.b),o.Sb(o.h))},t.\u0275cmp=o.Mb({type:t,selectors:[["pbl-ngrid-paginator"]],hostAttrs:[1,"mat-paginator"],inputs:{pageSizeOptions:"pageSizeOptions",paginator:"paginator",table:"table",hidePageSize:"hidePageSize",hideRangeSelect:"hideRangeSelect"},decls:12,vars:11,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],["class","mat-paginator-range-label",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["class","mat-paginator-page-size-select",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],[4,"ngIf"],[1,"mat-paginator-page-size-select"],[3,"value","aria-label","disabled","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-range-label"],[3,"value","disabled","selectionChange"]],template:function(t,e){1&t&&(o.Yb(0,"div",0),o.Yb(1,"div",1),o.Jc(2,f,5,3,"div",2),o.Yb(3,"div",3),o.Jc(4,m,2,1,"div",4),o.Yb(5,"button",5),o.gc("click",(function(){return e.paginator.prevPage()})),o.jc(),o.Yb(6,"svg",6),o.Tb(7,"path",7),o.Xb(),o.Xb(),o.Jc(8,P,3,3,"mat-form-field",8),o.ic(),o.Yb(9,"button",9),o.gc("click",(function(){return e.paginator.nextPage()})),o.jc(),o.Yb(10,"svg",6),o.Tb(11,"path",10),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb()),2&t&&(o.Gb(2),o.rc("ngIf",!e.hidePageSize),o.Gb(2),o.rc("ngIf","pageNumber"===e.paginator.kind),o.Gb(1),o.rc("matTooltip",e._intl.previousPageLabel)("matTooltipPosition","above")("disabled",!e.paginator.hasPrev()),o.Hb("aria-label",e._intl.previousPageLabel),o.Gb(3),o.rc("ngIf",!e.hideRangeSelect&&"pageNumber"===e.paginator.kind&&e.pageSizes.length>=1),o.Gb(1),o.rc("matTooltip",e._intl.nextPageLabel)("matTooltipPosition","above")("disabled",!e.paginator.hasNext()),o.Hb("aria-label",e._intl.nextPageLabel))},directives:[s.t,c.b,l.c,p.c,g.a,s.s,b.m],styles:[".mat-paginator-range-label{flex-grow:1}.mat-paginator-container{box-sizing:border-box}"],encapsulation:2,changeDetection:0}),t})()}}]);