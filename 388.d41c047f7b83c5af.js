"use strict";(self.webpackChunkarchery_stats=self.webpackChunkarchery_stats||[]).push([[388],{388:(Y,g,i)=>{i.r(g),i.d(g,{ActiveSessionPageComponent:()=>Q});var l=i(6895),h=i(4850),f=i(7009),d=i(9132),S=i(7579),_=i(2722),b=i(8735),C=i(5985),t=i(4650),u=i(4859),x=i(5412),m=(()=>((m||(m={})).DELETE="delete",m))(),c=(()=>{return(e=c||(c={})).GOLD="gold-scheme",e.RED="red-scheme",e.BLUE="blue-scheme",e.BLACK="black-scheme",e.WHITE="white-scheme",c;var e})(),v=i(6235);function I(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){const a=t.CHM(n).$implicit,p=t.oxw(2);return t.KtG(p.action.emit(a.action))}),t.ALo(1,"async"),t._uU(2),t.qZA()}if(2&e){const n=s.$implicit,o=t.oxw(2);t.Tol(t.lcZ(1,3,o.settingsRepo.showColouredInputButton$)&&n.colorScheme||null),t.xp6(2),t.hij(" ",n.label," ")}}function A(e,s){if(1&e&&(t.TgZ(0,"div",1),t.YNc(1,I,3,5,"button",2),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.scoreInputConfig)}}const T=[{label:"0",action:0},{label:"10",action:10,colorScheme:c.GOLD},{label:"DEL",action:m.DELETE},{label:"7",action:7,colorScheme:c.RED},{label:"8",action:8,colorScheme:c.RED},{label:"9",action:9,colorScheme:c.GOLD},{label:"4",action:4,colorScheme:c.BLACK},{label:"5",action:5,colorScheme:c.BLUE},{label:"6",action:6,colorScheme:c.BLUE},{label:"1",action:1,colorScheme:c.WHITE},{label:"2",action:2,colorScheme:c.WHITE},{label:"3",action:3,colorScheme:c.BLACK}];let O=(()=>{class e{constructor(n){this.settingsRepo=n,this.scoreInputConfig=T,this.action=new t.vpe}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.i))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-score-input-buttons"]],inputs:{scoreInputConfig:"scoreInputConfig"},outputs:{action:"action"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","button-grid",4,"ngIf"],[1,"button-grid"],["mat-stroked-button","",3,"class","click",4,"ngFor","ngForOf"],["mat-stroked-button","",3,"click"]],template:function(n,o){1&n&&t.YNc(0,A,2,1,"div",0),2&n&&t.Q6J("ngIf",o.scoreInputConfig)},dependencies:[l.ax,l.O5,l.Ov,u.ot,u.lW],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}.button-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,min-content);gap:var(--spacing-2x)}.button-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50px;height:50px;min-width:0}"]}),e})();const E=["*"];let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-score-input-display-block"]],standalone:!0,features:[t.jDz],ngContentSelectors:E,decls:1,vars:0,template:function(n,o){1&n&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;justify-content:center;font-size:1.25em;padding:.25em;width:50px;height:50px}[_nghost-%COMP%]:not(.active){cursor:pointer}.active[_nghost-%COMP%]{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}"]}),e})();var y=i(4298),Z=i(9613);function B(e,s){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"app-score-input-display-block",4),t.NdJ("click",function(){const a=t.CHM(n).index,p=t.oxw();return t.KtG(p.activeShotIndex=a)}),t._uU(2),t.qZA(),t.BQk()}if(2&e){const n=s.$implicit,o=s.index,r=t.oxw();let a;t.xp6(1),t.ekj("active",o===r.activeShotIndex),t.xp6(1),t.hij(" ",null!==(a=null==n?null:n.value)&&void 0!==a?a:"-"," ")}}let P=(()=>{class e{set session(n){this.numberOfArrows=n.numberOfArrows}set numberOfArrows(n){this._numberOfArrows=n,this.resetShots()}get numberOfArrows(){return this._numberOfArrows}constructor(n){this.dialog=n,this._numberOfArrows=6,this.activeShotIndex=0,this.shots=[],this.savedEntry=new t.vpe}resetShots(){this.shots=new Array(this.numberOfArrows).fill(null),this.activeShotIndex=0}saveEntryToRepo(n){this.savedEntry.emit((0,y.Yo)({shots:n})),this.resetShots()}buttonInputAction(n){"number"==typeof n?(this.shots[this.activeShotIndex]=(0,y.Ey)({value:n}),this.activeShotIndex=++this.activeShotIndex%this.shots.length):this.shots[this.activeShotIndex]=null}save(){const n=this.shots.filter(o=>!!o).sort((o,r)=>r.value-o.value);n.length?this.saveEntryToRepo(n):this.dialog.open(Z.M,{restoreFocus:!1,autoFocus:!1,width:"500px",data:{title:"Are you sure you want to add an entry with no shots ?"}}).afterClosed().subscribe(r=>{r&&this.saveEntryToRepo(n)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(x.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-score-input"]],inputs:{session:"session"},outputs:{savedEntry:"savedEntry"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"blocks-grid","margin-bottom-4x"],[4,"ngFor","ngForOf"],[3,"action"],["mat-raised-button","","color","primary",1,"margin-top-4x",3,"click"],[3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.YNc(1,B,3,3,"ng-container",1),t.qZA(),t.TgZ(2,"app-score-input-buttons",2),t.NdJ("action",function(a){return o.buttonInputAction(a)}),t.qZA(),t.TgZ(3,"button",3),t.NdJ("click",function(){return o.save()}),t._uU(4," Save\n"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",o.shots))},dependencies:[l.ax,w,O,u.ot,u.lW,x.Is],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}.blocks-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,min-content);gap:var(--spacing-2x)}"]}),e})();var D=i(8778),k=i(2823);function F(e,s){if(1&e&&t._UZ(0,"app-entries-table",8),2&e){const n=t.oxw(4);t.Q6J("entries",n.entries)}}function L(e,s){if(1&e&&t._UZ(0,"app-entries-circles-list",8),2&e){const n=t.oxw(4);t.Q6J("entries",n.entries)}}function J(e,s){if(1&e&&(t.ynx(0),t.YNc(1,F,1,1,"app-entries-table",7),t.YNc(2,L,1,1,"app-entries-circles-list",7),t.BQk()),2&e){const n=s.ngIf;t.xp6(1),t.Q6J("ngIf","table"===n),t.xp6(1),t.Q6J("ngIf","circles"===n)}}function R(e,s){if(1&e&&(t.ynx(0),t.YNc(1,J,3,2,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.settingsRepo.entryListStyle$))}}function M(e,s){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4),t.qZA(),t.TgZ(5,"h5",4),t.ALo(6,"date"),t._uU(7),t.ALo(8,"dateDistance"),t.qZA()()(),t._UZ(9,"mat-divider",5),t.TgZ(10,"app-score-input",6),t.NdJ("savedEntry",function(r){t.CHM(n);const a=t.oxw();return t.KtG(a.archerySessionRepo.addEntryForActiveSession(r))}),t.qZA(),t.YNc(11,R,3,3,"ng-container",0),t.BQk()}if(2&e){const n=s.ngIf,o=t.oxw();t.xp6(4),t.Oqu(n.name),t.xp6(1),t.Q6J("title",t.lcZ(6,5,n.date_created)),t.xp6(2),t.hij(" Created: ",t.lcZ(8,7,n.date_created)," "),t.xp6(3),t.Q6J("session",n),t.xp6(1),t.Q6J("ngIf",o.entries.length)}}let Q=(()=>{class e{constructor(n,o,r,a,p){this.router=n,this.route=o,this.archerySessionRepo=r,this.snackbar=a,this.settingsRepo=p,this.destroy$=new S.x,this.entries=[]}ngOnInit(){this.route.params.pipe((0,_.R)(this.destroy$)).subscribe(n=>{const o=n.id;o?(this.archerySessionRepo.setActiveSession(o),this.archerySessionRepo.getActiveSession()||(this.snackbar.open("The session with that ID was not found","OK"),this.router.navigateByUrl("/list"))):this.router.navigateByUrl("/list")}),this.archerySessionRepo.activeSession$.pipe((0,_.R)(this.destroy$)).subscribe(n=>{this.entries=n?.entries?[...n.entries]:[]})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.F0),t.Y36(d.gz),t.Y36(k.H),t.Y36(f.ux),t.Y36(v.i))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-active-session-page"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"title-row"],[1,"flex-column"],[1,"margin-bottom-1x"],[3,"title"],[1,"margin-top-2x","margin-bottom-2x"],[1,"margin-bottom-8x",3,"session","savedEntry"],["class","margin-bottom-8x",3,"entries",4,"ngIf"],[1,"margin-bottom-8x",3,"entries"]],template:function(n,o){1&n&&(t.YNc(0,M,12,9,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,o.archerySessionRepo.activeSession$))},dependencies:[l.O5,l.Ov,d.Bz,l.uU,D.n,P,b.j,C.S,f.ZX,h.t,h.d],styles:["[_nghost-%COMP%]{display:block;padding:var(--spacing-3x) var(--spacing-1x)}@media (min-width: 768px){[_nghost-%COMP%]{padding:var(--spacing-3x)}}.title-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--spacing-2x)}"]}),e})()}}]);