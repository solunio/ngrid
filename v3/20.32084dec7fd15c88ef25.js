(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4DA5":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a});var s=r("7+OI"),c=r("8LU1"),i=r("XEBs"),o=r("fXoL");const n="blockUi";let a=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(n,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.onInit().subscribe(e=>{e&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:r}=e;t&&i.x.unrx.kill(this,t),r.onSourceChanging.pipe(i.x.unrx(this,r)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),r.onSourceChanged.pipe(i.x.unrx(this,r)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(c.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(s.a)(e)&&this._blockUi!==e?(Object(s.a)(this._blockUi)&&i.x.unrx.kill(this,this._blockUi),this._blockUi=e,e.pipe(i.x.unrx(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){i.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(i.g),o.Sb(i.n))},e.\u0275dir=o.Nb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var s=r("ofXK"),c=r("f6nW"),i=r("XEBs"),o=r("4DA5"),n=r("fXoL");let a=(()=>{class e{}return e.NGRID_PLUGIN=Object(i.v)({id:o.a},o.b),e.\u0275mod=n.Qb({type:e}),e.\u0275inj=n.Pb({factory:function(t){return new(t||e)},imports:[[s.c,c.r,i.k]]}),e})()},CebM:function(e,t,r){"use strict";r.r(t),r.d(t,"TransposeExampleModule",function(){return _});var s=r("mrSG"),c=r("ofXK"),i=r("bSwM"),o=r("XEBs"),n=r("V+x2"),a=r("6JOf"),l=r("YT2F"),b=r("WPM6"),u=r("fluT"),d=r("fXoL"),p=r("XkVd"),f=r("4DA5"),h=r("X2ne"),g=r("aR4q");function m(e,t){if(1&e&&(d.Yb(0,"div"),d.Lc(1),d.lc(2,"date"),d.Xb()),2&e){const e=t.value,r=t.col;d.Gb(1),d.Mc(d.nc(2,1,e,r.type.data.format))}}function k(e,t){if(1&e&&(d.Yb(0,"div",4),d.Lc(1),d.Xb()),2&e){const e=t.value;d.Gb(1),d.Mc(e)}}let y=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,5)).create(),this.transposeToggle=!1}};return e.\u0275fac=function(t){return new(t||e)(d.Sb(u.a))},e.\u0275cmp=d.Mb({type:e,selectors:[["pbl-transpose-example"]],decls:5,vars:6,consts:[["blockUi","",3,"transpose","dataSource","columns"],[4,"pblNgridCellTypeDef"],["style","background: green",4,"pblNgridCellDef"],[3,"checked","change"],[2,"background","green"]],template:function(e,t){1&e&&(d.Yb(0,"pbl-ngrid",0),d.Jc(1,m,3,4,"div",1),d.Jc(2,k,2,1,"div",2),d.Xb(),d.Yb(3,"mat-checkbox",3),d.gc("change",function(e){return t.transposeToggle=e.checked}),d.Lc(4,"Transpose Enabled"),d.Xb()),2&e&&(d.rc("transpose",t.transposeToggle)("dataSource",t.ds)("columns",t.columns),d.Gb(1),d.rc("pblNgridCellTypeDef","date"),d.Gb(1),d.rc("pblNgridCellDef","name"),d.Gb(1),d.rc("checked",t.transposeToggle))},directives:[p.a,f.b,h.b,g.a,i.a],pipes:[c.f],styles:[""],encapsulation:2,changeDetection:0}),e=Object(s.a)([Object(l.e)("pbl-transpose-example",{title:"Transpose"}),Object(s.b)("design:paramtypes",[u.a])],e),e})();function v(e,t){if(1&e&&(d.Yb(0,"div",2),d.Lc(1),d.Xb()),2&e){const e=t.value;d.Gb(1),d.Mc(e)}}let O=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}};return e.\u0275fac=function(t){return new(t||e)(d.Sb(u.a))},e.\u0275cmp=d.Mb({type:e,selectors:[["pbl-original-templates-example"]],decls:2,vars:3,consts:[["blockUi","","transpose","","matchTemplates","",3,"dataSource","columns"],["style","background: green",4,"pblNgridCellDef"],[2,"background","green"]],template:function(e,t){1&e&&(d.Yb(0,"pbl-ngrid",0),d.Jc(1,v,2,1,"div",1),d.Xb()),2&e&&(d.rc("dataSource",t.ds)("columns",t.columns),d.Gb(1),d.rc("pblNgridCellDef","name"))},directives:[p.a,f.b,h.b,g.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(s.a)([Object(l.e)("pbl-original-templates-example",{title:"Transpose with Original Templates"}),Object(s.b)("design:paramtypes",[u.a])],e),e})();function j(e,t){if(1&e&&(d.Yb(0,"div",2),d.Lc(1),d.Xb()),2&e){const e=t.value;d.Gb(1),d.Mc(e)}}const x=function(){return{minWidth:100}};let w=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,25)).create()}};return e.\u0275fac=function(t){return new(t||e)(d.Sb(u.a))},e.\u0275cmp=d.Mb({type:e,selectors:[["pbl-with-column-styles-example"]],decls:2,vars:5,consts:[["blockUi","","transpose","",3,"transposeDefaultCol","dataSource","columns"],["style","background: green",4,"pblNgridCellDef"],[2,"background","green"]],template:function(e,t){1&e&&(d.Yb(0,"pbl-ngrid",0),d.Jc(1,j,2,1,"div",1),d.Xb()),2&e&&(d.rc("transposeDefaultCol",d.sc(4,x))("dataSource",t.ds)("columns",t.columns),d.Gb(1),d.rc("pblNgridCellDef","name"))},directives:[p.a,f.b,h.b,g.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(s.a)([Object(l.e)("pbl-with-column-styles-example",{title:"With Column Styles"}),Object(s.b)("design:paramtypes",[u.a])],e),e})(),_=(()=>{let e=class{};return e.\u0275mod=d.Qb({type:e}),e.\u0275inj=d.Pb({factory:function(t){return new(t||e)},imports:[[c.c,i.b,b.a,o.k,n.a,a.a]]}),e=Object(s.a)([Object(l.a)(y,O,w)],e),e})()},WPM6:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var s=r("XiUz"),c=r("znSr"),i=r("YT2F"),o=r("fXoL");let n=(()=>{class e{}return e.\u0275mod=o.Qb({type:e}),e.\u0275inj=o.Pb({factory:function(t){return new(t||e)},imports:[[s.i,c.e,i.l],s.i,c.e,i.l]}),e})()},mrSG:function(e,t,r){"use strict";function s(e,t,r,s){var c,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(o=(i<3?c(o):i>3?c(t,r,o):c(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}r.d(t,"a",function(){return s}),r.d(t,"b",function(){return c})}}]);