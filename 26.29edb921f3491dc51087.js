(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"4DA5":function(t,e,c){"use strict";c.d(e,"a",function(){return n}),c.d(e,"b",function(){return l});var i=c("7+OI"),o=c("8LU1"),s=c("XEBs"),r=c("fXoL");const n="blockUi";let l=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(n,this),t.registry.changes.subscribe(t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}}),e.onInit().subscribe(t=>{t&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),e.events.subscribe(t=>{if("onDataSource"===t.kind){const{prev:e,curr:c}=t;e&&s.x.unrx.kill(this,e),c.onSourceChanging.pipe(s.x.unrx(this,c)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),c.onSourceChanged.pipe(s.x.unrx(this,c)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(o.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(i.a)(t)&&this._blockUi!==t?(Object(i.a)(this._blockUi)&&s.x.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(s.x.unrx(this,this._blockUi)).subscribe(t=>{this._blockInProgress=t,this.setupBlocker()})):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){s.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(s.g),r.Rb(s.n))},t.\u0275dir=r.Mb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"6JOf":function(t,e,c){"use strict";c.d(e,"a",function(){return l});var i=c("ofXK"),o=c("f6nW"),s=c("XEBs"),r=c("4DA5"),n=c("fXoL");let l=(()=>{class t{}return t.NGRID_PLUGIN=Object(s.v)({id:r.a},r.b),t.\u0275mod=n.Pb({type:t}),t.\u0275inj=n.Ob({factory:function(e){return new(e||t)},imports:[[i.c,o.r,s.k]]}),t})()},WPM6:function(t,e,c){"use strict";c.d(e,"a",function(){return n});var i=c("XiUz"),o=c("znSr"),s=c("YT2F"),r=c("fXoL");let n=(()=>{class t{}return t.\u0275mod=r.Pb({type:t}),t.\u0275inj=r.Ob({factory:function(e){return new(e||t)},imports:[[i.i,o.e,s.l],i.i,o.e,s.l]}),t})()},Ydbu:function(t,e,c){"use strict";c.r(e),c.d(e,"VirtualScrollExampleModule",function(){return O});var i=c("mrSG"),o=c("ofXK"),s=c("QibW"),r=c("XEBs"),n=c("6JOf"),l=c("YT2F"),a=c("WPM6"),u=c("fluT"),b=c("fXoL"),d=c("XkVd"),p=c("4DA5"),h=c("7WRX"),g=c("yNqP"),f=c("z6lm");function m(t,e){if(1&t&&b.Sb(0,"pbl-ngrid",13),2&t){const t=b.jc(2);b.qc("dataSource",t.ds)("columns",t.columns)}}function S(t,e){if(1&t&&b.Sb(0,"pbl-ngrid",14),2&t){const t=b.jc(2);b.qc("dataSource",t.ds)("columns",t.columns)}}function k(t,e){if(1&t&&b.Sb(0,"pbl-ngrid",15),2&t){const t=b.jc(2);b.qc("dataSource",t.ds)("columns",t.columns)}}function v(t,e){if(1&t&&b.Sb(0,"pbl-ngrid",16),2&t){const t=b.jc(2);b.qc("dataSource",t.ds)("columns",t.columns)}}function w(t,e){if(1&t&&(b.Vb(0,8),b.Jc(1,m,1,2,"pbl-ngrid",9),b.Jc(2,S,1,2,"pbl-ngrid",10),b.Jc(3,k,1,2,"pbl-ngrid",11),b.Jc(4,v,1,2,"pbl-ngrid",12),b.Ub()),2&t){b.jc();const t=b.vc(1);b.qc("ngSwitch",t.value),b.Fb(1),b.qc("ngSwitchCase","auto"),b.Fb(1),b.qc("ngSwitchCase","fixed"),b.Fb(1),b.qc("ngSwitchCase","dynamic"),b.Fb(1),b.qc("ngSwitchCase","none")}}let U=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=this.createDatasource()}removeDatasource(){this.ds&&(this.ds.dispose(),this.ds=void 0)}createDatasource(){return Object(r.t)().onTrigger(()=>this.datasource.getPeople(0,1500)).create()}};return t.\u0275fac=function(e){return new(e||t)(b.Rb(u.a))},t.\u0275cmp=b.Lb({type:t,selectors:[["pbl-virtual-scroll-example"]],decls:13,vars:2,consts:[["value","auto",3,"change"],["rdGroup","matRadioGroup"],["value","auto"],["value","fixed"],["value","dynamic"],["value","none"],[3,"ngSwitch",4,"ngIf"],["mat-button","",3,"disabled","click"],[3,"ngSwitch"],["blockUi","","vScrollAuto","",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollFixed","48",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollDynamic","",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollNone","",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollAuto","",3,"dataSource","columns"],["blockUi","","vScrollFixed","48",3,"dataSource","columns"],["blockUi","","vScrollDynamic","",3,"dataSource","columns"],["blockUi","","vScrollNone","",3,"dataSource","columns"]],template:function(t,e){1&t&&(b.Xb(0,"mat-radio-group",0,1),b.fc("change",function(){return e.removeDatasource()}),b.Xb(2,"mat-radio-button",2),b.Lc(3,"Auto Size"),b.Wb(),b.Xb(4,"mat-radio-button",3),b.Lc(5,"Fixed Size"),b.Wb(),b.Xb(6,"mat-radio-button",4),b.Lc(7,"Dynamic Size"),b.Wb(),b.Xb(8,"mat-radio-button",5),b.Lc(9,"No Virtual Scroll"),b.Wb(),b.Wb(),b.Jc(10,w,5,5,"ng-container",6),b.Xb(11,"button",7),b.fc("click",function(){return e.ds=e.createDatasource()}),b.Lc(12,"Load Data"),b.Wb()),2&t&&(b.Fb(10),b.qc("ngIf",e.ds),b.Fb(1),b.qc("disabled",e.ds))},directives:[s.b,s.a,o.t,o.x,o.y,d.a,p.b,h.a,g.a,f.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-virtual-scroll-example",{title:"Virtual Scroll"}),Object(i.b)("design:paramtypes",[u.a])],t),t})();var y=c("wl19");let x=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=this.createDatasource(),this.scrollingState=0}createDatasource(){return Object(r.t)().onTrigger(()=>this.datasource.getPeople(0,1500)).create()}setIsScrolling(t){this.scrollingState=t,t&&(this.lastScrollDirection=1===t?"END":"START")}};return t.\u0275fac=function(e){return new(e||t)(b.Rb(u.a))},t.\u0275cmp=b.Lb({type:t,selectors:[["pbl-scrolling-state-example"]],decls:12,vars:4,consts:[[3,"dataSource","columns","scrolling"],[1,"virtual-scroll-css-scrolling-demo-on"],[1,"virtual-scroll-css-scrolling-demo-off"]],template:function(t,e){1&t&&(b.Xb(0,"pbl-ngrid",0),b.fc("scrolling",function(t){return e.setIsScrolling(t)}),b.Wb(),b.Xb(1,"h1"),b.Lc(2,"Scrolling is "),b.Xb(3,"span",1),b.Lc(4,"ON"),b.Wb(),b.Xb(5,"span",2),b.Lc(6,"OFF"),b.Wb(),b.Lc(7," - (CSS)"),b.Wb(),b.Xb(8,"h1"),b.Lc(9),b.Wb(),b.Xb(10,"h1"),b.Lc(11),b.Wb()),2&t&&(b.qc("dataSource",e.ds)("columns",e.columns),b.Fb(9),b.Nc("Scrolling is ",e.scrollingState?"ON":"OFF"," - (scrolling) event"),b.Fb(2),b.Nc("Last Scrolling Direction: ",e.lastScrollDirection,""))},directives:[d.a,y.a],styles:["pbl-ngrid+h1 .virtual-scroll-css-scrolling-demo-on{display:none}.pbl-ngrid-scrolling+h1 .virtual-scroll-css-scrolling-demo-on{display:inline}.pbl-ngrid-scrolling+h1 .virtual-scroll-css-scrolling-demo-off{display:none}"],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-scrolling-state-example",{title:"Scrolling State"}),Object(i.b)("design:paramtypes",[u.a])],t),t})(),O=(()=>{let t=class{};return t.\u0275mod=b.Pb({type:t}),t.\u0275inj=b.Ob({factory:function(e){return new(e||t)},imports:[[o.c,s.c,a.a,r.k,n.a]]}),t=Object(i.a)([Object(l.a)(U,x)],t),t})()}}]);