"use strict";(self.webpackChunkarchery_stats=self.webpackChunkarchery_stats||[]).push([[867],{2985:(T,x,o)=>{o.r(x),o.d(x,{ListPageComponent:()=>B});var c=o(4755),u=o(3630),a=o(9560),n=o(2223),h=o(489),Z=o(5270),r=o(7322),d=o(2189),l=o(4926),g=o(84);function y(t,i){1&t&&(n.TgZ(0,"mat-icon"),n._uU(1," lock "),n.qZA())}const L=function(t){return{"padding-left.px":t}};function S(t,i){if(1&t&&(n.ynx(0),n.YNc(1,y,2,0,"mat-icon",0),n.TgZ(2,"div",1)(3,"div",2),n._uU(4),n.qZA(),n.TgZ(5,"div",3)(6,"span",4),n.ALo(7,"date"),n._uU(8),n.ALo(9,"dateDistance"),n.qZA()(),n.TgZ(10,"div",3)(11,"span"),n._uU(12),n.ALo(13,"average"),n.ALo(14,"pluck"),n.ALo(15,"flatten"),n.ALo(16,"pluck"),n.qZA(),n.TgZ(17,"span",5),n._uU(18,"\u2022"),n.qZA(),n._uU(19),n.ALo(20,"sum"),n.ALo(21,"pluck"),n.ALo(22,"flatten"),n.ALo(23,"pluck"),n.TgZ(24,"span",5),n._uU(25,"\u2022"),n.qZA(),n.TgZ(26,"span"),n._uU(27),n.qZA()()(),n.TgZ(28,"app-session-options-menu",6),n.NdJ("click",function(s){return s.stopPropagation()}),n.qZA(),n.BQk()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.session.locked),n.xp6(1),n.Q6J("ngStyle",n.VKq(33,L,e.session.locked?null:32)),n.xp6(2),n.Oqu(e.session.name),n.xp6(2),n.Q6J("title",n.lcZ(7,9,e.session.date_created)||""),n.xp6(2),n.hij(" ",n.lcZ(9,11,e.session.date_created)," "),n.xp6(4),n.hij(" Average: ",n.lcZ(13,13,n.xi3(14,15,n.lcZ(15,18,n.xi3(16,20,e.session.entries,"shots")),"value"))," "),n.xp6(7),n.hij(" Total: ",n.lcZ(20,23,n.xi3(21,25,n.lcZ(22,28,n.xi3(23,30,e.session.entries,"shots")),"value"))," "),n.xp6(8),n.hij(" Entires: ",e.session.entries.length," "),n.xp6(1),n.Q6J("session",e.session)}}let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-session-list-item"]],inputs:{session:"session"},standalone:!0,features:[n.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"main-item-content",3,"ngStyle"],[1,"row","title-row"],[1,"row"],[3,"title"],[2,"margin","0 4px"],[1,"action",3,"session","click"]],template:function(e,s){1&e&&n.YNc(0,S,29,35,"ng-container",0),2&e&&n.Q6J("ngIf",s.session)},dependencies:[c.O5,c.PC,c.uU,Z.n,r.p,d.F,h.p,l.q,g.i,a.Ps,a.Hw],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:var(--spacing-1x);padding:var(--spacing-1x);cursor:pointer}.active[_nghost-%COMP%]{background-color:var(--primary-default);color:var(--primary-default-contrast)}[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{min-width:24px}[_nghost-%COMP%]   .main-item-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;align-items:center;justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[_nghost-%COMP%]   .main-item-content[_ngcontent-%COMP%]   .title-row[_ngcontent-%COMP%]{font-size:1.25em;margin-bottom:4px}[_nghost-%COMP%]   app-session-options-menu[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),t})();var _=o(5159),A=o(7697);const I=function(t){return["/list",t]};function O(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"app-session-list-item",4),n.NdJ("click",function(){const v=n.CHM(e).$implicit,E=n.oxw(3);return n.KtG(E.sessionClicked.emit(v))}),n.ALo(1,"async"),n.qZA()}if(2&t){const e=i.$implicit,s=n.oxw(3);let p;n.ekj("active",e.id===(null==(p=n.lcZ(1,4,s.archerySessionRepo.activeSession$))?null:p.id)),n.Q6J("session",e)("routerLink",n.VKq(6,I,e.id))}}function M(t,i){if(1&t&&(n.ynx(0),n.YNc(1,O,2,8,"app-session-list-item",3),n.BQk()),2&t){const e=n.oxw().ngIf,s=n.oxw();n.xp6(1),n.Q6J("ngForOf",e)("ngForTrackBy",s.trackBy)}}function D(t,i){1&t&&(n.TgZ(0,"h2"),n._uU(1,"No sessions"),n.qZA())}function U(t,i){if(1&t&&(n.ynx(0),n.YNc(1,M,2,2,"ng-container",1),n.YNc(2,D,2,0,"ng-template",null,2,n.W1O),n.BQk()),2&t){const e=i.ngIf,s=n.MAs(3);n.xp6(1),n.Q6J("ngIf",e.length)("ngIfElse",s)}}let k=(()=>{class t{constructor(e){this.archerySessionRepo=e,this.sessionClicked=new n.vpe}trackBy(e,s){return s.id}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(A.H))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-session-list"]],outputs:{sessionClicked:"sessionClicked"},standalone:!0,features:[n.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["noSessions",""],[3,"session","routerLink","active","click",4,"ngFor","ngForOf","ngForTrackBy"],[3,"session","routerLink","click"]],template:function(e,s){1&e&&(n.YNc(0,U,4,2,"ng-container",0),n.ALo(1,"async")),2&e&&n.Q6J("ngIf",n.lcZ(1,1,s.archerySessionRepo.sortedSessions$))},dependencies:[c.ax,c.O5,c.Ov,_.Bz,_.rH,P],styles:["[_nghost-%COMP%]{display:block;padding:var(--spacing-1x) 0}app-session-list-item[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:var(--spacing-1x)}app-session-list-item[_ngcontent-%COMP%]:hover:not(.active){background-color:var(--list-item-hover-background)}"],changeDetection:0}),t})();var w=o(370),f=o(1728),m=o(5580),C=o(7406),N=o(8983);let Y=(()=>{class t{constructor(e){this.dialogRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(m.so))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-add-new-session-dialog"]],standalone:!0,features:[n.jDz],decls:7,vars:0,consts:[["mat-dialog-title",""],[3,"sessionAdded"],["mat-button","","mat-dialog-close",""]],template:function(e,s){1&e&&(n.TgZ(0,"h2",0),n._uU(1,"Start new session"),n.qZA(),n.TgZ(2,"mat-dialog-content")(3,"app-new-archery-session-form",1),n.NdJ("sessionAdded",function(v){return s.dialogRef.close(v)}),n.qZA()(),n.TgZ(4,"mat-dialog-actions")(5,"button",2),n._uU(6,"Cancel"),n.qZA()())},dependencies:[N.e,m.Is,m.ZT,m.uh,m.xY,m.H8,f.ot,f.lW],changeDetection:0}),t})();var Q=o(7323);function J(t,i){if(1&t&&(n.ynx(0),n.TgZ(1,"div",4)(2,"h2"),n._uU(3),n.qZA()(),n._UZ(4,"mat-divider",5)(5,"app-session-sort-menu")(6,"app-session-list"),n.BQk()),2&t){const e=n.oxw().ngIf;n.xp6(3),n.hij("Your sessions (",e.length,"):")}}function j(t,i){1&t&&(n.ynx(0),n.TgZ(1,"div",6)(2,"h2",7),n._uU(3,"No sessions yet"),n.qZA(),n.TgZ(4,"a",8)(5,"mat-icon"),n._uU(6,"add"),n.qZA(),n._uU(7," Create a new session "),n.qZA()(),n.BQk()),2&t&&(n.xp6(4),n.Q6J("routerLink","/new"))}function F(t,i){if(1&t&&(n.ynx(0),n.YNc(1,J,7,1,"ng-container",0),n.YNc(2,j,8,1,"ng-container",0),n.BQk()),2&t){const e=i.ngIf;n.xp6(1),n.Q6J("ngIf",e.length),n.xp6(1),n.Q6J("ngIf",!e.length)}}let B=(()=>{class t{constructor(e,s,p){this.archerySessionRepo=e,this.dialog=s,this.router=p}openNewSessionDialog(){this.dialog.open(Y,{width:"500px"}).afterClosed().subscribe(s=>{s&&this.router.navigate(["/list",s.id])})}openCSVFileImportDialog(){this.dialog.open(Q.L,{width:"500px"})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(A.H),n.Y36(m.uw),n.Y36(_.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-list-page"]],standalone:!0,features:[n.jDz],decls:15,vars:4,consts:[[4,"ngIf"],["mat-fab","","color","accent",3,"matMenuTriggerFor"],["addMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"margin-bottom-2x","flex-row"],[1,"margin-y-2x"],[1,"flex-column"],[2,"text-align","center"],["mat-stroked-button","",1,"margin-top-2x",3,"routerLink"]],template:function(e,s){if(1&e&&(n.YNc(0,F,3,2,"ng-container",0),n.ALo(1,"async"),n.TgZ(2,"button",1)(3,"mat-icon"),n._uU(4,"add"),n.qZA()(),n.TgZ(5,"mat-menu",null,2)(7,"button",3),n.NdJ("click",function(){return s.openNewSessionDialog()}),n.TgZ(8,"mat-icon"),n._uU(9,"add"),n.qZA(),n._uU(10," New Session "),n.qZA(),n.TgZ(11,"button",3),n.NdJ("click",function(){return s.openCSVFileImportDialog()}),n.TgZ(12,"mat-icon"),n._uU(13,"upload"),n.qZA(),n._uU(14," Import "),n.qZA()()),2&e){const p=n.MAs(6);n.Q6J("ngIf",n.lcZ(1,2,s.archerySessionRepo.sessions$)),n.xp6(2),n.Q6J("matMenuTriggerFor",p)}},dependencies:[c.O5,c.Ov,_.Bz,_.rH,k,w.A,u.t,u.d,a.Ps,a.Hw,f.ot,f.zs,f.cs,m.Is,C.Tx,C.VK,C.OP,C.p6],styles:["[_nghost-%COMP%]{display:block;padding:var(--spacing-3x) var(--spacing-1x)}@media (min-width: 768px){[_nghost-%COMP%]{padding:var(--spacing-3x)}}button[mat-fab][_ngcontent-%COMP%]{position:fixed;bottom:56px;right:8px;z-index:2}"],changeDetection:0}),t})()},9613:(T,x,o)=>{o.d(x,{M:()=>Z});var c=o(4755),u=o(1728),a=o(5580),n=o(2223);function h(r,d){if(1&r&&(n.TgZ(0,"p"),n._uU(1),n.qZA()),2&r){const l=n.oxw();n.xp6(1),n.hij(" ",l.data.text," ")}}let Z=(()=>{class r{constructor(l,g={}){this.dialogRef=l,this.data=g}}return r.\u0275fac=function(l){return new(l||r)(n.Y36(a.so),n.Y36(a.WI))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-are-you-sure-dialog"]],standalone:!0,features:[n.jDz],decls:10,vars:5,consts:[["mat-dialog-title",""],[4,"ngIf"],["mat-button","","mat-dialog-close",""],[1,"spacer"],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(l,g){1&l&&(n.TgZ(0,"h2",0),n._uU(1),n.qZA(),n.TgZ(2,"mat-dialog-content"),n.YNc(3,h,2,1,"p",1),n.qZA(),n.TgZ(4,"mat-dialog-actions")(5,"button",2),n._uU(6),n.qZA(),n._UZ(7,"span",3),n.TgZ(8,"button",4),n._uU(9),n.qZA()()),2&l&&(n.xp6(1),n.hij(" ",g.data.title||"Are you sure ?","\n"),n.xp6(2),n.Q6J("ngIf",g.data.text),n.xp6(3),n.hij(" ",g.data.noText||"No"," "),n.xp6(2),n.Q6J("mat-dialog-close",!0),n.xp6(1),n.hij(" ",g.data.yesText||"Yes"," "))},dependencies:[c.O5,a.Is,a.ZT,a.uh,a.xY,a.H8,u.ot,u.lW],changeDetection:0}),r})()}}]);