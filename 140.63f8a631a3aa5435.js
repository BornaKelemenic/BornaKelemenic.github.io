"use strict";(self.webpackChunkarchery_stats=self.webpackChunkarchery_stats||[]).push([[140],{8140:(L,m,s)=>{s.r(m),s.d(m,{SessionStatsPageComponent:()=>O});var v=s(4755),t=s(2223),p=s(6012),e=s(5743),u=s(1282),d=s(9698),T=s(7579),x=s(2722),D=s(370),h=s(6276);let P=(()=>{class n{transform(a){return a&&a.length?a.map(r=>(0,h.Iz)(r.entries.map(o=>o.shots.map(g=>g.value)).flat())):[]}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275pipe=t.Yjl({name:"sessionTotals",type:n,pure:!0,standalone:!0}),n})();var l=s(848),Z=s(5621),I=s(489),U=s(7322),b=s(2189),$=s(4926),j=s(5528),R=s(7697);const H=["totalsChart"],N=["averagesChart"],Y=["shotDistributionChart"];function G(n,c){1&n&&(t.TgZ(0,"div",8)(1,"h2",9),t._uU(2,"No sessions yet"),t.qZA()())}function M(n,c){if(1&n&&(t.TgZ(0,"mat-card-content")(1,"p"),t._uU(2),t.ALo(3,"average"),t.ALo(4,"pluck"),t.ALo(5,"flatten"),t.ALo(6,"pluck"),t.ALo(7,"flatten"),t.ALo(8,"pluck"),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.ALo(11,"sum"),t.ALo(12,"pluck"),t.ALo(13,"flatten"),t.ALo(14,"pluck"),t.ALo(15,"flatten"),t.ALo(16,"pluck"),t.qZA(),t.TgZ(17,"p"),t._uU(18),t.ALo(19,"average"),t.ALo(20,"sessionTotals"),t.qZA()()),2&n){const a=c.ngIf;t.xp6(2),t.hij(" Average: ",t.lcZ(3,3,t.xi3(4,5,t.lcZ(5,8,t.xi3(6,10,t.lcZ(7,13,t.xi3(8,15,a,"entries")),"shots")),"value"))," "),t.xp6(8),t.hij(" Total: ",t.lcZ(11,18,t.xi3(12,20,t.lcZ(13,23,t.xi3(14,25,t.lcZ(15,28,t.xi3(16,30,a,"entries")),"shots")),"value"))," "),t.xp6(8),t.hij(" Average Total: ",t.lcZ(19,33,t.lcZ(20,35,a))," ")}}e.kL.register(e.vn,e.ST,e.uw,e.f$,e.od,e.ZL,e.jn,u.Z,e.u,e.Gu,d.Z);let O=(()=>{class n{constructor(a){this.archerySessionRepo=a,this.destroy$=new T.x}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterViewInit(){this.setupDefaultChartColors();const a=new e.kL(this.totalsChart.nativeElement,{type:"bar",data:{datasets:[]}}),r=new e.kL(this.averagesChart.nativeElement,{type:"bar",data:{datasets:[]}}),o=new e.kL(this.shotDistributionChart.nativeElement,{type:"line",data:{datasets:[]}});this.archerySessionRepo.sortedSessions$.pipe((0,x.R)(this.destroy$)).subscribe(g=>{const C=g.map(i=>i.name),A=g.map(i=>i.entries.map(f=>f.shots.map(z=>z.value))),y=A.map(i=>(0,h.Iz)(i.flat())),S=A.map(i=>i.length?+(0,h.Y8)(i.flat()).toFixed(2):0);a.data={labels:[...C],datasets:[{...l.$L,data:y}]},a.options={...l.NH,plugins:{...l.NH.plugins,annotation:{annotations:{averageLine:{drawTime:"afterDatasetsDraw",type:"line",scaleID:"y",value:(0,h.Y8)(y),borderColor:"red",borderDash:[6,6]}}}}},a.update("none"),r.data={labels:[...C],datasets:[{...l.$L,data:S}]},r.options={...l.NH,plugins:{...l.NH.plugins,annotation:{annotations:{averageLine:{drawTime:"afterDatasetsDraw",type:"line",scaleID:"y",value:(0,h.Y8)(S),borderColor:"red",borderDash:[6,6]}}}}},r.update("none"),o.data={labels:new Array(11).fill(0).map((i,f)=>f),datasets:[{...l.EC,data:(0,j.iA)(g.map(i=>i.entries).flat()).asArray}]},o.options={...(0,l.lR)(void 0,null),scales:{y:{beginAtZero:!0,ticks:{precision:0}}}},o.update("none")})}setupDefaultChartColors(){e.kL.defaults.color=Z.I.foregroundText(),e.kL.defaults.borderColor=Z.I.getProp("--foreground-divider")}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(R.H))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-session-stats-page"]],viewQuery:function(a,r){if(1&a&&(t.Gf(H,5,t.SBq),t.Gf(N,5,t.SBq),t.Gf(Y,5,t.SBq)),2&a){let o;t.iGM(o=t.CRH())&&(r.totalsChart=o.first),t.iGM(o=t.CRH())&&(r.averagesChart=o.first),t.iGM(o=t.CRH())&&(r.shotDistributionChart=o.first)}},standalone:!0,features:[t.jDz],decls:24,vars:6,consts:[["class","margin-bottom-8x",4,"ngIf"],["appearance","outlined",1,"margin-bottom-2x"],[4,"ngIf"],[1,"margin-bottom-2x"],[1,"chart-holder"],["averagesChart",""],["totalsChart",""],["shotDistributionChart",""],[1,"margin-bottom-8x"],[2,"text-align","center"]],template:function(a,r){if(1&a&&(t.YNc(0,G,3,0,"div",0),t.ALo(1,"async"),t.TgZ(2,"mat-card",1)(3,"mat-card-header")(4,"mat-card-title"),t._uU(5,"Overall stats"),t.qZA()(),t.YNc(6,M,21,37,"mat-card-content",2),t.ALo(7,"async"),t.qZA(),t._UZ(8,"app-session-sort-menu",3),t.TgZ(9,"h2"),t._uU(10,"Averages per session"),t.qZA(),t.TgZ(11,"div",4),t._UZ(12,"canvas",null,5),t.qZA(),t.TgZ(14,"h2"),t._uU(15,"Totals per session"),t.qZA(),t.TgZ(16,"div",4),t._UZ(17,"canvas",null,6),t.qZA(),t.TgZ(19,"h2"),t._uU(20,"Shot distribution"),t.qZA(),t.TgZ(21,"div",4),t._UZ(22,"canvas",null,7),t.qZA()),2&a){let o;t.Q6J("ngIf",!(null!=(o=t.lcZ(1,2,r.archerySessionRepo.sessions$))&&o.length)),t.xp6(6),t.Q6J("ngIf",t.lcZ(7,4,r.archerySessionRepo.sessions$))}},dependencies:[v.O5,v.Ov,$.q,I.p,b.F,U.p,P,D.A,p.QW,p.a8,p.dn,p.dk,p.n5],styles:["[_nghost-%COMP%]{display:block;padding:var(--spacing-3x) var(--spacing-1x)}@media (min-width: 768px){[_nghost-%COMP%]{padding:var(--spacing-3x)}}"],changeDetection:0}),n})()},6276:(L,m,s)=>{function v(e){return e.reduce((u,d)=>u+d,0)}function t(e){return e.reduce((u,d)=>u+d,0)/e.length}function p(e,u,d){return Math.min(Math.max(e,u),d)}s.d(m,{Iz:()=>v,Y8:()=>t,uZ:()=>p})}}]);