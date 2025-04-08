import{b as st,e as ct,f as mt,g as pt,h as ut}from"./chunk-R7CAJH77.js";import{c as lt}from"./chunk-OSBMY2EH.js";import{d as at}from"./chunk-R5MC2COQ.js";import"./chunk-2XJIAOKA.js";import"./chunk-4UFJ22MJ.js";import{b as q,c as z,d as J,f as X,g as Y,h as Z}from"./chunk-AJ2IXDOU.js";import{a as nt}from"./chunk-YBGHXX72.js";import{a as b,c as d,i as E,k as rt,o as k,q as ot,t as it}from"./chunk-F2UQBV34.js";import{m as R,o as W,q as H}from"./chunk-7Q7KTEYE.js";import{$a as u,Da as V,Ia as p,Mc as K,N as P,Qa as y,Qb as j,Qc as Q,R as T,Ra as x,Rc as U,Sa as o,Sb as N,Ta as i,Ua as _,V as C,Va as B,W as f,Wa as O,Wc as tt,Xc as et,Ya as h,_a as g,hc as G,j as w,kb as s,lb as F,mb as S,oa as a,ob as L,ub as v,vb as $,wb as M,xa as D}from"./chunk-5K3J527P.js";import{a as I,b as A,f as c}from"./chunk-EQDQRRRY.js";var dt=(()=>{class n{constructor(){this.entries$=w(b(()=>d.arrowCountEntries.orderBy("date").reverse().toArray())),this.entriesGroupedByDate$=w(b(()=>c(this,null,function*(){return(yield d.arrowCountEntries.orderBy("date").reverse().toArray()).reduce((e,r)=>{let m=new Date(r.date).toISOString().split("T")[0];return e[m]||(e[m]=[]),e[m].push({id:r.id,value:r.value}),e},{})})))}addEntry(t){return c(this,null,function*(){return yield d.arrowCountEntries.add(A(I({},t),{date:new Date().toISOString()}))})}deleteEntry(t){return c(this,null,function*(){return yield d.arrowCountEntries.delete(t)})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var _t=(n,l)=>l.key,gt=(n,l)=>l.id;function vt(n,l){if(n&1){let t=h();o(0,"mat-list-item"),s(1),o(2,"button",11),g("click",function(){let r=C(t).$implicit,m=u(3);return f(m.arrowCountEntriesService.deleteEntry(r.id))}),o(3,"mat-icon"),s(4,"delete"),i()()()}if(n&2){let t=l.$implicit;a(),S(" ",t.value," ")}}function wt(n,l){if(n&1&&(o(0,"div",10),s(1),v(2,"date"),i(),y(3,vt,5,1,"mat-list-item",null,gt)),n&2){let t=l.$implicit;a(),S(" ",M(2,1,t.key,"longDate")," "),a(2),x(t.value)}}function yt(n,l){if(n&1){let t=h();B(0),o(1,"app-page-with-title",1)(2,"mat-card")(3,"mat-card-header")(4,"mat-card-title"),s(5),i()(),o(6,"mat-card-content")(7,"div",2)(8,"div",3)(9,"span"),s(10,"Shooting:"),i(),_(11,"app-small-counter",4),i(),o(12,"div",5)(13,"span"),s(14,"Count:"),i(),_(15,"app-small-counter",6),i()()(),o(16,"mat-card-actions")(17,"button",7),g("click",function(){C(t);let r=u();return f(r.countControl.reset())}),s(18,"Reset count"),i(),_(19,"span",8),o(20,"button",9),g("click",function(){C(t);let r=u();return f(r.saveCount())}),s(21," Save count "),i()()(),L(22),v(23,"async"),v(24,"keyvalue"),o(25,"mat-list"),y(26,wt,5,4,null,null,_t),i()(),O()}if(n&2){let t=l.$implicit,e=u();a(),p("page-title",t("navbar.arrowCounter")),a(4),F(t("navbar.arrowCounter")),a(6),p("formControl",e.shootingCountControl)("min",1),a(4),p("moreIncrementAmount",e.shootingCountControl.value)("formControl",e.countControl)("min",0),a(5),p("disabled",e.countControl.invalid);let r=M(24,10,$(23,8,e.arrowCountEntriesService.entriesGroupedByDate$),e.originalOrder);a(6),x(r)}}var Ct="archery-stats-arrow-count-value",qt=(()=>{class n{constructor(){this.arrowCountEntriesService=T(dt),this.shootingCountControl=new k(6,{nonNullable:!0,validators:[E.min(1)]}),this.countControl=new k(0,{nonNullable:!0,validators:[E.min(0)]}),this.originalOrder=()=>0;let t=sessionStorage.getItem(Ct);t&&this.countControl.setValue(G(t,0),{emitEvent:!1}),this.countControl.valueChanges.pipe(K()).subscribe({next:e=>sessionStorage.setItem(Ct,e.toString())})}saveCount(){return c(this,null,function*(){yield this.arrowCountEntriesService.addEntry({value:this.countControl.value}),this.countControl.reset()})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=D({type:n,selectors:[["app-arrow-counter-page"]],decls:1,vars:0,consts:[[4,"transloco"],["page-back-link","/",3,"page-title"],[1,"padding-y-4x"],[1,"flex-row","align-items-center","justify-content-space-between"],["disableControlsWhenOverLimit","",3,"formControl","min"],[1,"flex-row","align-items-center","justify-content-space-between","margin-top-4x"],["moreIncrements","","disableControlsWhenOverLimit","",3,"moreIncrementAmount","formControl","min"],["mat-button","","color","warn",3,"click"],[1,"spacer"],["mat-flat-button","",3,"click","disabled"],["matSubheader",""],["matListItemMeta","","mat-icon-button","",3,"click"]],template:function(e,r){e&1&&V(0,yt,28,13,"ng-container",0)},dependencies:[j,N,U,Q,it,rt,ot,lt,nt,at,ut,ct,mt,pt,st,Z,q,X,J,Y,z,H,W,R,et,tt],styles:["[_nghost-%COMP%]{display:block}mat-card[_ngcontent-%COMP%], mat-list[_ngcontent-%COMP%]{margin:0 auto;max-width:600px}"],changeDetection:0})}}return n})();export{qt as ArrowCounterPageComponent};
