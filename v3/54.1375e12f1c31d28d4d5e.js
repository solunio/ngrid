(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{R3BP:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return l}));var o=i("9bRT"),n=i("5XID"),r=i("XApm"),s=i("EM62");const c="blockUi";let l=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(c,this),t.registry.changes.subscribe((t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}})),e.events.subscribe((t=>{if("onDataSource"===t.kind){const{prev:e,curr:i}=t;e&&r.x.unrx.kill(this,e),i.onSourceChanging.pipe(r.x.unrx(this,i)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())})),i.onSourceChanged.pipe(r.x.unrx(this,i)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())}))}}))}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(n.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(o.a)(t)&&this._blockUi!==t?(Object(o.a)(this._blockUi)&&r.x.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(r.x.unrx(this,this._blockUi)).subscribe((t=>{this._blockInProgress=t,this.setupBlocker()}))):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){r.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(r.g),s.Sb(r.n))},t.\u0275dir=s.Nb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"WNo/":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var o=i("2kYt"),n=i("fL1z"),r=i("XApm"),s=i("R3BP"),c=i("EM62");let l=(()=>{class t{}return t.NGRID_PLUGIN=Object(r.v)({id:s.a},s.b),t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({factory:function(e){return new(e||t)},imports:[[o.c,n.r,r.k]]}),t})()},p080:function(t,e,i){"use strict";i.r(e),i.d(e,"CopySelectionExampleModule",(function(){return w}));var o=i("D57K"),n=i("XApm"),r=i("WNo/"),s=i("xVbo"),c=i("2kYt"),l=i("EM62");class a{constructor(t,e){this._document=e;const i=this._textarea=this._document.createElement("textarea"),o=i.style;o.position="fixed",o.top=o.opacity="0",o.left="-999em",i.setAttribute("aria-hidden","true"),i.value=t,this._document.body.appendChild(i)}copy(){const t=this._textarea;let e=!1;try{if(t){const i=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),e=this._document.execCommand("copy"),i&&i.focus()}}catch(i){}return e}destroy(){const t=this._textarea;t&&(t.parentNode&&t.parentNode.removeChild(t),this._textarea=void 0)}}let u=(()=>{class t{constructor(t){this._document=t}copy(t){const e=this.beginCopy(t),i=e.copy();return e.destroy(),i}beginCopy(t){return new a(t,this._document)}}return t.\u0275fac=function(e){return new(e||t)(l.cc(c.e))},t.\u0275prov=Object(l.Ob)({factory:function(){return new t(Object(l.cc)(c.e))},token:t,providedIn:"root"}),t})();const d=/^mac/.test(navigator.platform.toLowerCase()),p="clipboard";let h=(()=>{class t{constructor(t,e,i){this.grid=t,this.injector=e,this.pluginCtrl=i,this.config=e.get(n.h),this.clipboard=e.get(u),this.init()}static create(e,i){const o=n.n.find(e);return new t(e,i,o)}ngOnDestroy(){n.x.unrx.kill(this),this._removePlugin(this.grid)}isCopyEvent(t){return!!(t instanceof KeyboardEvent&&"c"===t.key&&(!d&&t.ctrlKey||d&&t.metaKey))}doCopy(){const{cellSeparator:t,rowSeparator:e}=this.config.get("clipboard",{}),{rows:i,minIndex:o}=this.getSelectedRowData(this.grid);this.clipboard.copy(i.map((e=>e.slice(o).join(this.clpCellSep||t||"\t"))).join(this.clpRowSep||e||"\n"))}getSelectedRowData(t){const{columnApi:e,contextApi:i}=t,o=new Map;let n=Number.MAX_SAFE_INTEGER;for(const s of i.selectedCells){const r=e.columns[s.colIndex];if(r){const c=e.renderIndexOf(r);if(c>-1){const e=i.findRowInCache(s.rowIdent).dataIndex,l=r.getValue(t.ds.source[e]),a=o.get(s.rowIdent)||[];a[c]=l,o.set(s.rowIdent,a),n=Math.min(n,c)}}}const r=Array.from(o.entries());return r.sort(((t,e)=>i.findRowInCache(t[0]).dataIndex<i.findRowInCache(e[0]).dataIndex?-1:1)),{minIndex:n,rows:r.map((t=>t[1]))}}init(){this._removePlugin=this.pluginCtrl.setPlugin(p,this),this.pluginCtrl.hasPlugin("targetEvents")||this.pluginCtrl.createPlugin("targetEvents"),this.pluginCtrl.getPlugin("targetEvents").keyDown.pipe(Object(s.a)((t=>this.isCopyEvent(t.source))),n.x.unrx(this)).subscribe((t=>this.doCopy()))}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(n.g),l.Sb(l.v),l.Sb(n.n))},t.\u0275dir=l.Nb({type:t,selectors:[["pbl-ngrid","clipboard",""]],inputs:{clpCellSep:"clpCellSep",clpRowSep:"clpRowSep"},exportAs:["pblNgridClipboard"]}),t})();var b=i("/kex");let g=(()=>{class t{constructor(e){n.n.onCreatedSafe(t,((t,i)=>{!0===e.get(p,{}).autoEnable&&i.onInit().subscribe((()=>{i.hasPlugin(p)||i.createPlugin(p)}))}))}}return t.NGRID_PLUGIN=Object(n.v)({id:p,factory:"create"},h),t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)(l.cc(n.h))},imports:[[c.c,n.k,b.a]]}),t})();var m=i("cc5W"),f=i("3JFK"),k=i("JRn2"),y=i("Ht9o"),x=i("xFh6");let _=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(n.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(n.t)().onTrigger((()=>this.datasource.getPeople(100,500))).create(),this.hideColumns=["bio"]}};return t.\u0275fac=function(e){return new(e||t)(l.Sb(k.a))},t.\u0275cmp=l.Mb({type:t,selectors:[["pbl-copy-selection-example"]],decls:1,vars:3,consts:[["clipboard","","focusMode","cell",3,"dataSource","columns","hideColumns"]],template:function(t,e){1&t&&l.Tb(0,"pbl-ngrid",0),2&t&&l.rc("dataSource",e.ds)("columns",e.columns)("hideColumns",e.hideColumns)},directives:[y.a,h,x.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(o.a)([Object(m.e)("pbl-copy-selection-example",{title:"Copy Selection"})],t),t})(),w=(()=>{let t=class{};return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)},imports:[[f.a,n.k,r.a,g]]}),t=Object(o.a)([Object(m.a)(_)],t),t})()}}]);