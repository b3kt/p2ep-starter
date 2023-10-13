import{c as re,h as X,f as ze}from"./render.3c892917.js";import{c as m,h as p,i as je,w as Q,a as ce,o as fe,Z as Ee,g as ee,r as L,$ as De,a0 as $e,a1 as Le,s as ae,n as W,k as Ie,a2 as Pe,R as Ne,u as oe,T as Ue,a3 as Qe,d as Ke,v as Ce,a4 as ne,S as Ze,_ as He,C as Ye,D as Je,E as J,F as K,I as we,L as G,J as We}from"./index.2e078092.js";import{Q as ge,f as Xe,a as Ge,u as et,b as tt,e as Se}from"./QBtn.91b5dd44.js";import{u as ye,a as ke}from"./use-dark.76c2e072.js";import{Q as nt}from"./QPage.ab9a8eee.js";import{_ as lt}from"./logo.2b5e97da.js";import"./dom.0583e912.js";var le=re({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=m(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>p(e.tag,{class:n.value},X(t.default))}});function ot({validate:e,resetValidation:t,requiresQForm:n}){const i=je(Ee,!1);if(i!==!1){const{props:c,proxy:d}=ee();Object.assign(d,{validate:e,resetValidation:t}),Q(()=>c.disable,s=>{s===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),ce(()=>{c.disable!==!0&&i.bindComponent(d)}),fe(()=>{c.disable!==!0&&i.unbindComponent(d)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const qe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ve=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,_e=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ue=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ie=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ve={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>qe.test(e),hexaColor:e=>Ve.test(e),hexOrHexaColor:e=>_e.test(e),rgbColor:e=>ue.test(e),rgbaColor:e=>ie.test(e),rgbOrRgbaColor:e=>ue.test(e)||ie.test(e),hexOrRgbColor:e=>qe.test(e)||ue.test(e),hexaOrRgbaColor:e=>Ve.test(e)||ie.test(e),anyColor:e=>_e.test(e)||ue.test(e)||ie.test(e)},at=[!0,!1,"ondemand"],rt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>at.includes(e)}};function ut(e,t){const{props:n,proxy:i}=ee(),c=L(!1),d=L(null),s=L(null);ot({validate:y,resetValidation:v});let w=0,B;const V=m(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length!==0),S=m(()=>n.disable!==!0&&V.value===!0),h=m(()=>n.error===!0||c.value===!0),N=m(()=>typeof n.errorMessage=="string"&&n.errorMessage.length!==0?n.errorMessage:d.value);Q(()=>n.modelValue,()=>{I()}),Q(()=>n.reactiveRules,z=>{z===!0?B===void 0&&(B=Q(()=>n.rules,()=>{I(!0)})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),Q(e,z=>{z===!0?s.value===null&&(s.value=!1):s.value===!1&&(s.value=!0,S.value===!0&&n.lazyRules!=="ondemand"&&t.value===!1&&P())});function v(){w++,t.value=!1,s.value=null,c.value=!1,d.value=null,P.cancel()}function y(z=n.modelValue){if(S.value!==!0)return!0;const E=++w,M=t.value!==!0?()=>{s.value=!0}:()=>{},R=(q,k)=>{q===!0&&M(),c.value=q,d.value=k||null,t.value=!1},A=[];for(let q=0;q<n.rules.length;q++){const k=n.rules[q];let O;if(typeof k=="function"?O=k(z,ve):typeof k=="string"&&ve[k]!==void 0&&(O=ve[k](z)),O===!1||typeof O=="string")return R(!0,O),!1;O!==!0&&O!==void 0&&A.push(O)}return A.length===0?(R(!1),!0):(t.value=!0,Promise.all(A).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return E===w&&R(!1),!0;const k=q.find(O=>O===!1||typeof O=="string");return E===w&&R(k!==void 0,k),k===void 0},q=>(E===w&&(console.error(q),R(!0)),!1)))}function I(z){S.value===!0&&n.lazyRules!=="ondemand"&&(s.value===!0||n.lazyRules!==!0&&z!==!0)&&P()}const P=De(y,0);return fe(()=>{B!==void 0&&B(),P.cancel()}),Object.assign(i,{resetValidation:v,validate:y}),$e(i,"hasError",()=>h.value),{isDirtyModel:s,hasRules:V,hasError:h,errorMessage:N,validate:y,resetValidation:v}}const Me=/^on[A-Z]/;function it(e,t){const n={listeners:L({}),attributes:L({})};function i(){const c={},d={};for(const s in e)s!=="class"&&s!=="style"&&Me.test(s)===!1&&(c[s]=e[s]);for(const s in t.props)Me.test(s)===!0&&(d[s]=t.props[s]);n.attributes.value=c,n.listeners.value=d}return Le(i),i(),n}let me,se=0;const D=new Array(256);for(let e=0;e<256;e++)D[e]=(e+256).toString(16).substring(1);const st=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let i=t;i>0;i--)n.push(Math.floor(Math.random()*256));return n}})(),Re=4096;function dt(){(me===void 0||se+16>Re)&&(se=0,me=st(Re));const e=Array.prototype.slice.call(me,se,se+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,D[e[0]]+D[e[1]]+D[e[2]]+D[e[3]]+"-"+D[e[4]]+D[e[5]]+"-"+D[e[6]]+D[e[7]]+"-"+D[e[8]]+D[e[9]]+"-"+D[e[10]]+D[e[11]]+D[e[12]]+D[e[13]]+D[e[14]]+D[e[15]]}let he=[],ct=[];function xe(e){ct.length===0?e():he.push(e)}function ft(e){he=he.filter(t=>t!==e)}function be(e){return e===void 0?`f_${dt()}`:e}function pe(e){return e!=null&&(""+e).length!==0}const vt={...ye,...rt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},mt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function gt(){const{props:e,attrs:t,proxy:n,vnode:i}=ee();return{isDark:ke(e,n.$q),editable:m(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:L(!1),focused:L(!1),hasPopupOpen:!1,splitAttrs:it(t,i),targetUid:L(be(e.for)),rootRef:L(null),targetRef:L(null),controlRef:L(null)}}function ht(e){const{props:t,emit:n,slots:i,attrs:c,proxy:d}=ee(),{$q:s}=d;let w=null;e.hasValue===void 0&&(e.hasValue=m(()=>pe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=o=>{n("update:modelValue",o)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:u,onFocusout:r}),Object.assign(e,{clearValue:f,onControlFocusin:u,onControlFocusout:r,focus:k}),e.computedCounter===void 0&&(e.computedCounter=m(()=>{if(t.counter!==!1){const o=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,C=t.maxlength!==void 0?t.maxlength:t.maxValues;return o+(C!==void 0?" / "+C:"")}}));const{isDirtyModel:B,hasRules:V,hasError:S,errorMessage:h,resetValidation:N}=ut(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?m(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):m(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),y=m(()=>t.bottomSlots===!0||t.hint!==void 0||V.value===!0||t.counter===!0||t.error!==null),I=m(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),P=m(()=>`q-field row no-wrap items-start q-field--${I.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+(E.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(S.value===!0?" q-field--error":"")+(S.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&y.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),z=m(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(S.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),E=m(()=>t.labelSlot===!0||t.label!==void 0),M=m(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&S.value!==!0?` text-${t.labelColor}`:"")),R=m(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),A=m(()=>{const o={for:e.targetUid.value};return t.disable===!0?o["aria-disabled"]="true":t.readonly===!0&&(o["aria-readonly"]="true"),o});Q(()=>t.for,o=>{e.targetUid.value=be(o)});function q(){const o=document.activeElement;let C=e.targetRef!==void 0&&e.targetRef.value;C&&(o===null||o.id!==e.targetUid.value)&&(C.hasAttribute("tabindex")===!0||(C=C.querySelector("[tabindex]")),C&&C!==o&&C.focus({preventScroll:!0}))}function k(){xe(q)}function O(){ft(q);const o=document.activeElement;o!==null&&e.rootRef.value.contains(o)&&o.blur()}function u(o){w!==null&&(clearTimeout(w),w=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",o))}function r(o,C){w!==null&&clearTimeout(w),w=setTimeout(()=>{w=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,n("blur",o)),C!==void 0&&C())})}function f(o){ae(o),s.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),W(()=>{N(),s.platform.is.mobile!==!0&&(B.value=!1)})}function l(){const o=[];return i.prepend!==void 0&&o.push(p("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:oe},i.prepend())),o.push(p("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),S.value===!0&&t.noErrorIcon===!1&&o.push(F("error",[p(ge,{name:s.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?o.push(F("inner-loading-append",i.loading!==void 0?i.loading():[p(Xe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&o.push(F("inner-clearable-append",[p(ge,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||s.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:f})])),i.append!==void 0&&o.push(p("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:oe},i.append())),e.getInnerAppend!==void 0&&o.push(F("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&o.push(e.getControlChild()),o}function g(){const o=[];return t.prefix!==void 0&&t.prefix!==null&&o.push(p("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&o.push(e.getShadowControl()),e.getControl!==void 0?o.push(e.getControl()):i.rawControl!==void 0?o.push(i.rawControl()):i.control!==void 0&&o.push(p("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(R.value))),E.value===!0&&o.push(p("div",{class:M.value},X(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&o.push(p("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),o.concat(X(i.default))}function b(){let o,C;S.value===!0?h.value!==null?(o=[p("div",{role:"alert"},h.value)],C=`q--slot-error-${h.value}`):(o=X(i.error),C="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(o=[p("div",t.hint)],C=`q--slot-hint-${t.hint}`):(o=X(i.hint),C="q--slot-hint"));const H=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&H===!1&&o===void 0)return;const _=p("div",{key:C,class:"q-field__messages col"},o);return p("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:oe},[t.hideBottomSpace===!0?_:p(Ue,{name:"q-transition--field-message"},()=>_),H===!0?p("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function F(o,C){return C===null?null:p("div",{key:o,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},C)}let x=!1;return Ie(()=>{x=!0}),Pe(()=>{x===!0&&t.autofocus===!0&&d.focus()}),ce(()=>{Ne.value===!0&&t.for===void 0&&(e.targetUid.value=be()),t.autofocus===!0&&d.focus()}),fe(()=>{w!==null&&clearTimeout(w)}),Object.assign(d,{focus:k,blur:O}),function(){const C=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...A.value}:A.value;return p("label",{ref:e.rootRef,class:[P.value,c.class],style:c.style,...C},[i.before!==void 0?p("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:oe},i.before()):null,p("div",{class:"q-field__inner relative-position col self-stretch"},[p("div",{ref:e.controlRef,class:z.value,tabindex:-1,...e.controlEvents},l()),y.value===!0?b():null]),i.after!==void 0?p("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:oe},i.after()):null])}}const Fe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},de={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Oe=Object.keys(de);Oe.forEach(e=>{de[e].regex=new RegExp(de[e].pattern)});const bt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Oe.join("")+"])|(.)","g"),Ae=/[.*+?^${}()|[\]\\]/g,T=String.fromCharCode(1),pt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function yt(e,t,n,i){let c,d,s,w,B,V;const S=L(null),h=L(v());function N(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Q(()=>e.type+e.autogrow,I),Q(()=>e.mask,u=>{if(u!==void 0)P(h.value,!0);else{const r=k(h.value);I(),e.modelValue!==r&&t("update:modelValue",r)}}),Q(()=>e.fillMask+e.reverseFillMask,()=>{S.value===!0&&P(h.value,!0)}),Q(()=>e.unmaskedValue,()=>{S.value===!0&&P(h.value)});function v(){if(I(),S.value===!0){const u=A(k(e.modelValue));return e.fillMask!==!1?O(u):u}return e.modelValue}function y(u){if(u<c.length)return c.slice(-u);let r="",f=c;const l=f.indexOf(T);if(l>-1){for(let g=u-f.length;g>0;g--)r+=T;f=f.slice(0,l)+r+f.slice(l)}return f}function I(){if(S.value=e.mask!==void 0&&e.mask.length!==0&&N(),S.value===!1){w=void 0,c="",d="";return}const u=Fe[e.mask]===void 0?e.mask:Fe[e.mask],r=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",f=r.replace(Ae,"\\$&"),l=[],g=[],b=[];let F=e.reverseFillMask===!0,x="",o="";u.replace(bt,(j,a,$,Y,Z)=>{if(Y!==void 0){const U=de[Y];b.push(U),o=U.negate,F===!0&&(g.push("(?:"+o+"+)?("+U.pattern+"+)?(?:"+o+"+)?("+U.pattern+"+)?"),F=!1),g.push("(?:"+o+"+)?("+U.pattern+")?")}else if($!==void 0)x="\\"+($==="\\"?"":$),b.push($),l.push("([^"+x+"]+)?"+x+"?");else{const U=a!==void 0?a:Z;x=U==="\\"?"\\\\\\\\":U.replace(Ae,"\\\\$&"),b.push(U),l.push("([^"+x+"]+)?"+x+"?")}});const C=new RegExp("^"+l.join("")+"("+(x===""?".":"[^"+x+"]")+"+)?"+(x===""?"":"["+x+"]*")+"$"),H=g.length-1,_=g.map((j,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+f+"*"+j):a===H?new RegExp("^"+j+"("+(o===""?".":o)+"+)?"+(e.reverseFillMask===!0?"$":f+"*")):new RegExp("^"+j));s=b,w=j=>{const a=C.exec(e.reverseFillMask===!0?j:j.slice(0,b.length+1));a!==null&&(j=a.slice(1).join(""));const $=[],Y=_.length;for(let Z=0,U=j;Z<Y;Z++){const te=_[Z].exec(U);if(te===null)break;U=U.slice(te.shift().length),$.push(...te)}return $.length!==0?$.join(""):j},c=b.map(j=>typeof j=="string"?j:T).join(""),d=c.split(T).join(r)}function P(u,r,f){const l=i.value,g=l.selectionEnd,b=l.value.length-g,F=k(u);r===!0&&I();const x=A(F),o=e.fillMask!==!1?O(x):x,C=h.value!==o;l.value!==o&&(l.value=o),C===!0&&(h.value=o),document.activeElement===l&&W(()=>{if(o===d){const _=e.reverseFillMask===!0?d.length:0;l.setSelectionRange(_,_,"forward");return}if(f==="insertFromPaste"&&e.reverseFillMask!==!0){const _=l.selectionEnd;let j=g-1;for(let a=B;a<=j&&a<_;a++)c[a]!==T&&j++;E.right(l,j);return}if(["deleteContentBackward","deleteContentForward"].indexOf(f)>-1){const _=e.reverseFillMask===!0?g===0?o.length>x.length?1:0:Math.max(0,o.length-(o===d?0:Math.min(x.length,b)+1))+1:g;l.setSelectionRange(_,_,"forward");return}if(e.reverseFillMask===!0)if(C===!0){const _=Math.max(0,o.length-(o===d?0:Math.min(x.length,b+1)));_===1&&g===1?l.setSelectionRange(_,_,"forward"):E.rightReverse(l,_)}else{const _=o.length-b;l.setSelectionRange(_,_,"backward")}else if(C===!0){const _=Math.max(0,c.indexOf(T),Math.min(x.length,g)-1);E.right(l,_)}else{const _=g-1;E.right(l,_)}});const H=e.unmaskedValue===!0?k(o):o;String(e.modelValue)!==H&&n(H,!0)}function z(u,r,f){const l=A(k(u.value));r=Math.max(0,c.indexOf(T),Math.min(l.length,r)),B=r,u.setSelectionRange(r,f,"forward")}const E={left(u,r){const f=c.slice(r-1).indexOf(T)===-1;let l=Math.max(0,r-1);for(;l>=0;l--)if(c[l]===T){r=l,f===!0&&r++;break}if(l<0&&c[r]!==void 0&&c[r]!==T)return E.right(u,0);r>=0&&u.setSelectionRange(r,r,"backward")},right(u,r){const f=u.value.length;let l=Math.min(f,r+1);for(;l<=f;l++)if(c[l]===T){r=l;break}else c[l-1]===T&&(r=l);if(l>f&&c[r-1]!==void 0&&c[r-1]!==T)return E.left(u,f);u.setSelectionRange(r,r,"forward")},leftReverse(u,r){const f=y(u.value.length);let l=Math.max(0,r-1);for(;l>=0;l--)if(f[l-1]===T){r=l;break}else if(f[l]===T&&(r=l,l===0))break;if(l<0&&f[r]!==void 0&&f[r]!==T)return E.rightReverse(u,0);r>=0&&u.setSelectionRange(r,r,"backward")},rightReverse(u,r){const f=u.value.length,l=y(f),g=l.slice(0,r+1).indexOf(T)===-1;let b=Math.min(f,r+1);for(;b<=f;b++)if(l[b-1]===T){r=b,r>0&&g===!0&&r--;break}if(b>f&&l[r-1]!==void 0&&l[r-1]!==T)return E.leftReverse(u,f);u.setSelectionRange(r,r,"forward")}};function M(u){t("click",u),V=void 0}function R(u){if(t("keydown",u),Qe(u)===!0||u.altKey===!0)return;const r=i.value,f=r.selectionStart,l=r.selectionEnd;if(u.shiftKey||(V=void 0),u.keyCode===37||u.keyCode===39){u.shiftKey&&V===void 0&&(V=r.selectionDirection==="forward"?f:l);const g=E[(u.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(u.preventDefault(),g(r,V===f?l:f),u.shiftKey){const b=r.selectionStart;r.setSelectionRange(Math.min(V,b),Math.max(V,b),"forward")}}else u.keyCode===8&&e.reverseFillMask!==!0&&f===l?(E.left(r,f),r.setSelectionRange(r.selectionStart,l,"backward")):u.keyCode===46&&e.reverseFillMask===!0&&f===l&&(E.rightReverse(r,l),r.setSelectionRange(f,r.selectionEnd,"forward"))}function A(u){if(u==null||u==="")return"";if(e.reverseFillMask===!0)return q(u);const r=s;let f=0,l="";for(let g=0;g<r.length;g++){const b=u[f],F=r[g];if(typeof F=="string")l+=F,b===F&&f++;else if(b!==void 0&&F.regex.test(b))l+=F.transform!==void 0?F.transform(b):b,f++;else return l}return l}function q(u){const r=s,f=c.indexOf(T);let l=u.length-1,g="";for(let b=r.length-1;b>=0&&l>-1;b--){const F=r[b];let x=u[l];if(typeof F=="string")g=F+g,x===F&&l--;else if(x!==void 0&&F.regex.test(x))do g=(F.transform!==void 0?F.transform(x):x)+g,l--,x=u[l];while(f===b&&x!==void 0&&F.regex.test(x));else return g}return g}function k(u){return typeof u!="string"||w===void 0?typeof u=="number"?w(""+u):u:w(u)}function O(u){return d.length-u.length<=0?u:e.reverseFillMask===!0&&u.length!==0?d.slice(0,-u.length)+u:u+d.slice(u.length)}return{innerValue:h,hasMask:S,moveCursorForPaste:z,updateMaskValue:P,onMaskedKeydown:R,onMaskedClick:M}}const Te={name:String};function kt(e={}){return(t,n,i)=>{t[n](p("input",{class:"hidden"+(i||""),...e.value}))}}function xt(e){return m(()=>e.name||e.for)}function Ct(e,t){function n(){const i=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{c.items.add(d)}),{files:c.files}}catch{return{files:void 0}}}return t===!0?m(()=>{if(e.type==="file")return n()}):m(n)}const wt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,St=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,qt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Vt=/[a-z0-9_ -]$/i;function _t(e){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,e(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(Ke.is.firefox===!0?Vt.test(n.data)===!1:wt.test(n.data)===!0||St.test(n.data)===!0||qt.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}var Be=re({name:"QInput",inheritAttrs:!1,props:{...vt,...pt,...Te,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...mt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:n}){const{proxy:i}=ee(),{$q:c}=i,d={};let s=NaN,w,B,V=null,S;const h=L(null),N=xt(e),{innerValue:v,hasMask:y,moveCursorForPaste:I,updateMaskValue:P,onMaskedKeydown:z,onMaskedClick:E}=yt(e,t,x,h),M=Ct(e,!0),R=m(()=>pe(v.value)),A=_t(b),q=gt(),k=m(()=>e.type==="textarea"||e.autogrow===!0),O=m(()=>k.value===!0||["text","search","url","tel","password"].includes(e.type)),u=m(()=>{const a={...q.splitAttrs.listeners.value,onInput:b,onPaste:g,onChange:C,onBlur:H,onFocus:Ce};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=A,y.value===!0&&(a.onKeydown=z,a.onClick=E),e.autogrow===!0&&(a.onAnimationend=F),a}),r=m(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:N.value,...q.splitAttrs.attributes.value,id:q.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return k.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});Q(()=>e.type,()=>{h.value&&(h.value.value=e.modelValue)}),Q(()=>e.modelValue,a=>{if(y.value===!0){if(B===!0&&(B=!1,String(a)===s))return;P(a)}else v.value!==a&&(v.value=a,e.type==="number"&&d.hasOwnProperty("value")===!0&&(w===!0?w=!1:delete d.value));e.autogrow===!0&&W(o)}),Q(()=>e.autogrow,a=>{a===!0?W(o):h.value!==null&&n.rows>0&&(h.value.style.height="auto")}),Q(()=>e.dense,()=>{e.autogrow===!0&&W(o)});function f(){xe(()=>{const a=document.activeElement;h.value!==null&&h.value!==a&&(a===null||a.id!==q.targetUid.value)&&h.value.focus({preventScroll:!0})})}function l(){h.value!==null&&h.value.select()}function g(a){if(y.value===!0&&e.reverseFillMask!==!0){const $=a.target;I($,$.selectionStart,$.selectionEnd)}t("paste",a)}function b(a){if(!a||!a.target)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const $=a.target.value;if(a.target.qComposing===!0){d.value=$;return}if(y.value===!0)P($,!1,a.inputType);else if(x($),O.value===!0&&a.target===document.activeElement){const{selectionStart:Y,selectionEnd:Z}=a.target;Y!==void 0&&Z!==void 0&&W(()=>{a.target===document.activeElement&&$.indexOf(a.target.value)===0&&a.target.setSelectionRange(Y,Z)})}e.autogrow===!0&&o()}function F(a){t("animationend",a),o()}function x(a,$){S=()=>{V=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==a&&s!==a&&(s=a,$===!0&&(B=!0),t("update:modelValue",a),W(()=>{s===a&&(s=NaN)})),S=void 0},e.type==="number"&&(w=!0,d.value=a),e.debounce!==void 0?(V!==null&&clearTimeout(V),d.value=a,V=setTimeout(S,e.debounce)):S()}function o(){requestAnimationFrame(()=>{const a=h.value;if(a!==null){const $=a.parentNode.style,{scrollTop:Y}=a,{overflowY:Z,maxHeight:U}=c.platform.is.firefox===!0?{}:window.getComputedStyle(a),te=Z!==void 0&&Z!=="scroll";te===!0&&(a.style.overflowY="hidden"),$.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",te===!0&&(a.style.overflowY=parseInt(U,10)<a.scrollHeight?"auto":"hidden"),$.marginBottom="",a.scrollTop=Y}})}function C(a){A(a),V!==null&&(clearTimeout(V),V=null),S!==void 0&&S(),t("change",a.target.value)}function H(a){a!==void 0&&Ce(a),V!==null&&(clearTimeout(V),V=null),S!==void 0&&S(),w=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{h.value!==null&&(h.value.value=v.value!==void 0?v.value:"")})}function _(){return d.hasOwnProperty("value")===!0?d.value:v.value!==void 0?v.value:""}fe(()=>{H()}),ce(()=>{e.autogrow===!0&&o()}),Object.assign(q,{innerValue:v,fieldClass:m(()=>`q-${k.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:m(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:h,emitValue:x,hasValue:R,floatingLabel:m(()=>R.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||pe(e.displayValue)),getControl:()=>p(k.value===!0?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...r.value,...u.value,...e.type!=="file"?{value:_()}:M.value}),getShadowControl:()=>p("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(k.value===!0?"":" text-no-wrap")},[p("span",{class:"invisible"},_()),p("span",e.shadowText)])});const j=ht(q);return Object.assign(i,{focus:f,select:l,getNativeElement:()=>h.value}),$e(i,"nativeEl",()=>h.value),j}});function Mt(e,t){const n=L(null),i=m(()=>e.disable===!0?null:p("span",{ref:n,class:"no-outline",tabindex:-1}));function c(d){const s=t.value;d!==void 0&&d.type.indexOf("key")===0?s!==null&&document.activeElement!==s&&s.contains(document.activeElement)===!0&&s.focus():n.value!==null&&(d===void 0||s!==null&&s.contains(d.target)===!0)&&n.value.focus()}return{refocusTargetEl:i,refocusTarget:c}}var Rt={xs:30,sm:35,md:40,lg:50,xl:60};const Ft={...ye,...et,...Te,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},At=["update:modelValue"];function Bt(e,t){const{props:n,slots:i,emit:c,proxy:d}=ee(),{$q:s}=d,w=ke(n,s),B=L(null),{refocusTargetEl:V,refocusTarget:S}=Mt(n,B),h=Ge(n,Rt),N=m(()=>n.val!==void 0&&Array.isArray(n.modelValue)),v=m(()=>{const l=ne(n.val);return N.value===!0?n.modelValue.findIndex(g=>ne(g)===l):-1}),y=m(()=>N.value===!0?v.value>-1:ne(n.modelValue)===ne(n.trueValue)),I=m(()=>N.value===!0?v.value===-1:ne(n.modelValue)===ne(n.falseValue)),P=m(()=>y.value===!1&&I.value===!1),z=m(()=>n.disable===!0?-1:n.tabindex||0),E=m(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(n.disable===!0?" disabled":"")+(w.value===!0?` q-${e}--dark`:"")+(n.dense===!0?` q-${e}--dense`:"")+(n.leftLabel===!0?" reverse":"")),M=m(()=>{const l=y.value===!0?"truthy":I.value===!0?"falsy":"indet",g=n.color!==void 0&&(n.keepColor===!0||(e==="toggle"?y.value===!0:I.value!==!0))?` text-${n.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${l}${g}`}),R=m(()=>{const l={type:"checkbox"};return n.name!==void 0&&Object.assign(l,{".checked":y.value,"^checked":y.value===!0?"checked":void 0,name:n.name,value:N.value===!0?n.val:n.trueValue}),l}),A=kt(R),q=m(()=>{const l={tabindex:z.value,role:e==="toggle"?"switch":"checkbox","aria-label":n.label,"aria-checked":P.value===!0?"mixed":y.value===!0?"true":"false"};return n.disable===!0&&(l["aria-disabled"]="true"),l});function k(l){l!==void 0&&(ae(l),S(l)),n.disable!==!0&&c("update:modelValue",O(),l)}function O(){if(N.value===!0){if(y.value===!0){const l=n.modelValue.slice();return l.splice(v.value,1),l}return n.modelValue.concat([n.val])}if(y.value===!0){if(n.toggleOrder!=="ft"||n.toggleIndeterminate===!1)return n.falseValue}else if(I.value===!0){if(n.toggleOrder==="ft"||n.toggleIndeterminate===!1)return n.trueValue}else return n.toggleOrder!=="ft"?n.trueValue:n.falseValue;return n.indeterminateValue}function u(l){(l.keyCode===13||l.keyCode===32)&&ae(l)}function r(l){(l.keyCode===13||l.keyCode===32)&&k(l)}const f=t(y,P);return Object.assign(d,{toggle:k}),()=>{const l=f();n.disable!==!0&&A(l,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const g=[p("div",{class:M.value,style:h.value,"aria-hidden":"true"},l)];V.value!==null&&g.push(V.value);const b=n.label!==void 0?ze(i.default,[n.label]):X(i.default);return b!==void 0&&g.push(p("div",{class:`q-${e}__label q-anchor--skip`},b)),p("div",{ref:B,class:E.value,...q.value,onClick:k,onKeydown:u,onKeyup:r},g)}}var Et=re({name:"QToggle",props:{...Ft,icon:String,iconColor:String},emits:At,setup(e){function t(n,i){const c=m(()=>(n.value===!0?e.checkedIcon:i.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),d=m(()=>n.value===!0?e.iconColor:null);return()=>[p("div",{class:"q-toggle__track"}),p("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},c.value!==void 0?[p(ge,{name:c.value,color:d.value})]:void 0)]}return Bt("toggle",t)}}),$t=re({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:n}){const i=ee(),c=L(null);let d=0;const s=[];function w(v){const y=typeof v=="boolean"?v:e.noErrorFocus!==!0,I=++d,P=(M,R)=>{n("validation"+(M===!0?"Success":"Error"),R)},z=M=>{const R=M.validate();return typeof R.then=="function"?R.then(A=>({valid:A,comp:M}),A=>({valid:!1,comp:M,err:A})):Promise.resolve({valid:R,comp:M})};return(e.greedy===!0?Promise.all(s.map(z)).then(M=>M.filter(R=>R.valid!==!0)):s.reduce((M,R)=>M.then(()=>z(R).then(A=>{if(A.valid===!1)return Promise.reject(A)})),Promise.resolve()).catch(M=>[M])).then(M=>{if(M===void 0||M.length===0)return I===d&&P(!0),!0;if(I===d){const{comp:R,err:A}=M[0];if(A!==void 0&&console.error(A),P(!1,R),y===!0){const q=M.find(({comp:k})=>typeof k.focus=="function"&&tt(k.$)===!1);q!==void 0&&q.comp.focus()}}return!1})}function B(){d++,s.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function V(v){v!==void 0&&ae(v);const y=d+1;w().then(I=>{y===d&&I===!0&&(e.onSubmit!==void 0?n("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function S(v){v!==void 0&&ae(v),n("reset"),W(()=>{B(),e.autofocus===!0&&e.noResetFocus!==!0&&h()})}function h(){xe(()=>{if(c.value===null)return;const v=c.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(c.value.querySelectorAll("[tabindex]"),y=>y.tabIndex>-1);v!=null&&v.focus({preventScroll:!0})})}Ze(Ee,{bindComponent(v){s.push(v)},unbindComponent(v){const y=s.indexOf(v);y>-1&&s.splice(y,1)}});let N=!1;return Ie(()=>{N=!0}),Pe(()=>{N===!0&&e.autofocus===!0&&h()}),ce(()=>{e.autofocus===!0&&h()}),Object.assign(i.proxy,{validate:w,resetValidation:B,submit:V,reset:S,focus:h,getValidationComponents:()=>s}),()=>p("form",{class:"q-form",ref:c,onSubmit:V,onReset:S},X(t.default))}}),It=re({name:"QCard",props:{...ye,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=ee(),i=ke(e,n),c=m(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>p(e.tag,{class:c.value},X(t.default))}});const Pt={name:"LoginPage"},Ot=G("h3",{class:"text-weight-bold qa-none q-my-none"},"Sign in",-1),Tt=G("img",{alt:"Quasar logo",src:lt},null,-1),zt={class:"q-pa-md",style:{"max-width":"400px"}},jt=G("div",null,"Label",-1),Dt=G("div",null,"Label",-1),Lt=G("div",{class:"text-h6"},"Our Changing Planet",-1),Nt=G("div",{class:"text-subtitle2"},"by John Doe",-1);function Ut(e,t,n,i,c,d){return Ye(),Je(nt,{padding:"",class:"bg-secondary flex flex-center"},{default:J(()=>[K(It,{class:"my-card"},{default:J(()=>[K(le,{horizontal:"",class:"row justify-between items-start content-start"},{default:J(()=>[K(le,null,{default:J(()=>[we(" Welcome to "),Ot]),_:1}),K(le,null,{default:J(()=>[Tt]),_:1})]),_:1}),K(le,null,{default:J(()=>[G("div",zt,[K($t,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-gutter-md"},{default:J(()=>[jt,K(Be,{dense:"",outlined:"",modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.name=s),label:"Your name *",hint:"Name and surname","lazy-rules":"",rules:[s=>s&&s.length>0||"Please type something"]},null,8,["modelValue","rules"]),Dt,K(Be,{dense:"",outlined:"",type:"number",modelValue:e.age,"onUpdate:modelValue":t[1]||(t[1]=s=>e.age=s),label:"Your age *","lazy-rules":"",rules:[s=>s!==null&&s!==""||"Please type your age",s=>s>0&&s<100||"Please type a real age"]},null,8,["modelValue","rules"]),K(Et,{modelValue:e.accept,"onUpdate:modelValue":t[2]||(t[2]=s=>e.accept=s),label:"I accept the license and terms"},null,8,["modelValue"]),G("div",null,[K(Se,{label:"Submit",type:"submit",color:"primary"}),K(Se,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},8,["onSubmit","onReset"])])]),_:1}),K(le,null,{default:J(()=>[Lt,Nt]),_:1}),K(le,{class:"q-pt-none"},{default:J(()=>[we(We(e.lorem),1)]),_:1})]),_:1})]),_:1})}var Xt=He(Pt,[["render",Ut]]);export{Xt as default};