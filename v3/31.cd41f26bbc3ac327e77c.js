(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"5sAW":function(t,e,i){"use strict";i.r(e),i.d(e,"CellTooltipExampleModule",(function(){return m}));var s=i("D57K"),o=i("2kYt"),l=i("XApm"),c=i("ZL4A"),n=i("WNo/"),r=i("cc5W"),a=i("3JFK"),h=i("JRn2"),p=i("EM62"),u=i("Ht9o"),b=i("R3BP"),d=i("cUDL");let g=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(l.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"}).build(),this.ds=Object(l.t)().onTrigger((()=>this.datasource.getPeople(0,15))).create()}};return t.\u0275fac=function(e){return new(e||t)(p.Sb(h.a))},t.\u0275cmp=p.Mb({type:t,selectors:[["pbl-cell-tooltip-example"]],decls:1,vars:2,consts:[["cellTooltip","","blockUi","",1,"pbl-ngrid-cell-ellipsis",3,"dataSource","columns"]],template:function(t,e){1&t&&p.Tb(0,"pbl-ngrid",0),2&t&&p.rc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,b.b,d.b],styles:[""],encapsulation:2,changeDetection:0}),t=Object(s.a)([Object(r.e)("pbl-cell-tooltip-example",{title:"Cell Tooltip"})],t),t})(),f=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(l.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"}).build(),this.ds=Object(l.t)().onTrigger((()=>this.datasource.getPeople(0,15))).create()}getTooltipMessage(t){return`${t.colIndex} / ${t.rowIndex} -> ${t.rowIndex%2?"ODD":"EVEN"} ROW\n\n${t.cellTarget.innerText}`}};return t.\u0275fac=function(e){return new(e||t)(p.Sb(h.a))},t.\u0275cmp=p.Mb({type:t,selectors:[["pbl-custom-setup-example"]],decls:2,vars:3,consts:[["blockUi","",1,"pbl-ngrid-cell-ellipsis",3,"dataSource","columns"],["cellTooltip","","tooltipClass","my-cell-tooltip","position","above","showDelay","500","showHide","250",3,"message"]],template:function(t,e){1&t&&(p.Yb(0,"pbl-ngrid",0),p.Ub(1,1),p.Xb()),2&t&&(p.rc("dataSource",e.ds)("columns",e.columns),p.Gb(1),p.rc("message",e.getTooltipMessage))},directives:[u.a,b.b,d.b],styles:[".my-cell-tooltip{background:red;font-size:18px}"],encapsulation:2,changeDetection:0}),t=Object(s.a)([Object(r.e)("pbl-custom-setup-example",{title:"Custom Setup"})],t),t})(),m=(()=>{let t=class{};return t.\u0275mod=p.Qb({type:t}),t.\u0275inj=p.Pb({factory:function(e){return new(e||t)},imports:[[o.c,a.a,l.k,n.a,c.a]]}),t=Object(s.a)([Object(r.a)(g,f)],t),t})()},R3BP:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}));var s=i("9bRT"),o=i("5XID"),l=i("XApm"),c=i("EM62");const n="blockUi";let r=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(n,this),t.registry.changes.subscribe((t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}})),e.events.subscribe((t=>{if("onDataSource"===t.kind){const{prev:e,curr:i}=t;e&&l.x.unrx.kill(this,e),i.onSourceChanging.pipe(l.x.unrx(this,i)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())})),i.onSourceChanged.pipe(l.x.unrx(this,i)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())}))}}))}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(o.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(s.a)(t)&&this._blockUi!==t?(Object(s.a)(this._blockUi)&&l.x.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(l.x.unrx(this,this._blockUi)).subscribe((t=>{this._blockInProgress=t,this.setupBlocker()}))):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){l.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(l.g),c.Sb(l.n))},t.\u0275dir=c.Nb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"WNo/":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("2kYt"),o=i("fL1z"),l=i("XApm"),c=i("R3BP"),n=i("EM62");let r=(()=>{class t{}return t.NGRID_PLUGIN=Object(l.v)({id:c.a},c.b),t.\u0275mod=n.Qb({type:t}),t.\u0275inj=n.Pb({factory:function(e){return new(e||t)},imports:[[s.c,o.r,l.k]]}),t})()},ZL4A:function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var s=i("2kYt"),o=i("HYj3"),l=i("Y2X+"),c=i("XApm"),n=i("/kex"),r=i("cUDL"),a=i("EM62");let h=(()=>{class t{constructor(t,e){t||c.n.created.subscribe((t=>{const i=e.get(r.b.PLUGIN_KEY);if(i&&!0===i.autoSetAll){const e=t.controller;e.onInit().subscribe((t=>{e.hasPlugin(r.b.PLUGIN_KEY)||e.createPlugin(r.b.PLUGIN_KEY)}))}}))}}return t.NGRID_PLUGIN=Object(c.v)({id:r.a,factory:"create"},r.b),t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(e){return new(e||t)(a.cc(t,12),a.cc(c.h))},imports:[[s.c,l.d,o.f,c.k,n.a],l.d]}),t})()},cUDL:function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return d}));var s=i("EM62"),o=i("5XID"),l=i("sg/T"),c=i("E5oP"),n=i("HYj3"),r=i("qvOF"),a=i("cZZj"),h=i("Y2X+"),p=i("XApm");const u="cellTooltip",b={canShow:t=>{const e=t.cellTarget.firstElementChild||t.cellTarget;return e.scrollWidth>e.offsetWidth},message:t=>t.cellTarget.innerText};let d=(()=>{class t{constructor(t,e,i){this.table=t,this.injector=e,this._removePlugin=i.setPlugin(u,this);const o=e.get(p.h);this.initArgs=[e.get(n.c),null,e.get(r.g),e.get(s.U),e.get(s.E),e.get(a.a),e.get(l.c),e.get(l.h),e.get(h.b),e.get(c.c),e.get(h.a)],o.onUpdate("cellTooltip").pipe(p.x.unrx(this)).subscribe((t=>this.lastConfig=t.curr)),i.onInit().subscribe((()=>this.init(i)))}set canShow(t){this._canShow="function"==typeof t?t:""===t?void 0:Object(o.c)(t)?t=>!0:t=>!1}static create(e,i){return new t(e,i,p.n.find(e))}ngOnDestroy(){this._removePlugin(this.table),this.killTooltip(),p.x.unrx.kill(this)}init(t){const e=t.getPlugin("targetEvents")||t.createPlugin("targetEvents");e.cellEnter.pipe(p.x.unrx(this)).subscribe((t=>this.cellEnter(t))),e.cellLeave.pipe(p.x.unrx(this)).subscribe((t=>this.cellLeave(t)))}cellEnter(t){if(this.killTooltip(),this._canShow||(this.canShow=this.lastConfig&&this.lastConfig.canShow||b.canShow),this._canShow(t)){const e=this.initArgs.slice();e[1]=new s.m(t.cellTarget),this.toolTip=new h.c(...e),this.toolTip.message=(this.message||this.lastConfig&&this.lastConfig.message||b.message)(t),this.position&&(this.toolTip.position=this.position),this.tooltipClass&&(this.toolTip.tooltipClass=this.tooltipClass),this.showDelay>=0&&(this.toolTip.showDelay=this.showDelay),this.hideDelay>=0&&(this.toolTip.hideDelay=this.hideDelay),this.toolTip.show()}}cellLeave(t){this.killTooltip()}killTooltip(){this.toolTip&&(this.toolTip.hide(),this.toolTip.ngOnDestroy(),this.toolTip=void 0)}}return t.PLUGIN_KEY=u,t.\u0275fac=function(e){return new(e||t)(s.Sb(p.g),s.Sb(s.v),s.Sb(p.n))},t.\u0275dir=s.Nb({type:t,selectors:[["","cellTooltip",""]],inputs:{canShow:["cellTooltip","canShow"],message:"message",position:"position",tooltipClass:"tooltipClass",showDelay:"showDelay",hideDelay:"hideDelay"},exportAs:["pblOverflowTooltip"]}),t})()}}]);