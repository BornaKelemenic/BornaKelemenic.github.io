import{a as Qe,b as Ye,c as $e,d as Ke}from"./chunk-HPCNDQPJ.js";import{c as Fe,h as Oe,i as R}from"./chunk-BQQL4LSV.js";import"./chunk-U5IZUPEA.js";import"./chunk-WUD2LKST.js";import{a as _e,o as Ie,p as Se,q as L}from"./chunk-DDRSGONF.js";import{b as Le,c as Ee,d as Re,e as ze,g as Ae,h as Pe}from"./chunk-TPY5MOKP.js";import{a as Ne}from"./chunk-EQFN4TKU.js";import{b as qe,f as je,h as Ge,k as Xe,o as X,q as Ue,t as He}from"./chunk-TMTJBKDX.js";import{a as D,e as T}from"./chunk-O4SX6DFT.js";import{$a as r,$b as fe,$c as Me,Ab as N,Bb as ue,Cd as Be,Dd as Ve,Ea as v,Eb as ge,F as U,Fa as ee,Fb as pe,Ka as y,Lb as we,Nb as f,Ob as be,Oc as ye,P as B,Pa as M,Qa as n,Qc as ke,Sa as F,Ta as te,Tc as j,U as H,Va as x,W as Q,Wa as ie,X as Y,Ya as ae,Yc as Ce,Z as o,Za as ce,_a as s,aa as $,ab as m,ba as w,bb as se,ca as b,cb as re,da as K,eb as k,fb as de,ga as Z,hb as _,ia as V,jb as C,jd as xe,kb as oe,lb as ne,ma as W,n as P,nb as le,ob as me,pb as he,ra as J,sc as ve,sd as G,tb as I,ub as l,va as c,vb as S,vd as De,wb as h,wd as Te,xd as E,yb as O,zb as q}from"./chunk-RUQAPLFY.js";function tt(a,g){a&1&&(s(0,"mat-icon",6),l(1,"check"),r())}function it(a,g){if(a&1){let e=k();O(0)(1),s(2,"button",4),_("click",function(){w(e);let t=N(0),d=C();return b(d.changeLang(t))}),m(3,"mat-icon",2),s(4,"span",5),l(5),y(6,tt,2,0,"mat-icon",6),r()()}if(a&2){let e=g.$implicit,i=C(),t=N(0),d=q(e[0]),u=e[1];c(3),n("svgIcon",i.LanguageIconMap.get(d)),c(2),h(" ",u," "),c(),x(t===d?6:-1)}}var We=(()=>{class a{constructor(){this.settingsRepo=o(L),this.LanguageIconMap=Se,this.LanguageNameMap=Ie}changeLang(e){_e(()=>{this.settingsRepo.setLanguage(e),this.settingsRepo.setHasManuallyChosenLanguage(!0)})}static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275cmp=v({type:a,selectors:[["app-language-selector"]],decls:9,vars:6,consts:[["menu","matMenu"],["mat-stroked-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"flex-row","align-items-center"],["color","primary",1,"margin-right-0x","margin-left-4x"]],template:function(i,t){if(i&1&&(O(0),ge(1,"async"),s(2,"button",1),m(3,"mat-icon",2),l(4),r(),s(5,"mat-menu",null,0),ae(7,it,7,4,"button",3,ie),r()),i&2){let d=I(6),u=q(pe(1,3,t.settingsRepo.lang$));c(2),n("matMenuTriggerFor",d),c(),n("svgIcon",t.LanguageIconMap.get(u)),c(),h(" ",t.LanguageNameMap.get(u),`
`),c(3),ce(t.LanguageNameMap.entries())}},dependencies:[fe,E,Ke,Ye,Qe,$e,Ve,Be,T,D],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})}}return a})();var at=["switch"],ct=["*"];function st(a,g){a&1&&(s(0,"span",10),K(),s(1,"svg",12),m(2,"path",13),r(),s(3,"svg",14),m(4,"path",15),r()())}var rt=new Y("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),dt={provide:je,useExisting:H(()=>A),multi:!0},z=class{source;checked;constructor(g,e){this.source=g,this.checked=e}},A=(()=>{class a{_elementRef=o(W);_focusMonitor=o(ye);_changeDetectorRef=o(we);defaults=o(rt);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new z(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations;_focused;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new V;toggleChange=new V;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){o(ve).load(Ce);let e=o(new Z("tabindex"),{optional:!0}),i=this.defaults,t=o(J,{optional:!0});this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||"accent",this._noopAnimations=t==="NoopAnimations",this.id=this._uniqueId=o(ke).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new z(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=v({type:a,selectors:[["mat-slide-toggle"]],viewQuery:function(i,t){if(i&1&&le(at,5),i&2){let d;me(d=he())&&(t._switchElement=d.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,t){i&2&&(de("id",t.id),M("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),te(t.color?"mat-"+t.color:""),F("mat-mdc-slide-toggle-focused",t._focused)("mat-mdc-slide-toggle-checked",t.checked)("_mat-animation-noopable",t._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",f],color:"color",disabled:[2,"disabled","disabled",f],disableRipple:[2,"disableRipple","disableRipple",f],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:be(e)],checked:[2,"checked","checked",f],hideIcon:[2,"hideIcon","hideIcon",f],disabledInteractive:[2,"disabledInteractive","disabledInteractive",f]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ue([dt,{provide:Ge,useExisting:a,multi:!0}]),$],ngContentSelectors:ct,decls:13,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,t){if(i&1){let d=k();oe(),s(0,"div",1)(1,"button",2,0),_("click",function(){return w(d),b(t._handleClick())}),m(3,"span",3),s(4,"span",4)(5,"span",5)(6,"span",6),m(7,"span",7),r(),s(8,"span",8),m(9,"span",9),r(),y(10,st,5,0,"span",10),r()()(),s(11,"label",11),_("click",function(p){return w(d),b(p.stopPropagation())}),ne(12),r()()}if(i&2){let d=I(2);n("labelPosition",t.labelPosition),c(),F("mdc-switch--selected",t.checked)("mdc-switch--unselected",!t.checked)("mdc-switch--checked",t.checked)("mdc-switch--disabled",t.disabled)("mat-mdc-slide-toggle-disabled-interactive",t.disabledInteractive),n("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex)("disabled",t.disabled&&!t.disabledInteractive),M("id",t.buttonId)("name",t.name)("aria-label",t.ariaLabel)("aria-labelledby",t._getAriaLabelledBy())("aria-describedby",t.ariaDescribedby)("aria-required",t.required||null)("aria-checked",t.checked)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),c(8),n("matRippleTrigger",d)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0),c(),x(t.hideIcon?-1:10),c(),n("for",t.buttonId),M("id",t._labelId)}},dependencies:[Me,xe],styles:['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mdc-switch-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mdc-switch-track-height, 32px);border-radius:var(--mdc-switch-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-switch-track-outline-width, 2px);border-color:var(--mat-switch-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-switch-selected-track-outline-width, 2px);border-color:var(--mat-switch-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-switch-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-switch-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mdc-switch-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mdc-switch-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mdc-switch-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mdc-switch-handle-width);height:var(--mdc-switch-handle-height);border-radius:var(--mdc-switch-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size, 16px);height:var(--mat-switch-unselected-handle-size, 16px);margin:var(--mat-switch-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size, 24px);height:var(--mat-switch-selected-handle-size, 24px);margin:var(--mat-switch-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size, 24px);height:var(--mat-switch-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size, 28px);height:var(--mat-switch-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mdc-switch-state-layer-size, 40px);height:var(--mdc-switch-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size, 16px);height:var(--mdc-switch-unselected-icon-size, 16px);fill:var(--mdc-switch-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size, 16px);height:var(--mdc-switch-selected-icon-size, 16px);fill:var(--mdc-switch-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-switch-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-switch-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-switch-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-switch-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-switch-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-switch-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}'],encapsulation:2,changeDetection:0})}return a})();var Je=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=ee({type:a});static \u0275inj=Q({imports:[A,j,j]})}return a})();function nt(a,g){if(a&1){let e=k();se(0),s(1,"app-page-with-title",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header")(5,"mat-card-title"),l(6),r()(),s(7,"mat-card-content")(8,"div",3),m(9,"app-language-selector"),r()()(),s(10,"mat-card")(11,"mat-card-header")(12,"mat-card-title"),l(13),r(),s(14,"mat-card-subtitle"),l(15),r()(),s(16,"mat-card-content")(17,"div",3)(18,"mat-slide-toggle",4),l(19),r()()()(),s(20,"mat-card")(21,"mat-card-header")(22,"mat-card-title"),l(23),r()(),s(24,"mat-card-content")(25,"div",3)(26,"mat-slide-toggle",4),l(27),r()()()(),s(28,"mat-card")(29,"mat-card-header")(30,"mat-card-title"),l(31),r()(),s(32,"mat-card-content")(33,"button",5),_("click",function(){w(e);let t=C();return b(t.deleteData())}),l(34),r()()()()(),re()}if(a&2){let e=g.$implicit,i=C();c(),n("page-title",e("navbar.settings")),c(5),S(e("settings.language.changeLanguageCardTitle")),c(7),h(" ",e("settings.audio.playSoundsCardTitle")," "),c(2),h(" ",e("settings.audio.playSoundsCardSubtitle")," "),c(3),n("formControl",i.playSoundControl),c(),h(" ",e("settings.audio.soundControlLabel")," "),c(4),S(e("settings.colors.cardTitle")),c(3),n("formControl",i.showColoredButtonsControl),c(),h(" ",e("settings.colors.scoreButtonColors")," "),c(4),S(e("settings.data.cardTitle")),c(3),h(" ",e("settings.data.deleteAllData")," ")}}var ri=(()=>{class a{constructor(){this.settingsRepo=o(L),this.dialog=o(Fe),this.transloco=o(De),this.playSoundControl=new X(!1,{nonNullable:!0}),this.showColoredButtonsControl=new X(!1,{nonNullable:!0}),this.playSoundControl.setValue(this.settingsRepo.getStoreProp("playSounds"),{emitEvent:!1}),this.showColoredButtonsControl.setValue(this.settingsRepo.getStoreProp("showColoredButtons"),{emitEvent:!1}),this.playSoundControl.valueChanges.pipe(G()).subscribe(e=>this.settingsRepo.setPlaySounds(e)),this.showColoredButtonsControl.valueChanges.pipe(G()).subscribe(e=>this.settingsRepo.setShowColoredButtons(e))}deleteData(){let e=this.dialog.open(R,{width:"500px",data:{yesButtonColor:"warn"}}),i=this.transloco.translate("session.dialogs.deleteAllDataDialog.dialog2.text"),t=this.transloco.translate("session.dialogs.deleteAllDataDialog.dialog3.text"),d=this.transloco.translate("session.dialogs.deleteAllDataDialog.dialog3.yesButtonLabel"),u=this.transloco.translate("session.dialogs.deleteAllDataDialog.dialog3.noButtonLabel");e.afterClosed().pipe(B(p=>p?this.dialog.open(R,{width:"500px",data:{text:i,yesButtonColor:"warn"}}).afterClosed():P),B(p=>p?this.dialog.open(R,{width:"500px",data:{text:t,yesText:d,noText:u,yesButtonColor:"warn"}}).afterClosed():P),U(1)).subscribe({next:p=>{p&&indexedDB.deleteDatabase(qe)}})}static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275cmp=v({type:a,selectors:[["app-settings-page"]],decls:1,vars:0,consts:[[4,"transloco"],["page-back-link","/",3,"page-title"],[1,"standard-centering"],[1,"margin-top-4x"],[3,"formControl"],["mat-flat-button","","color","warn",1,"margin-top-4x",3,"click"]],template:function(i,t){i&1&&y(0,nt,35,11,"ng-container",0)},dependencies:[He,Xe,Ue,E,Te,Ne,We,Pe,Le,Re,Ae,ze,Ee,Je,A,T,D,Oe],styles:["[_nghost-%COMP%]{display:block}mat-card[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:var(--spacing-4x)}"],changeDetection:0})}}return a})();export{ri as SettingsPageComponent};
