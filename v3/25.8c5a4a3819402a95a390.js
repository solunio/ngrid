(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"4DA5":function(t,e,c){"use strict";c.d(e,"a",function(){return n}),c.d(e,"b",function(){return l});var o=c("7+OI"),i=c("8LU1"),r=c("XEBs"),s=c("fXoL");const n="blockUi";let l=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(n,this),t.registry.changes.subscribe(t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}}),e.onInit().subscribe(t=>{t&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),e.events.subscribe(t=>{if("onDataSource"===t.kind){const{prev:e,curr:c}=t;e&&r.x.unrx.kill(this,e),c.onSourceChanging.pipe(r.x.unrx(this,c)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),c.onSourceChanged.pipe(r.x.unrx(this,c)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(i.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(o.a)(t)&&this._blockUi!==t?(Object(o.a)(this._blockUi)&&r.x.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(r.x.unrx(this,this._blockUi)).subscribe(t=>{this._blockInProgress=t,this.setupBlocker()})):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){r.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(r.g),s.Sb(r.n))},t.\u0275dir=s.Nb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"6JOf":function(t,e,c){"use strict";c.d(e,"a",function(){return l});var o=c("ofXK"),i=c("f6nW"),r=c("XEBs"),s=c("4DA5"),n=c("fXoL");let l=(()=>{class t{}return t.NGRID_PLUGIN=Object(r.v)({id:s.a},s.b),t.\u0275mod=n.Qb({type:t}),t.\u0275inj=n.Pb({factory:function(e){return new(e||t)},imports:[[o.c,i.r,r.k]]}),t})()},WPM6:function(t,e,c){"use strict";c.d(e,"a",function(){return n});var o=c("XiUz"),i=c("znSr"),r=c("YT2F"),s=c("fXoL");let n=(()=>{class t{}return t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(e){return new(e||t)},imports:[[o.i,i.e,r.l],o.i,i.e,r.l]}),t})()},Ydbu:function(t,e,c){"use strict";c.r(e),c.d(e,"VirtualScrollExampleModule",function(){return O});var o=c("mrSG"),i=c("ofXK"),r=c("QibW"),s=c("XEBs"),n=c("6JOf"),l=c("YT2F"),a=c("WPM6"),u=c("fluT"),b=c("fXoL"),d=c("XkVd"),p=c("4DA5"),h=c("7WRX"),g=c("yNqP"),f=c("z6lm");function m(t,e){if(1&t&&b.Tb(0,"pbl-ngrid",13),2&t){const t=b.kc(2);b.rc("dataSource",t.ds)("columns",t.columns)}}function S(t,e){if(1&t&&b.Tb(0,"pbl-ngrid",14),2&t){const t=b.kc(2);b.rc("dataSource",t.ds)("columns",t.columns)}}function k(t,e){if(1&t&&b.Tb(0,"pbl-ngrid",15),2&t){const t=b.kc(2);b.rc("dataSource",t.ds)("columns",t.columns)}}function v(t,e){if(1&t&&b.Tb(0,"pbl-ngrid",16),2&t){const t=b.kc(2);b.rc("dataSource",t.ds)("columns",t.columns)}}function y(t,e){if(1&t&&(b.Wb(0,8),b.Jc(1,m,1,2,"pbl-ngrid",9),b.Jc(2,S,1,2,"pbl-ngrid",10),b.Jc(3,k,1,2,"pbl-ngrid",11),b.Jc(4,v,1,2,"pbl-ngrid",12),b.Vb()),2&t){b.kc();const t=b.wc(1);b.rc("ngSwitch",t.value),b.Gb(1),b.rc("ngSwitchCase","auto"),b.Gb(1),b.rc("ngSwitchCase","fixed"),b.Gb(1),b.rc("ngSwitchCase","dynamic"),b.Gb(1),b.rc("ngSwitchCase","none")}}let w=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(s.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=this.createDatasource()}removeDatasource(){this.ds&&(this.ds.dispose(),this.ds=void 0)}createDatasource(){return Object(s.t)().onTrigger(()=>this.datasource.getPeople(0,1500)).create()}};return t.\u0275fac=function(e){return new(e||t)(b.Sb(u.a))},t.\u0275cmp=b.Mb({type:t,selectors:[["pbl-virtual-scroll-example"]],decls:13,vars:2,consts:[["value","auto",3,"change"],["rdGroup","matRadioGroup"],["value","auto"],["value","fixed"],["value","dynamic"],["value","none"],[3,"ngSwitch",4,"ngIf"],["mat-button","",3,"disabled","click"],[3,"ngSwitch"],["blockUi","","vScrollAuto","",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollFixed","48",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollDynamic","",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollNone","",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollAuto","",3,"dataSource","columns"],["blockUi","","vScrollFixed","48",3,"dataSource","columns"],["blockUi","","vScrollDynamic","",3,"dataSource","columns"],["blockUi","","vScrollNone","",3,"dataSource","columns"]],template:function(t,e){1&t&&(b.Yb(0,"mat-radio-group",0,1),b.gc("change",function(){return e.removeDatasource()}),b.Yb(2,"mat-radio-button",2),b.Lc(3,"Auto Size"),b.Xb(),b.Yb(4,"mat-radio-button",3),b.Lc(5,"Fixed Size"),b.Xb(),b.Yb(6,"mat-radio-button",4),b.Lc(7,"Dynamic Size"),b.Xb(),b.Yb(8,"mat-radio-button",5),b.Lc(9,"No Virtual Scroll"),b.Xb(),b.Xb(),b.Jc(10,y,5,5,"ng-container",6),b.Yb(11,"button",7),b.gc("click",function(){return e.ds=e.createDatasource()}),b.Lc(12,"Load Data"),b.Xb()),2&t&&(b.Gb(10),b.rc("ngIf",e.ds),b.Gb(1),b.rc("disabled",e.ds))},directives:[r.b,r.a,i.t,i.x,i.y,d.a,p.b,h.a,g.a,f.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(o.a)([Object(l.e)("pbl-virtual-scroll-example",{title:"Virtual Scroll"}),Object(o.b)("design:paramtypes",[u.a])],t),t})();var U=c("wl19");let x=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(s.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=this.createDatasource(),this.scrollingState=0}createDatasource(){return Object(s.t)().onTrigger(()=>this.datasource.getPeople(0,1500)).create()}setIsScrolling(t){this.scrollingState=t,t&&(this.lastScrollDirection=1===t?"END":"START")}};return t.\u0275fac=function(e){return new(e||t)(b.Sb(u.a))},t.\u0275cmp=b.Mb({type:t,selectors:[["pbl-scrolling-state-example"]],decls:12,vars:4,consts:[[3,"dataSource","columns","scrolling"],[1,"virtual-scroll-css-scrolling-demo-on"],[1,"virtual-scroll-css-scrolling-demo-off"]],template:function(t,e){1&t&&(b.Yb(0,"pbl-ngrid",0),b.gc("scrolling",function(t){return e.setIsScrolling(t)}),b.Xb(),b.Yb(1,"h1"),b.Lc(2,"Scrolling is "),b.Yb(3,"span",1),b.Lc(4,"ON"),b.Xb(),b.Yb(5,"span",2),b.Lc(6,"OFF"),b.Xb(),b.Lc(7," - (CSS)"),b.Xb(),b.Yb(8,"h1"),b.Lc(9),b.Xb(),b.Yb(10,"h1"),b.Lc(11),b.Xb()),2&t&&(b.rc("dataSource",e.ds)("columns",e.columns),b.Gb(9),b.Nc("Scrolling is ",e.scrollingState?"ON":"OFF"," - (scrolling) event"),b.Gb(2),b.Nc("Last Scrolling Direction: ",e.lastScrollDirection,""))},directives:[d.a,U.a],styles:["pbl-ngrid+h1 .virtual-scroll-css-scrolling-demo-on{display:none}.pbl-ngrid-scrolling+h1 .virtual-scroll-css-scrolling-demo-on{display:inline}.pbl-ngrid-scrolling+h1 .virtual-scroll-css-scrolling-demo-off{display:none}"],encapsulation:2,changeDetection:0}),t=Object(o.a)([Object(l.e)("pbl-scrolling-state-example",{title:"Scrolling State"}),Object(o.b)("design:paramtypes",[u.a])],t),t})(),O=(()=>{let t=class{};return t.\u0275mod=b.Qb({type:t}),t.\u0275inj=b.Pb({factory:function(e){return new(e||t)},imports:[[i.c,r.c,a.a,s.k,n.a]]}),t=Object(o.a)([Object(l.a)(w,x)],t),t})()},mrSG:function(t,e,c){"use strict";function o(t,e,c,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,c):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,c,o);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(s=(r<3?i(s):r>3?i(e,c,s):i(e,c))||s);return r>3&&s&&Object.defineProperty(e,c,s),s}function i(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}c.d(e,"a",function(){return o}),c.d(e,"b",function(){return i})}}]);