import{A as y,D as J,n as dt,o as Vt,p as zt,q as F,r as M,t as Gt,x as Ht,y as X,z as w}from"./chunk-RVVXJ2F4.js";import{a as Bt,e as Nt}from"./chunk-LTQDWN26.js";import{$ as H,$a as Tt,B as bt,Bb as I,D as k,G as N,Ha as T,Ia as Ot,Ka as b,Mc as U,Na as xt,Nc as Z,O as V,Oa as S,Ob as Lt,Pa as $,Ra as ot,Rc as K,Sc as Pt,Tc as lt,V as z,Vc as ct,W as G,X as p,Xb as q,Y as c,Yb as Ft,Z as h,Za as _,_ as A,_a as v,a as m,aa as O,ab as It,ac as Mt,b as vt,bb as wt,ea as Dt,eb as nt,gb as Et,ia as it,ib as st,k as u,ka as g,ma as Ct,mb as kt,na as Y,nb as St,ob as Rt,oc as jt,q as yt,qa as x,ta as at,tb as R,uc as Q,va as f,vb as L,w as B,wa as l,xc as W,xd as Yt,ya as At,yd as $t,zc as rt}from"./chunk-DH4MWFWR.js";function ce(a,o){}var D=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var ut=(()=>{class a extends zt{constructor(t,e,i,n,r,s,d,E){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=n,this._interactivityChecker=r,this._ngZone=s,this._overlayRef=d,this._focusMonitor=E,this._platform=h(jt),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=h(Lt),this._injector=h(g),this._isDestroyed=!1,this.attachDomPortal=et=>{this._portalOutlet.hasAttached();let se=this._portalOutlet.attachDomPortal(et);return this._contentAttached(),se},this._document=i,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{t.removeEventListener("blur",i),t.removeEventListener("mousedown",i),t.removeAttribute("tabindex")};t.addEventListener("blur",i),t.addEventListener("mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(){this._isDestroyed||xt(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let i=Q(),n=this._elementRef.nativeElement;(!i||i===this._document.body||i===n||n.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let t=this._elementRef.nativeElement,e=Q();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Q()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static{this.\u0275fac=function(e){return new(e||a)(l(x),l(Z),l(q,8),l(D),l(U),l(Y),l(w),l(K))}}static{this.\u0275cmp=A({type:a,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(e&1&&kt(F,7),e&2){let n;St(n=Rt())&&(i._portalOutlet=n.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){e&2&&S("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},standalone:!0,features:[T,I],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){e&1&&b(0,ce,0,0,"ng-template",0)},dependencies:[F],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}}return a})(),j=class{constructor(o,t){this.overlayRef=o,this.config=t,this.closed=new u,this.disableClose=t.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!W(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=o.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(o,t){if(this.containerInstance){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(o),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",t=""){return this.overlayRef.updateSize({width:o,height:t}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}},de=new p("DialogScrollStrategy",{providedIn:"root",factory:()=>{let a=h(y);return()=>a.scrollStrategies.block()}}),he=new p("DialogData"),me=new p("DefaultDialogConfig");var ue=0,pt=(()=>{class a{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,i,n,r,s){this._overlay=t,this._injector=e,this._defaultOptions=i,this._parentDialog=n,this._overlayContainer=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new u,this._afterOpenedAtThisLevel=new u,this._ariaHiddenElements=new Map,this.afterAllClosed=B(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(V(void 0))),this._scrollStrategy=s}open(t,e){let i=this._defaultOptions||new D;e=m(m({},i),e),e.id=e.id||`cdk-dialog-${ue++}`,e.id&&this.getDialogById(e.id);let n=this._getOverlayConfig(e),r=this._overlay.create(n),s=new j(r,e),d=this._attachContainer(r,s,e);return s.containerInstance=d,this._attachDialogContent(t,s,d,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){ht(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){ht(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),ht(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Ht({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let n=i.injector||i.viewContainerRef?.injector,r=[{provide:D,useValue:i},{provide:j,useValue:e},{provide:w,useValue:t}],s;i.container?typeof i.container=="function"?s=i.container:(s=i.container.type,r.push(...i.container.providers(i))):s=ut;let d=new dt(s,i.viewContainerRef,g.create({parent:n||this._injector,providers:r}),i.componentFactoryResolver);return t.attach(d).instance}_attachDialogContent(t,e,i,n){if(t instanceof At){let r=this._createInjector(n,e,i,void 0),s={$implicit:n.data,dialogRef:e};n.templateContext&&(s=m(m({},s),typeof n.templateContext=="function"?n.templateContext():n.templateContext)),i.attachTemplatePortal(new Vt(t,null,s,r))}else{let r=this._createInjector(n,e,i,this._injector),s=i.attachComponentPortal(new dt(t,n.viewContainerRef,r,n.componentFactoryResolver));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,i,n){let r=t.injector||t.viewContainerRef?.injector,s=[{provide:he,useValue:t.data},{provide:j,useValue:e}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(e,t,i)):s.push(...t.providers)),t.direction&&(!r||!r.get(lt,null,{optional:!0}))&&s.push({provide:lt,useValue:{value:t.direction,change:yt()}}),g.create({parent:r||n,providers:s})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((n,r)=>{n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let t=this._overlayContainer.getContainerElement();if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let n=e[i];n!==t&&n.nodeName!=="SCRIPT"&&n.nodeName!=="STYLE"&&!n.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static{this.\u0275fac=function(e){return new(e||a)(c(y),c(g),c(me,8),c(a,12),c(X),c(de))}}static{this.\u0275prov=z({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();function ht(a,o){let t=a.length;for(;t--;)o(a[t])}var Qt=(()=>{class a{static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275mod=H({type:a})}static{this.\u0275inj=G({providers:[pt],imports:[J,M,Pt,M]})}}return a})();function pe(a,o){}var P=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},gt="mdc-dialog--open",Wt="mdc-dialog--opening",Ut="mdc-dialog--closing",ge=150,fe=75,_e=(()=>{class a extends ut{constructor(t,e,i,n,r,s,d,E,et){super(t,e,i,n,r,s,d,et),this._animationMode=E,this._animationStateChanged=new Ct,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?Kt(this._config.enterAnimationDuration)??ge:0,this._exitAnimationDuration=this._animationsEnabled?Kt(this._config.exitAnimationDuration)??fe:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Zt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Wt,gt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(gt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(gt),this._animationsEnabled?(this._hostElement.style.setProperty(Zt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ut)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(Wt,Ut)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static{this.\u0275fac=function(e){return new(e||a)(l(x),l(Z),l(q,8),l(P),l(U),l(Y),l(w),l(at,8),l(K))}}static{this.\u0275cmp=A({type:a,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){e&2&&(nt("id",i._config.id),S("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),ot("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},standalone:!0,features:[T,I],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(_(0,"div",0)(1,"div",1),b(2,pe,0,0,"ng-template",2),v()())},dependencies:[F],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2})}}return a})(),Zt="--mat-dialog-transition-duration";function Kt(a){return a==null?null:typeof a=="number"?a:a.endsWith("ms")?rt(a.substring(0,a.length-2)):a.endsWith("s")?rt(a.substring(0,a.length-1))*1e3:a==="0"?0:null}var tt=function(a){return a[a.OPEN=0]="OPEN",a[a.CLOSING=1]="CLOSING",a[a.CLOSED=2]="CLOSED",a}(tt||{}),C=class{constructor(o,t,e){this._ref=o,this._containerInstance=e,this._afterOpened=new u,this._beforeClosed=new u,this._state=tt.OPEN,this.disableClose=t.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(k(i=>i.state==="opened"),N(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(k(i=>i.state==="closed"),N(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),bt(this.backdropClick(),this.keydownEvents().pipe(k(i=>i.keyCode===27&&!this.disableClose&&!W(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),Xt(this,i.type==="keydown"?"keyboard":"mouse"))})}close(o){this._result=o,this._containerInstance._animationStateChanged.pipe(k(t=>t.state==="closing"),N(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=tt.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let t=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?t.left(o.left):t.right(o.right):t.centerHorizontally(),o&&(o.top||o.bottom)?o.top?t.top(o.top):t.bottom(o.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",t=""){return this._ref.updateSize(o,t),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=tt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Xt(a,o,t){return a._closeInteractionType=o,a.close(t)}var ft=new p("MatMdcDialogData"),ve=new p("mat-mdc-dialog-default-options"),ye=new p("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let a=h(y);return()=>a.scrollStrategies.block()}});var be=0,_t=(()=>{class a{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,i,n,r,s,d,E){this._overlay=t,this._defaultOptions=n,this._scrollStrategy=r,this._parentDialog=s,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new u,this._afterOpenedAtThisLevel=new u,this.dialogConfigClass=P,this.afterAllClosed=B(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(V(void 0))),this._dialog=e.get(pt),this._dialogRefConstructor=C,this._dialogContainerType=_e,this._dialogDataToken=ft}open(t,e){let i;e=m(m({},this._defaultOptions||new P),e),e.id=e.id||`mat-mdc-dialog-${be++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let n=this._dialog.open(t,vt(m({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:D,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(r,s,d)=>(i=new this._dialogRefConstructor(r,e,d),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=n.componentRef,i.componentInstance=n.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static{this.\u0275fac=function(e){return new(e||a)(c(y),c(g),c(Ft,8),c(ve,8),c(ye),c(a,12),c(X),c(at,8))}}static{this.\u0275prov=z({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})(),De=0,Jt=(()=>{class a{constructor(t,e,i){this.dialogRef=t,this._elementRef=e,this._dialog=i,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=oe(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){Xt(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static{this.\u0275fac=function(e){return new(e||a)(l(C,8),l(x),l(_t))}}static{this.\u0275dir=O({type:a,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,i){e&1&&Et("click",function(r){return i._onButtonClick(r)}),e&2&&S("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],standalone:!0,features:[Dt]})}}return a})(),te=(()=>{class a{constructor(t,e,i){this._dialogRef=t,this._elementRef=e,this._dialog=i}ngOnInit(){this._dialogRef||(this._dialogRef=oe(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static{this.\u0275fac=function(e){return new(e||a)(l(C,8),l(x),l(_t))}}static{this.\u0275dir=O({type:a,standalone:!0})}}return a})(),ee=(()=>{class a extends te{constructor(){super(...arguments),this.id=`mat-mdc-dialog-title-${De++}`}_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=it(a)))(i||a)}})()}static{this.\u0275dir=O({type:a,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,i){e&2&&nt("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0,features:[T]})}}return a})(),ie=(()=>{class a{static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275dir=O({type:a,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0,features:[Ot([Gt])]})}}return a})(),ae=(()=>{class a extends te{_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=it(a)))(i||a)}})()}static{this.\u0275dir=O({type:a,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,i){e&2&&ot("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},standalone:!0,features:[T]})}}return a})();function oe(a,o){let t=a.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?o.find(e=>e.id===t.id):null}var ne=(()=>{class a{static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275mod=H({type:a})}static{this.\u0275inj=G({providers:[_t],imports:[Qt,J,M,ct,ct]})}}return a})();function Ae(a,o){if(a&1&&(_(0,"p"),R(1),v()),a&2){let t=st(2);f(),L(" ",t.data.text," ")}}function Oe(a,o){if(a&1&&(It(0),_(1,"h2",1),R(2),v(),_(3,"mat-dialog-content"),b(4,Ae,2,1,"p",2),v(),_(5,"mat-dialog-actions")(6,"button",3),R(7),v(),Tt(8,"span",4),_(9,"button",5),R(10),v()(),wt()),a&2){let t=o.$implicit,e=st();f(2),L(" ",e.data.title||t("dialogs.areYouSure.title")," "),f(2),$("ngIf",e.data.text),f(2),$("color",e.data.noButtonColor||""),f(),L(" ",e.data.noText||t("dialogs.areYouSure.no")," "),f(2),$("mat-dialog-close",!0)("color",e.data.yesButtonColor||""),f(),L(" ",e.data.yesText||t("dialogs.areYouSure.yes")," ")}}var Oi=(()=>{class a{constructor(){this.dialogRef=h(C),this.data=h(ft)}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=A({type:a,selectors:[["app-are-you-sure-dialog"]],standalone:!0,features:[I],decls:1,vars:0,consts:[[4,"transloco"],["mat-dialog-title",""],[4,"ngIf"],["mat-button","","mat-dialog-close","",3,"color"],[1,"spacer"],["mat-flat-button","",3,"mat-dialog-close","color"]],template:function(e,i){e&1&&b(0,Oe,11,7,"ng-container",0)},dependencies:[Mt,$t,Yt,ne,Jt,ee,ae,ie,Nt,Bt],changeDetection:0})}}return a})();export{C as a,ft as b,_t as c,Jt as d,ee as e,ie as f,ae as g,ne as h,Oi as i};
