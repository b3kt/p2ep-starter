import{c as ht,u as yt,a as gt,b as wt,d as bt,Q as j,e as W,f as ae,g as _t,h as Xe,i as qt,C as Ct,j as kt}from"./ClosePopup.f3ed7b44.js";import{o as ke,H as Be,c as T,l as z,s as Ye,g as Lt,a as St,n as Tt,d as $t,e as Z,p as ve,f as He,h as me,i as qe,j as pe,k as Le,m as Re,q as I,r as B,t as v,w as b,u as xt,v as Pe,x as R,y as A,z as Oe,A as Ue,B as je,C as Ke,D as Je,_ as ne,E,F as V,G as p,I as x,J as Et,K as g,L as O,M as Ce,N as Mt,O as Bt,P as Ge,R as he,Q as Ae,S as Ze,T as oe,U as Ht,V as Pt,W as Ot}from"./index.a76fad5b.js";import{g as At,a as Vt,h as zt}from"./scroll.f06e5178.js";import{u as Dt,a as Qt}from"./use-dark.78938834.js";import{Q as Ft,a as Wt,b as It}from"./QLayout.8e412099.js";import{_ as Nt}from"./logo.2b5e97da.js";import"./focus-manager.02955f48.js";function Xt(e,a,r){let s;function t(){s!==void 0&&(Be.remove(s),s=void 0)}return ke(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){s={condition:()=>r.value===!0,handler:a},Be.add(s)}}}let Y=0,ye,ge,U,we=!1,Ve,ze,De,D=null;function Yt(e){Rt(e)&&Ye(e)}function Rt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const a=Lt(e),r=e.shiftKey&&!e.deltaX,s=!r&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=r||s?e.deltaY:e.deltaX;for(let o=0;o<a.length;o++){const l=a[o];if(zt(l,s))return s?t<0&&l.scrollTop===0?!0:t>0&&l.scrollTop+l.clientHeight===l.scrollHeight:t<0&&l.scrollLeft===0?!0:t>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function Qe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ee(e){we!==!0&&(we=!0,requestAnimationFrame(()=>{we=!1;const{height:a}=e.target,{clientHeight:r,scrollTop:s}=document.scrollingElement;(U===void 0||a!==window.innerHeight)&&(U=r-a,document.scrollingElement.scrollTop=s),s>U&&(document.scrollingElement.scrollTop-=Math.ceil((s-U)/8))}))}function Fe(e){const a=document.body,r=window.visualViewport!==void 0;if(e==="add"){const{overflowY:s,overflowX:t}=window.getComputedStyle(a);ye=At(window),ge=Vt(window),Ve=a.style.left,ze=a.style.top,De=window.location.href,a.style.left=`-${ye}px`,a.style.top=`-${ge}px`,t!=="hidden"&&(t==="scroll"||a.scrollWidth>window.innerWidth)&&a.classList.add("q-body--force-scrollbar-x"),s!=="hidden"&&(s==="scroll"||a.scrollHeight>window.innerHeight)&&a.classList.add("q-body--force-scrollbar-y"),a.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,T.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ee,z.passiveCapture),window.visualViewport.addEventListener("scroll",ee,z.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Qe,z.passiveCapture))}T.is.desktop===!0&&T.is.mac===!0&&window[`${e}EventListener`]("wheel",Yt,z.notPassive),e==="remove"&&(T.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",ee,z.passiveCapture),window.visualViewport.removeEventListener("scroll",ee,z.passiveCapture)):window.removeEventListener("scroll",Qe,z.passiveCapture)),a.classList.remove("q-body--prevent-scroll"),a.classList.remove("q-body--force-scrollbar-x"),a.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,a.style.left=Ve,a.style.top=ze,window.location.href===De&&window.scrollTo(ye,ge),U=void 0)}function Ut(e){let a="add";if(e===!0){if(Y++,D!==null){clearTimeout(D),D=null;return}if(Y>1)return}else{if(Y===0||(Y--,Y>0))return;if(a="remove",T.is.ios===!0&&T.is.nativeMobile===!0){D!==null&&clearTimeout(D),D=setTimeout(()=>{Fe(a),D=null},100);return}}Fe(a)}function jt(){let e;return{preventBodyScroll(a){a!==e&&(e!==void 0||a===!0)&&(e=a,Ut(a))}}}const Se={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Kt=Object.keys(Se);Se.all=!0;function We(e){const a={};for(const r of Kt)e[r]===!0&&(a[r]=!0);return Object.keys(a).length===0?Se:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const Jt=["INPUT","TEXTAREA"];function Ie(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&Jt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function be(e,a,r){const s=qe(e);let t,o=s.left-a.event.x,l=s.top-a.event.y,m=Math.abs(o),h=Math.abs(l);const u=a.direction;u.horizontal===!0&&u.vertical!==!0?t=o<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=l<0?"up":"down":u.up===!0&&l<0?(t="up",m>h&&(u.left===!0&&o<0?t="left":u.right===!0&&o>0&&(t="right"))):u.down===!0&&l>0?(t="down",m>h&&(u.left===!0&&o<0?t="left":u.right===!0&&o>0&&(t="right"))):u.left===!0&&o<0?(t="left",m<h&&(u.up===!0&&l<0?t="up":u.down===!0&&l>0&&(t="down"))):u.right===!0&&o>0&&(t="right",m<h&&(u.up===!0&&l<0?t="up":u.down===!0&&l>0&&(t="down")));let i=!1;if(t===void 0&&r===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,i=!0,t==="left"||t==="right"?(s.left-=o,m=0,o=0):(s.top-=l,h=0,l=0)}return{synthetic:i,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:s,direction:t,isFirst:a.event.isFirst,isFinal:r===!0,duration:Date.now()-a.event.time,distance:{x:m,y:h},offset:{x:o,y:l},delta:{x:s.left-a.event.lastX,y:s.top-a.event.lastY}}}}let Gt=0;var _e=St({name:"touch-pan",beforeMount(e,{value:a,modifiers:r}){if(r.mouse!==!0&&T.has.touch!==!0)return;function s(o,l){r.mouse===!0&&l===!0?Ye(o):(r.stop===!0&&me(o),r.prevent===!0&&He(o))}const t={uid:"qvtp_"+Gt++,handler:a,modifiers:r,direction:We(r),noop:Tt,mouseStart(o){Ie(o,t)&&$t(o)&&(Z(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Ie(o,t)){const l=o.target;Z(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,l){if(T.is.firefox===!0&&ve(e,!0),t.lastEvt=o,l===!0||r.stop===!0){if(t.direction.all!==!0&&(l!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&He(u),o.cancelBubble===!0&&me(u),Object.assign(u,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:u}}me(o)}const{left:m,top:h}=qe(o);t.event={x:m,y:h,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:h}},move(o){if(t.event===void 0)return;const l=qe(o),m=l.left-t.event.x,h=l.top-t.event.y;if(m===0&&h===0)return;t.lastEvt=o;const u=t.event.mouse===!0,i=()=>{s(o,u);let y;r.preserveCursor!==!0&&r.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ht(),t.styleCleanup=f=>{if(t.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),u===!0){const $=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{$(),f()},50):$()}else f!==void 0&&f()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(o,t.event.mouse);const{payload:y,synthetic:f}=be(o,t,!1);y!==void 0&&(t.handler(y)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=y.position.left,t.event.lastY=y.position.top,t.event.lastDir=f===!0?void 0:y.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(o);return}const k=Math.abs(m),_=Math.abs(h);k!==_&&(t.direction.horizontal===!0&&k>_||t.direction.vertical===!0&&k<_||t.direction.up===!0&&k<_&&h<0||t.direction.down===!0&&k<_&&h>0||t.direction.left===!0&&k>_&&m<0||t.direction.right===!0&&k>_&&m>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,l){if(t.event!==void 0){if(pe(t,"temp"),T.is.firefox===!0&&ve(e,!1),l===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(be(o===void 0?t.lastEvt:o,t).payload);const{payload:m}=be(o===void 0?t.lastEvt:o,t,!0),h=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,r.mouse===!0){const o=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";Z(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}T.has.touch===!0&&Z(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const r=e.__qtouchpan;r!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&r.end(),r.handler=a.value),r.direction=We(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),pe(a,"main"),pe(a,"temp"),T.is.firefox===!0&&ve(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});function te(e,a,r){return r<=a?a:Math.min(r,Math.max(a,e))}const Ne=150;var Zt=Le({name:"QDrawer",inheritAttrs:!1,props:{...yt,...Dt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...gt,"onLayout","miniState"],setup(e,{slots:a,emit:r,attrs:s}){const t=Ke(),{proxy:{$q:o}}=t,l=Qt(e,o),{preventBodyScroll:m}=jt(),{registerTimeout:h,removeTimeout:u}=wt(),i=Re(je,I);if(i===I)return console.error("QDrawer needs to be child of QLayout"),I;let k,_=null,y;const f=B(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),$=v(()=>e.mini===!0&&f.value!==!0),q=v(()=>$.value===!0?e.miniWidth:e.width),w=B(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),d=v(()=>e.persistent!==!0&&(f.value===!0||at.value===!0));function S(n,c){if(et(),n!==!1&&i.animate(),L(0),f.value===!0){const C=i.instances[J.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),H(1),i.isContainer.value!==!0&&m(!0)}else H(0),n!==!1&&de(!1);h(()=>{n!==!1&&de(!0),c!==!0&&r("show",n)},Ne)}function Te(n,c){tt(),n!==!1&&i.animate(),H(0),L(Q.value*q.value),ce(),c!==!0?h(()=>{r("hide",n)},Ne):u()}const{show:re,hide:N}=bt({showing:w,hideOnRouteChange:d,handleShow:S,handleHide:Te}),{addToHistory:et,removeFromHistory:tt}=Xt(w,N,d),K={belowBreakpoint:f,hide:N},M=v(()=>e.side==="right"),Q=v(()=>(o.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),$e=B(0),F=B(!1),ie=B(!1),xe=B(q.value*Q.value),J=v(()=>M.value===!0?"left":"right"),le=v(()=>w.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),se=v(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(M.value?"R":"L")>-1||o.platform.is.ios===!0&&i.isContainer.value===!0),X=v(()=>e.overlay===!1&&w.value===!0&&f.value===!1),at=v(()=>e.overlay===!0&&w.value===!0&&f.value===!1),ot=v(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&F.value===!1?" hidden":"")),nt=v(()=>({backgroundColor:`rgba(0,0,0,${$e.value*.4})`})),Ee=v(()=>M.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),rt=v(()=>M.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),it=v(()=>{const n={};return i.header.space===!0&&Ee.value===!1&&(se.value===!0?n.top=`${i.header.offset}px`:i.header.space===!0&&(n.top=`${i.header.size}px`)),i.footer.space===!0&&rt.value===!1&&(se.value===!0?n.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(n.bottom=`${i.footer.size}px`)),n}),lt=v(()=>{const n={width:`${q.value}px`,transform:`translateX(${xe.value}px)`};return f.value===!0?n:Object.assign(n,it.value)}),st=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),ut=v(()=>`q-drawer q-drawer--${e.side}`+(ie.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(se.value===!0||X.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ee.value===!0?" q-drawer--top-padding":""))),dt=v(()=>{const n=o.lang.rtl===!0?e.side:J.value;return[[_e,mt,void 0,{[n]:!0,mouse:!0}]]}),ct=v(()=>{const n=o.lang.rtl===!0?J.value:e.side;return[[_e,Me,void 0,{[n]:!0,mouse:!0}]]}),ft=v(()=>{const n=o.lang.rtl===!0?J.value:e.side;return[[_e,Me,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){pt(f,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}b(f,n=>{n===!0?(k=w.value,w.value===!0&&N(!1)):e.overlay===!1&&e.behavior!=="mobile"&&k!==!1&&(w.value===!0?(L(0),H(0),ce()):re(!1))}),b(()=>e.side,(n,c)=>{i.instances[c]===K&&(i.instances[c]=void 0,i[c].space=!1,i[c].offset=0),i.instances[n]=K,i[n].size=q.value,i[n].space=X.value,i[n].offset=le.value}),b(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),b(()=>e.behavior+e.breakpoint,ue),b(i.isContainer,n=>{w.value===!0&&m(n!==!0),n===!0&&ue()}),b(i.scrollbarWidth,()=>{L(w.value===!0?0:void 0)}),b(le,n=>{P("offset",n)}),b(X,n=>{r("onLayout",n),P("space",n)}),b(M,()=>{L()}),b(q,n=>{L(),fe(e.miniToOverlay,n)}),b(()=>e.miniToOverlay,n=>{fe(n,q.value)}),b(()=>o.lang.rtl,()=>{L()}),b(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(vt(),i.animate())}),b($,n=>{r("miniState",n)});function L(n){n===void 0?Pe(()=>{n=w.value===!0?0:q.value,L(Q.value*n)}):(i.isContainer.value===!0&&M.value===!0&&(f.value===!0||Math.abs(n)===q.value)&&(n+=Q.value*i.scrollbarWidth.value),xe.value=n)}function H(n){$e.value=n}function de(n){const c=n===!0?"remove":i.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function vt(){_!==null&&clearTimeout(_),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ie.value=!0,_=setTimeout(()=>{_=null,ie.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function mt(n){if(w.value!==!1)return;const c=q.value,C=te(n.distance.x,0,c);if(n.isFinal===!0){C>=Math.min(75,c)===!0?re():(i.animate(),H(0),L(Q.value*c)),F.value=!1;return}L((o.lang.rtl===!0?M.value!==!0:M.value)?Math.max(c-C,0):Math.min(0,C-c)),H(te(C/c,0,1)),n.isFirst===!0&&(F.value=!0)}function Me(n){if(w.value!==!0)return;const c=q.value,C=n.direction===e.side,G=(o.lang.rtl===!0?C!==!0:C)?te(n.distance.x,0,c):0;if(n.isFinal===!0){Math.abs(G)<Math.min(75,c)===!0?(i.animate(),H(1),L(0)):N(),F.value=!1;return}L(Q.value*G),H(te(1-G/c,0,1)),n.isFirst===!0&&(F.value=!0)}function ce(){m(!1),de(!0)}function P(n,c){i.update(e.side,n,c)}function pt(n,c){n.value!==c&&(n.value=c)}function fe(n,c){P("size",n===!0?e.miniWidth:c)}return i.instances[e.side]=K,fe(e.miniToOverlay,q.value),P("space",X.value),P("offset",le.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),xt(()=>{r("onLayout",X.value),r("miniState",$.value),k=e.showIfAbove===!0;const n=()=>{(w.value===!0?S:Te)(!1,!0)};if(i.totalWidth.value!==0){Pe(n);return}y=b(i.totalWidth,()=>{y(),y=void 0,w.value===!1&&e.showIfAbove===!0&&f.value===!1?re(!1):n()})}),ke(()=>{y!==void 0&&y(),_!==null&&(clearTimeout(_),_=null),w.value===!0&&ce(),i.instances[e.side]===K&&(i.instances[e.side]=void 0,P("size",0),P("offset",0),P("space",!1))}),()=>{const n=[];f.value===!0&&(e.noSwipeOpen===!1&&n.push(R(A("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),dt.value)),n.push(Oe("div",{ref:"backdrop",class:ot.value,style:nt.value,"aria-hidden":"true",onClick:N},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>ft.value)));const c=$.value===!0&&a.mini!==void 0,C=[A("div",{...s,key:""+c,class:[st.value,s.class]},c===!0?a.mini():Ue(a.default))];return e.elevated===!0&&w.value===!0&&C.push(A("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(Oe("aside",{ref:"content",class:ut.value,style:lt.value},C,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>ct.value)),A("div",{class:"q-drawer-container"},n)}}});const ea=Je({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}}),ta=["src"];function aa(e,a,r,s,t,o){return E(),V(ae,{clickable:"",tag:"a",href:e.link,class:"sidebar-menu-item"},{default:p(()=>[e.icon?(E(),V(j,{key:0,avatar:""},{default:p(()=>[x("img",{src:e.icon,class:"q-pa-sm sidebar-menu-icon"},null,8,ta)]),_:1})):Et("",!0),g(j,null,{default:p(()=>[g(W,null,{default:p(()=>[O(Ce(e.title),1)]),_:1}),g(W,{caption:""},{default:p(()=>[O(Ce(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var oa=ne(ea,[["render",aa]]),na=Le({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const r=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>A("div",{class:r.value},Ue(a.default))}}),ra=Le({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:r}){const{proxy:{$q:s}}=Ke(),t=Re(je,I);if(t===I)return console.error("QHeader needs to be child of QLayout"),I;const o=B(parseInt(e.heightHint,10)),l=B(!0),m=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||s.platform.is.ios&&t.isContainer.value===!0),h=v(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return l.value===!0?o.value:0;const d=o.value-t.scroll.value.position;return d>0?d:0}),u=v(()=>e.modelValue!==!0||m.value===!0&&l.value!==!0),i=v(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),k=v(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),_=v(()=>{const d=t.rows.value.top,S={};return d[0]==="l"&&t.left.space===!0&&(S[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(S[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),S});function y(d,S){t.update("header",d,S)}function f(d,S){d.value!==S&&(d.value=S)}function $({height:d}){f(o,d),y("size",d)}function q(d){i.value===!0&&f(l,!0),r("focusin",d)}b(()=>e.modelValue,d=>{y("space",d),f(l,!0),t.animate()}),b(h,d=>{y("offset",d)}),b(()=>e.reveal,d=>{d===!1&&f(l,e.modelValue)}),b(l,d=>{t.animate(),r("reveal",d)}),b(t.scroll,d=>{e.reveal===!0&&f(l,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&y("size",o.value),y("space",e.modelValue),y("offset",h.value),ke(()=>{t.instances.header===w&&(t.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const d=Mt(a.default,[]);return e.elevated===!0&&d.push(A("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(A(Ft,{debounce:0,onResize:$})),A("header",{class:k.value,style:_.value,onFocusin:q},d)}}});const ia={name:"AppHeaderMenu",setup(){return{session:Bt()}},methods:{doLogout(){sessionStorage.clear(),this.$router.go(this.$router.currentRoute)}}},la={class:"row items-center"},sa={class:"col q-px-md"},ua={class:"text-capitalize text-weight-bold"},da=x("img",{src:"https://cdn.quasar.dev/img/avatar4.jpg"},null,-1),ca={class:"row no-wrap q-pa-md"},fa={class:"column"},va={class:"column items-center"},ma=x("img",{src:"https://cdn.quasar.dev/img/avatar4.jpg"},null,-1),pa=x("div",{class:"text-subtitle1 q-mt-md q-mb-xs"},"John Doe",-1);function ha(e,a,r,s,t,o){return E(),Ge("div",la,[x("div",sa,[x("div",ua,Ce(s.session.userData.name),1)]),g(Ae,{class:"col"},{default:p(()=>[da,g(_t,{offset:[0,25]},{default:p(()=>[x("div",ca,[x("div",fa,[g(Xe,{separator:""},{default:p(()=>[R((E(),V(ae,{clickable:""},{default:p(()=>[g(j,null,{default:p(()=>[O("Single line item")]),_:1})]),_:1})),[[he]]),R((E(),V(ae,{clickable:""},{default:p(()=>[g(j,null,{default:p(()=>[g(W,null,{default:p(()=>[O("Item with caption")]),_:1}),g(W,{caption:""},{default:p(()=>[O("Caption")]),_:1})]),_:1})]),_:1})),[[he]]),R((E(),V(ae,{clickable:""},{default:p(()=>[g(j,null,{default:p(()=>[g(W,{overline:""},{default:p(()=>[O("OVERLINE")]),_:1}),g(W,null,{default:p(()=>[O("Item with caption")]),_:1})]),_:1})]),_:1})),[[he]])]),_:1})]),g(qt,{vertical:"",inset:"",class:"q-mx-lg"}),x("div",va,[g(Ae,{size:"72px"},{default:p(()=>[ma]),_:1}),pa,R(g(Ze,{color:"primary",label:"Logout",onClick:o.doLogout,push:"",size:"sm"},null,8,["onClick"]),[[Ct]])])])]),_:1})]),_:1})])}var ya=ne(ia,[["render",ha]]);const ga={name:"AppHeader",components:{AppHeaderMenu:ya},setup(){return{}}},wa=x("img",{alt:"Quasar logo",src:Nt,class:"q-pa-sm"},null,-1);function ba(e,a,r,s,t,o){const l=oe("AppHeaderMenu");return E(),V(ra,{flat:"",class:"bg-white text-primary q-py-md"},{default:p(()=>[g(kt,null,{default:p(()=>[g(Ze,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a[0]||(a[0]=m=>e.$emit("toggle-menu"))}),wa,g(na,{class:"text-primary text-weight-bolder text-uppercase"},{default:p(()=>[O(" Pusat Pengaturan Energi Primer ")]),_:1}),g(l)]),_:1})]),_:1})}var _a=ne(ga,[["render",ba]]);const qa=[{title:"Home",caption:"Home",link:"/#/",icon:"/icons/home.svg"},{title:"Monitoring",caption:"Monitoring",link:"/#/dashboard",icon:"/icons/monitor.svg"},{title:"Trophy",caption:"Trophy",link:"/#/trophy",icon:"/icons/trophy.svg"},{title:"Notification",caption:"notification",link:"/#/notification",icon:"/icons/bell.svg"},{title:"Setting",caption:"setting",link:"/#/settings",icon:"/icons/gear.svg"}],Ca=Je({name:"MainLayout",components:{AppHeader:_a,EssentialLink:oa},setup(){const e=B(!1);return{essentialLinks:qa,leftDrawerOpen:e,toggleLeftDrawer(){console.log(e.value),e.value=!e.value}}}});function ka(e,a,r,s,t,o){const l=oe("AppHeader"),m=oe("EssentialLink"),h=oe("router-view");return E(),V(Wt,{view:"lHh Lpr lFf"},{default:p(()=>[g(l,{onToggleMenu:a[0]||(a[0]=u=>e.toggleLeftDrawer())}),g(Zt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[1]||(a[1]=u=>e.leftDrawerOpen=u),mini:"","mini-width":100,class:"flex vertical-middle"},{default:p(()=>[g(Xe,{class:"q-my-auto"},{default:p(()=>[(E(!0),Ge(Pt,null,Ht(e.essentialLinks,u=>(E(),V(m,Ot({key:u.title},u),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),g(It,{class:"bg-secondary"},{default:p(()=>[g(h)]),_:1})]),_:1})}var Ha=ne(Ca,[["render",ka]]);export{Ha as default};
