import{a as W,b as Mt,c as kt,d as Dt,e as Ct,g as Tt}from"./chunk-ZPGVP7BG.js";import{a as ct,b as lt,c as dt,d as pt,e as ut,f as ft,g as gt,h as _t,i as ht,j as bt,k as xt,m as yt,o as vt,p as St,r as Ot,s as Nt}from"./chunk-KFKVXLL7.js";import{a as Ge,b as qe,c as He,d as We,e as Ze,f as Qe,g as Je,h as q,i as It,j as wt,k as Et,l as Ft,m as Rt}from"./chunk-RCNC62OS.js";import{f as we,h as Ee,i as Fe,k as Re,l as $e,m as Xe,q as O}from"./chunk-NQHDRJOQ.js";import{d as Ke,e as et,j as H,m as tt,o as z,q as it,r as nt,s as rt,u as L,v as ot,x as at,y as st,z as mt}from"./chunk-F2QLQMHO.js";import{Q as oe,a as Le,b as Be,c as Pe,e as Y}from"./chunk-LFKKBSHB.js";import{$ as P,$b as Ne,F as pe,Ja as Se,K as ue,Ka as S,La as Me,Lb as Te,Ma as h,Na as K,Oa as ke,Ob as re,Pa as De,Pb as Ie,Pc as Ae,Ra as T,Sa as ee,T as B,U as fe,Ua as te,V as ge,Va as ie,Vb as Oe,Wa as o,X as d,Xa as m,Y as w,Ya as b,Yc as ze,Z as _e,Za as X,_a as j,ab as F,da as k,db as C,dc as Ve,ea as D,f as I,fb as p,ka as he,la as be,ma as xe,na as $,nd as je,oa as ye,od as U,pb as ne,pd as G,qb as c,ra as ve,rb as y,sb as x,ta as s,ua as E,ub as Ce,ud as Ye,vd as Ue,yb as R}from"./chunk-32JRF7TD.js";function Qt(t,e){t&1&&b(0,"div",2)}var Jt=new ge("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ii=(()=>{let e=class e{constructor(i,n,a,l,u){this._elementRef=i,this._ngZone=n,this._changeDetectorRef=a,this._animationMode=l,this._isNoopAnimation=!1,this._defaultColor="primary",this._value=0,this._bufferValue=0,this.animationEnd=new he,this._mode="determinate",this._transitionendHandler=v=>{this.animationEnd.observers.length===0||!v.target||!v.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation=l==="NoopAnimations",u&&(u.color&&(this.color=this._defaultColor=u.color),this.mode=u.mode||this.mode)}get color(){return this._color||this._defaultColor}set color(i){this._color=i}get value(){return this._value}set value(i){this._value=Vt(i||0),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(i){this._bufferValue=Vt(i||0),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(i){this._mode=i,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}};e.\u0275fac=function(n){return new(n||e)(E(ye),E(be),E(Te),E(ve,8),E(Jt,8))},e.\u0275cmp=w({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,a){n&2&&(Me("aria-valuenow",a._isIndeterminate()?null:a.value)("mode",a.mode),De("mat-"+a.color),ke("_mat-animation-noopable",a._isNoopAnimation)("mdc-linear-progress--animation-ready",!a._isNoopAnimation)("mdc-linear-progress--indeterminate",a._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",re],bufferValue:[2,"bufferValue","bufferValue",re],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],standalone:!0,features:[Se,R],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,a){n&1&&(o(0,"div",0),b(1,"div",1),S(2,Qt,1,0,"div",2),m(),o(3,"div",3),b(4,"span",4),m(),o(5,"div",5),b(6,"span",4),m()),n&2&&(s(),K("flex-basis",a._getBufferBarFlexBasis()),s(),T(a.mode==="buffer"?2:-1),s(),K("transform",a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height),var(--mdc-linear-progress-active-indicator-height))}.cdk-high-contrast-active .mdc-linear-progress{outline-color:CanvasText}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color);border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height);border-radius:var(--mdc-linear-progress-track-shape)}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color)}.cdk-high-contrast-active .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}`],encapsulation:2,changeDetection:0});let t=e;return t})();function Vt(t,e=0,r=100){return Math.max(e,Math.min(r,t))}var wi=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_e({type:e}),e.\u0275inj=fe({imports:[Ae]});let t=e;return t})();var Kt={lastVisitedSession:null},At="archery-stats-app-state",zt=(()=>{let e=class e{constructor(){this.store=we({name:At},Re(Kt)),$e(this.store,{key:At,storage:Xe}),this.lastVisitedSession$=this.store.pipe(Fe(i=>i.lastVisitedSession),ue({refCount:!0,bufferSize:1}))}setLastVisitedSession(i){this.store.update(Ee("lastVisitedSession",i))}getStoreProp(i){return this.store.getValue()[i]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Lt=(()=>{let e=class e{constructor(){this.settingsRepo=d(O),this.lock=new Audio("assets/lock.wav"),this.lock.load(),this.unlock=new Audio("assets/unlock.wav"),this.unlock.load(),this.interfaceClick=new Audio("assets/interface-click.wav"),this.interfaceClick.load(),this.gameClick=new Audio("assets/game-click.wav"),this.gameClick.load()}play(i){if(this.settingsRepo.getStoreProp("playSounds"))switch(i){case"lock":this.lock.currentTime=0,this.lock.play();break;case"unlock":this.unlock.currentTime=0,this.unlock.play();break;case"click":this.interfaceClick.currentTime=0,this.interfaceClick.play();break;case"gameClick":this.gameClick.currentTime=0,this.gameClick.play();break;default:break}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ii(t,e){if(t&1&&(o(0,"mat-error"),c(1),m()),t&2){let r=p().$implicit;s(),x(" ",r("form.validations.fieldRequired")," ")}}function ni(t,e){if(t&1&&(o(0,"mat-radio-button",7),c(1),m()),t&2){let r=e.$implicit,i=p().$implicit;h("value",r[0]),s(),x(" ",i(r[1])," ")}}function ri(t,e){if(t&1&&(b(0,"img",14),o(1,"span",15),c(2),m()),t&2){let r=p().$implicit,i=p();h("ngSrc",i.TargetFaceImgMap.get(i.form.controls.targetFace.value)),s(2),x(" ",r(i.TargetFaceNameMap.get(i.form.controls.targetFace.value))," ")}}function oi(t,e){if(t&1&&(Ce(0)(1),o(2,"mat-option",7),b(3,"img",14),o(4,"span",15),c(5),m()()),t&2){let r=e.$implicit,i=p().$implicit,n=p(),a=r[0],l=r[1];s(2),h("value",a),s(),h("ngSrc",n.TargetFaceImgMap.get(a)),s(2),x(" ",i(l)," ")}}function ai(t,e){if(t&1){let r=F();X(0),o(1,"h2",1),c(2),m(),o(3,"form",2),C("ngSubmit",function(){k(r);let n=p();return D(n.submitForm())}),o(4,"mat-dialog-content")(5,"mat-form-field",3)(6,"mat-label"),c(7),m(),b(8,"input",4),S(9,ii,2,1,"mat-error"),m(),o(10,"div",5)(11,"label"),c(12),m(),o(13,"mat-radio-group",6),te(14,ni,2,2,"mat-radio-button",7,ee),m()(),o(16,"div",8)(17,"label"),c(18),m(),b(19,"app-small-counter",9),m(),o(20,"mat-form-field")(21,"mat-label"),c(22),m(),o(23,"mat-select",10)(24,"mat-select-trigger"),S(25,ri,3,2),m(),te(26,oi,6,3,"mat-option",7,ee),m()()(),o(28,"mat-dialog-actions")(29,"button",11),c(30),m(),b(31,"span",12),o(32,"button",13),c(33),m()()(),j()}if(t&2){let r=e.$implicit,i=p();s(2),x(" ",r("session.dialogs.editSessionDialog.title")," "),s(),h("formGroup",i.form),s(4),y(r("form.labels.name")),s(2),T(i.form.controls.name.hasError("required")?9:-1),s(3),x(" ",r("form.labels.shootingType")," "),s(2),ie(i.ShootingTypeNameMap.entries()),s(4),y(r("form.labels.distance")),s(4),y(r("form.labels.targetFace")),s(3),T(i.form.controls.targetFace.value!==null?25:-1),s(),ie(i.TargetFaceNameMap.entries()),s(4),x(" ",r("generic.cancel")," "),s(2),h("disabled",i.form.invalid),s(),x(" ",r("session.dialogs.editSessionDialog.saveButton")," ")}}var Bt=(()=>{let e=class e{constructor(){this.sessionsDbService=d(H),this.dialogRef=d(Ge),this.data=d(qe),this.ShootingTypeNameMap=yt,this.TargetFaceNameMap=vt,this.TargetFaceImgMap=St,this.form=new rt({name:new L("",{nonNullable:!0,validators:[z.required]}),shootingType:new L(null,{nonNullable:!0,validators:[z.required]}),targetFace:new L(null,{nonNullable:!0,validators:[z.required]}),distance:new L(0,{nonNullable:!0,validators:[z.required]})}),this.initializeFormValues()}initializeFormValues(){return I(this,null,function*(){let i=yield this.sessionsDbService.getSessionById(this.data.sessionId);if(!i){this.dialogRef.close(!1);return}let{name:n,targetFace:a,shootingType:l,distance:u}=i;this.form.patchValue({name:n,targetFace:a,shootingType:l,distance:u},{emitEvent:!1})})}submitForm(){return I(this,null,function*(){if(this.form.invalid)return;let{name:i,shootingType:n,targetFace:a,distance:l}=this.form.getRawValue();!oe(n)||!oe(a)||(yield this.sessionsDbService.updateSession(this.data.sessionId,{name:i,shootingType:n,targetFace:a,distance:l}),this.dialogRef.close(!0))})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=w({type:e,selectors:[["app-edit-session-dialog"]],standalone:!0,features:[R],decls:1,vars:0,consts:[[4,"transloco"],["mat-dialog-title",""],[3,"ngSubmit","formGroup"],[1,"margin-bottom-2x"],["matInput","","formControlName","name"],[1,"flex-column","margin-bottom-4x"],["formControlName","shootingType"],[3,"value"],[1,"flex-column","align-items-start","margin-bottom-4x"],["formControlName","distance","suffix","m","moreIncrements",""],["formControlName","targetFace"],["mat-button","","type","button","mat-dialog-close",""],[1,"spacer"],["mat-flat-button","","type","submit",3,"disabled"],["width","30","height","30",2,"vertical-align","middle",3,"ngSrc"],[1,"margin-left-2x"]],template:function(n,a){n&1&&S(0,ai,34,11,"ng-container",0)},dependencies:[mt,ot,tt,it,nt,at,st,G,U,Ve,xt,q,We,Ze,Je,Qe,pt,dt,ct,lt,Nt,Ot,Y,Le,gt,ut,ft,bt,_t,ht,ze],styles:["[_nghost-%COMP%]{display:block}mat-form-field[_ngcontent-%COMP%]{width:100%}"],changeDetection:0});let t=e;return t})();function si(t,e){if(t&1){let r=F();o(0,"button",7),C("click",function(n){return k(r),n.preventDefault(),D(n.stopPropagation())}),o(1,"mat-icon"),c(2),m()()}if(t&2){p();let r=ne(4),i=p();h("matMenuTriggerFor",r),s(2),y(i.$icon())}}function mi(t,e){if(t&1){let r=F();o(0,"button",8),C("click",function(n){return k(r),n.preventDefault(),D(n.stopPropagation())}),o(1,"mat-icon"),c(2),m()()}if(t&2){p();let r=ne(4),i=p();h("matMenuTriggerFor",r),s(2),y(i.$icon())}}function ci(t,e){if(t&1){let r=F();X(0),S(1,si,3,2,"button",2)(2,mi,3,2,"button",3),o(3,"mat-menu",null,0)(5,"button",4),C("click",function(){k(r);let n=p();return D(n.toggleLock())}),o(6,"mat-icon"),c(7),m(),o(8,"span"),c(9),m()(),o(10,"button",5),C("click",function(){k(r);let n=p();return D(n.openEditDialog())}),o(11,"mat-icon"),c(12,"edit"),m(),o(13,"span"),c(14),m()(),o(15,"button",4),C("click",function(){k(r);let n=p();return D(n.deleteSession())}),o(16,"mat-icon",6),c(17,"delete"),m(),o(18,"span"),c(19),m()()(),j()}if(t&2){let r,i=e.$implicit,n=p();s(),T((r=n.$buttonType())==="icon"?1:r==="fab"?2:-1),s(6),y(n.$isSessionLocked()?"lock":"lock_open"),s(2),x(" ",n.$isSessionLocked()?i("session.actions.pressToUnlock"):i("session.actions.pressToLock")," "),s(),h("disabled",n.$isSessionLocked()),s(4),y(i("session.actions.editSession")),s(5),y(i("session.actions.deleteSession"))}}var wn=(()=>{let e=class e{constructor(){this.sessionsDbService=d(H),this.dialog=d(He),this.transloco=d(je),this.appStateRepo=d(zt),this.soundboard=d(Lt),this.$isSessionLocked=Ie(()=>et(this.$session().locked)),this.$session=$.required({alias:"session"}),this.$icon=$("more_vert",{alias:"icon-name"}),this.$buttonType=$("icon",{alias:"button-type"}),this.sessionDeleted=xe()}deleteSession(){this.dialog.open(Rt,{width:"500px",data:{text:this.transloco.translate("session.dialogs.deleteDialog.text")}}).afterClosed().pipe(pe(1)).subscribe(n=>I(this,null,function*(){n&&(yield this.sessionsDbService.deleteSession(this.$session().id),this.appStateRepo.setLastVisitedSession(null),this.sessionDeleted.emit())}))}openEditDialog(){this.dialog.open(Bt,{width:"500px",data:{sessionId:this.$session().id}})}toggleLock(){return I(this,null,function*(){this.soundboard.play(this.$isSessionLocked()?"unlock":"lock"),yield this.sessionsDbService.updateSession(this.$session().id,{locked:Ke(!this.$isSessionLocked())})})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=w({type:e,selectors:[["app-session-options-menu"]],inputs:{$session:[1,"session","$session"],$icon:[1,"icon-name","$icon"],$buttonType:[1,"button-type","$buttonType"]},outputs:{sessionDeleted:"sessionDeleted"},standalone:!0,features:[R],decls:1,vars:0,consts:[["menu","matMenu"],[4,"transloco"],["mat-icon-button","","type","button",3,"matMenuTriggerFor"],["mat-fab","","type","button",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click","disabled"],["color","warn"],["mat-icon-button","","type","button",3,"click","matMenuTriggerFor"],["mat-fab","","type","button",3,"click","matMenuTriggerFor"]],template:function(n,a){n&1&&S(0,ci,20,6,"ng-container",1)},dependencies:[G,U,Y,Pe,Be,Ue,Ye,Ft,wt,It,Et,q],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0});let t=e;return t})();function _(t){let e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}var li={};function Pt(){return li}var di={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},pi={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ui={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$t={date:W({formats:di,defaultWidth:"full"}),time:W({formats:pi,defaultWidth:"full"}),dateTime:W({formats:ui,defaultWidth:"full"})};var ae={code:"en-US",formatDistance:Mt,formatLong:$t,formatRelative:kt,localize:Dt,match:Ct,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Xt(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}var fi=Math.pow(10,8)*24*60*60*1e3,jn=-fi;var se=6e4;var me=525600,ce=43200,le=1440;var gi=3600;var jt=gi*24,Yn=jt*7,_i=jt*365.2425,hi=_i/12,Un=hi*3;function de(t){let e=_(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function Yt(t,e){let r=_(t),i=_(e),n=r.getTime()-i.getTime();return n<0?-1:n>0?1:n}function Ut(t){return Xt(t,Date.now())}function Z(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Gt(t){if(!Z(t)&&typeof t!="number")return!1;let e=_(t);return!isNaN(Number(e))}function qt(t){return e=>{let i=(t?Math[t]:Math.trunc)(e);return i===0?0:i}}function Ht(t,e,r){let i=Pt(),n=r?.locale??i.locale??ae,a=Yt(t,e);if(isNaN(a))throw new RangeError("Invalid time value");let l=Object.assign({},r,{addSuffix:r?.addSuffix,comparison:a}),u,v;a>0?(u=_(e),v=_(t)):(u=_(t),v=_(e));let M=qt(r?.roundingMethod??"round"),Q=v.getTime()-u.getTime(),V=Q/se,Zt=de(v)-de(u),A=(Q-Zt)/se,J=r?.unit,f;if(J?f=J:V<1?f="second":V<60?f="minute":V<le?f="hour":A<ce?f="day":A<me?f="month":f="year",f==="second"){let g=M(Q/1e3);return n.formatDistance("xSeconds",g,l)}else if(f==="minute"){let g=M(V);return n.formatDistance("xMinutes",g,l)}else if(f==="hour"){let g=M(V/60);return n.formatDistance("xHours",g,l)}else if(f==="day"){let g=M(A/le);return n.formatDistance("xDays",g,l)}else if(f==="month"){let g=M(A/ce);return g===12&&J!=="month"?n.formatDistance("xYears",1,l):n.formatDistance("xMonths",g,l)}else{let g=M(A/me);return n.formatDistance("xYears",g,l)}}function Wt(t,e){return Ht(t,Ut(t),e)}var Sr=(()=>{let e=class e{constructor(){this.settingsRepo=d(O)}transform(i,n){let a=new Date(i);if(!Z(a)||!Gt(a))return"Invalid date";let l=this.settingsRepo.getStoreProp("language");return Wt(a,{addSuffix:!0,locale:Tt.get(l),unit:n})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=P({name:"dateDistance",type:e,pure:!0,standalone:!0});let t=e;return t})();var Ir=(()=>{let e=class e{constructor(){this.defaultOptions=d(Ne),this.settingsRepo=d(O)}transform(i,n,a,l){if(i==null||i===""||i!==i)return null;try{let u=n??this.defaultOptions?.dateFormat??"mediumDate",v=l??this.defaultOptions?.timezone??this.defaultOptions.timezone??void 0,M=this.settingsRepo.getStoreProp("language");return Oe(i,u,a||M,v)}catch{return null}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=P({name:"date",type:e,pure:!0,standalone:!0});let t=e;return t})();export{Ii as a,wi as b,zt as c,Sr as d,Ir as e,Lt as f,wn as g};
