import{f as N}from"./chunk-U6CN3XCF.js";import{a as W,c as j,e as F}from"./chunk-LTQDWN26.js";import{Ab as T,Bb as D,Dd as R,Ed as z,Ka as b,Ob as E,Pa as _,Qb as $,Ra as L,Rb as P,U as w,Ua as x,Z as O,Za as a,_ as A,_a as m,db as v,fa as d,ga as p,gb as f,ib as C,pa as s,tb as l,va as r,vb as h,xb as k,yb as V,zb as u,zc as B}from"./chunk-DH4MWFWR.js";function U(n,g){if(n&1){let t=v();a(0,"button",3),f("click",function(){d(t);let e=C(),o=u(1);return p(e.decrement(o))}),a(1,"mat-icon"),l(2,"remove"),m(),l(3),m()}if(n&2){let t=C(),i=u(1),e=u(5);_("disabled",t.disabled||e),r(3),h(" ",i," ")}}function q(n,g){n&1&&l(0),n&2&&h(" ",g," ")}function J(n,g){if(n&1){let t=v();a(0,"button",3),f("click",function(){d(t);let e=C(),o=u(1);return p(e.increment(o))}),a(1,"mat-icon"),l(2,"add"),m(),l(3),m()}if(n&2){let t=C(),i=u(1),e=u(6);_("disabled",t.disabled||e),r(3),h(" ",i," ")}}var re=(()=>{class n{constructor(){this._cdr=O(E),this.value=0,this.disabled=!1,this.$additionalIncrements=s(!1,{alias:"moreIncrements",transform:$}),this.$suffix=s("",{alias:"suffix"}),this.$orientation=s("horizontal",{alias:"orientation"}),this.$moreIncrementAmount=s(5,{alias:"moreIncrementAmount",transform:P}),this.$minValue=s(null,{alias:"min"}),this.$maxValue=s(null,{alias:"max"}),this.$disableControls=s(!1,{alias:"disableControlsWhenOverLimit",transform:$})}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t}writeValue(t){this.setValue(t,!1),this._cdr.markForCheck()}increment(t=1){this.setValue(this.value+t,!0)}decrement(t=1){this.setValue(this.value-t,!0)}setValue(t,i){if(this.disabled)return;let e=B(t),o=this.$maxValue(),c=this.$minValue();c!=null&&e<c||o!=null&&e>o||(this.value=e,i&&this.onChange&&(this.onChange(e),this.onTouched()))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=A({type:n,selectors:[["app-small-counter"]],hostVars:2,hostBindings:function(i,e){i&2&&L("vertical",e.$orientation()==="vertical")},inputs:{$additionalIncrements:[1,"moreIncrements","$additionalIncrements"],$suffix:[1,"suffix","$suffix"],$orientation:[1,"orientation","$orientation"],$moreIncrementAmount:[1,"moreIncrementAmount","$moreIncrementAmount"],$minValue:[1,"min","$minValue"],$maxValue:[1,"max","$maxValue"],$disableControls:[1,"disableControlsWhenOverLimit","$disableControls"]},standalone:!0,features:[T([{provide:N,useExisting:w(()=>n),multi:!0}]),D],decls:18,vars:9,consts:[["mat-button","","type","button",3,"disabled"],["mat-icon-button","","color","primary","type","button",3,"click","disabled"],[1,"value"],["mat-button","","type","button",3,"click","disabled"]],template:function(i,e){if(i&1){let o=v();k(0)(1)(2)(3)(4)(5)(6),b(7,U,4,2,"button",0),a(8,"button",1),f("click",function(){return d(o),p(e.decrement())}),a(9,"mat-icon"),l(10,"remove"),m()(),a(11,"span",2),l(12),b(13,q,1,1),m(),a(14,"button",1),f("click",function(){return d(o),p(e.increment())}),a(15,"mat-icon"),l(16,"add"),m()(),b(17,J,4,2,"button",0)}if(i&2){let o,c=e.$additionalIncrements();r();let I=V(e.$moreIncrementAmount()),S=e.$disableControls(),y=e.$minValue(),M=e.$maxValue();r(4);let G=V(S&&y!==null&&e.value<=y);r();let H=V(S&&M!==null&&e.value>=M);r(),x(c&&I!==1?7:-1),r(),_("disabled",e.disabled||G),r(4),h(" ",e.value," "),r(),x((o=e.$suffix())?13:-1,o),r(),_("disabled",e.disabled||H),r(3),x(c&&I!==1?17:-1)}},dependencies:[F,W,j,z,R],styles:["[_nghost-%COMP%]{display:inline-flex;flex-direction:row;align-items:center;justify-content:center}[_nghost-%COMP%]   .value[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;padding:var(--spacing-2x);height:36px;font-size:1.25em}.vertical[_nghost-%COMP%]{flex-direction:column-reverse;justify-content:center}.ng-invalid[_nghost-%COMP%]{border:1px solid var(--sys-error)}.ng-invalid[_nghost-%COMP%]   .value[_ngcontent-%COMP%]{color:var(--sys-error)}"],changeDetection:0})}}return n})();export{re as a};
