"use strict";(self.webpackChunkarchery_stats=self.webpackChunkarchery_stats||[]).push([[955],{6955:(B,c,t)=>{t.r(c),t.d(c,{SessionStatsPageComponent:()=>S});var d=t(6895),s=t(4650),p=t(3546),e=t(6858),u=t(1282),v=t(7579),P=t(2722),C=t(370),l=t(848),h=t(5621),g=t(6276),A=t(489),f=t(7322),L=t(2189),O=t(4926),D=t(7697);const M=["totalsChart"],T=["averagesChart"];function Z(n,i){1&n&&(s.TgZ(0,"div",7)(1,"h2",8),s._uU(2,"No sessions yet"),s.qZA()())}function y(n,i){if(1&n&&(s.TgZ(0,"mat-card-content")(1,"p"),s._uU(2),s.ALo(3,"average"),s.ALo(4,"pluck"),s.ALo(5,"flatten"),s.ALo(6,"pluck"),s.ALo(7,"flatten"),s.ALo(8,"pluck"),s.qZA(),s.TgZ(9,"p"),s._uU(10),s.ALo(11,"sum"),s.ALo(12,"pluck"),s.ALo(13,"flatten"),s.ALo(14,"pluck"),s.ALo(15,"flatten"),s.ALo(16,"pluck"),s.qZA()()),2&n){const a=i.ngIf;s.xp6(2),s.hij(" Average: ",s.lcZ(3,2,s.xi3(4,4,s.lcZ(5,7,s.xi3(6,9,s.lcZ(7,12,s.xi3(8,14,a,"entries")),"shots")),"value"))," "),s.xp6(8),s.hij(" Total: ",s.lcZ(11,17,s.xi3(12,19,s.lcZ(13,22,s.xi3(14,24,s.lcZ(15,27,s.xi3(16,29,a,"entries")),"shots")),"value"))," ")}}e.kL.register(e.vn,e.uw,e.f$,e.od,e.ZL,u.Z,e.u);let S=(()=>{class n{constructor(a){this.archerySessionRepo=a,this.destroy$=new v.x}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterViewInit(){this.setupDefaultChartColors();const a=new e.kL(this.totalsChart.nativeElement,{type:"bar",data:{datasets:[]}}),r=new e.kL(this.averagesChart.nativeElement,{type:"bar",data:{datasets:[]}});this.archerySessionRepo.sortedSessions$.pipe((0,P.R)(this.destroy$)).subscribe(o=>{const m=o.map(_=>_.name),E=o.map(_=>_.entries.map(R=>R.shots.map(x=>x.value))),I=E.map(_=>(0,g.Iz)(_.flat())),U=E.map(_=>+(0,g.Y8)(_.flat()).toFixed(2));a.data={labels:[...m],datasets:[{...l.$L,data:I}]},a.options={...l.NH},a.update("none"),r.data={labels:[...m],datasets:[{...l.$L,data:U}]},r.options={...l.NH},r.update("none")})}setupDefaultChartColors(){e.kL.defaults.color=h.I.foregroundText(),e.kL.defaults.borderColor=h.I.getProp("--foreground-divider")}}return n.\u0275fac=function(a){return new(a||n)(s.Y36(D.H))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-session-stats-page"]],viewQuery:function(a,r){if(1&a&&(s.Gf(M,5,s.SBq),s.Gf(T,5,s.SBq)),2&a){let o;s.iGM(o=s.CRH())&&(r.totalsChart=o.first),s.iGM(o=s.CRH())&&(r.averagesChart=o.first)}},standalone:!0,features:[s.jDz],decls:19,vars:6,consts:[["class","margin-bottom-8x",4,"ngIf"],["appearance","outlined",1,"margin-bottom-2x"],[4,"ngIf"],[1,"margin-bottom-2x"],[1,"chart-holder"],["averagesChart",""],["totalsChart",""],[1,"margin-bottom-8x"],[2,"text-align","center"]],template:function(a,r){if(1&a&&(s.YNc(0,Z,3,0,"div",0),s.ALo(1,"async"),s.TgZ(2,"mat-card",1)(3,"mat-card-header")(4,"mat-card-title"),s._uU(5,"Overall stats"),s.qZA()(),s.YNc(6,y,17,32,"mat-card-content",2),s.ALo(7,"async"),s.qZA(),s._UZ(8,"app-session-sort-menu",3),s.TgZ(9,"h2"),s._uU(10,"Averages per session"),s.qZA(),s.TgZ(11,"div",4),s._UZ(12,"canvas",null,5),s.qZA(),s.TgZ(14,"h2"),s._uU(15,"Totals per session"),s.qZA(),s.TgZ(16,"div",4),s._UZ(17,"canvas",null,6),s.qZA()),2&a){let o;s.Q6J("ngIf",!(null!=(o=s.lcZ(1,2,r.archerySessionRepo.sessions$))&&o.length)),s.xp6(6),s.Q6J("ngIf",s.lcZ(7,4,r.archerySessionRepo.sessions$))}},dependencies:[d.O5,d.Ov,O.q,A.p,L.F,f.p,C.A,p.QW,p.a8,p.dn,p.dk,p.n5],styles:["[_nghost-%COMP%]{display:block;padding:var(--spacing-3x) var(--spacing-1x)}@media (min-width: 768px){[_nghost-%COMP%]{padding:var(--spacing-3x)}}"],changeDetection:0}),n})()}}]);