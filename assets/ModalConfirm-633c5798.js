import{aj as Re,ak as _e,l as ye,q as E,T as L,al as de,p as j,r as _,Y as z,ab as he,S as F,am as Qe,c as k,X as Q,a1 as N,b as R,a9 as pe,M as we,an as Ne,g as be,i as Ie,ao as Se,W as et,s as Y,a8 as tt,o as nt,a as He,d as ot,ai as at,af as rt,m as it,R as We,C as lt,D as st,t as ct,ap as ut,F as ft,G as dt,a3 as vt,I as mt,a5 as gt,_ as yt,v as ht,w as wt,x as W,y as G,K as U}from"./index-573eb4f5.js";import{a as Z,g as qe,n as $e,d as bt,s as ve,b as xt,B as ie,c as Oe,f as Et}from"./forwardRefs-e658ad70.js";import{E as ke,F as le,G as se,H as Pe,I as Ce,a as pt,C as St,h as Ot,D as kt,J as Pt,n as je,K as Ct,r as Tt,o as ce}from"./VBtn-5c1037b7.js";import{d as At,m as Ft,M as Vt}from"./VRow-47c118a5.js";import{b as Bt,c as Lt,d as Mt,V as Dt}from"./VCard-0ce01423.js";const ee=new WeakMap;function Rt(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=_e(t),a=ee.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[i,l]=r;i===o&&(e.removeEventListener(o,l),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===n[t])){e.addEventListener(o,n[t]);const r=a||new Set;r.add([o,n[t]]),ee.has(e)||ee.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function _t(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=_e(t),a=ee.get(e);a==null||a.forEach(r=>{const[i,l]=r;i===o&&(e.removeEventListener(o,l),a.delete(r))})}else e.removeAttribute(t)})}function ze(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Nt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?It(e):xe(e))return e;e=e.parentElement}return document.scrollingElement}function ne(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(xe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function xe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function It(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Ht(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Wt=At("v-spacer","div","VSpacer"),qt={props:{buttonOpenText:String,buttonOkText:String,buttonKoText:String,title:String,description:String},data(){return{dialog:!1}},methods:{agree(){this.$emit("agree")}}};const $t=j({target:[Object,Array]},"v-dialog-transition"),jt=ye()({name:"VDialogTransition",props:$t(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,r){var h;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),a.style.visibility="";const{x:i,y:l,sx:f,sy:c,speed:u}=Ae(e.target,a),m=Z(a,[{transform:`translate(${i}px, ${l}px) scale(${f}, ${c})`,opacity:0},{}],{duration:225*u,easing:bt});(h=Te(a))==null||h.forEach(y=>{Z(y,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*u,easing:ve})}),m.finished.then(()=>r())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,r){var h;await new Promise(y=>requestAnimationFrame(y));const{x:i,y:l,sx:f,sy:c,speed:u}=Ae(e.target,a);Z(a,[{},{transform:`translate(${i}px, ${l}px) scale(${f}, ${c})`,opacity:0}],{duration:125*u,easing:xt}).finished.then(()=>r()),(h=Te(a))==null||h.forEach(y=>{Z(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*u,easing:ve})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?E(de,L({name:"dialog-transition"},o,{css:!1}),t):E(de,{name:"dialog-transition"},t)}});function Te(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ae(e,n){const t=qe(e),o=$e(n),[a,r]=getComputedStyle(n).transformOrigin.split(" ").map(C=>parseFloat(C)),[i,l]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let f=t.left+t.width/2;i==="left"||l==="left"?f-=t.width/2:(i==="right"||l==="right")&&(f+=t.width/2);let c=t.top+t.height/2;i==="top"||l==="top"?c-=t.height/2:(i==="bottom"||l==="bottom")&&(c+=t.height/2);const u=t.width/o.width,m=t.height/o.height,h=Math.max(1,u,m),y=u/h||0,d=m/h||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),P=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:f-(a+o.left),y:c-(r+o.top),sx:y,sy:d,speed:P}}function ue(e,n){return{x:e.x+n.x,y:e.y+n.y}}function zt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Fe(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,r=t==="top"?0:t==="bottom"?n.height:t;return ue({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,r=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ue({x:a,y:r},n)}return ue({x:n.width/2,y:n.height/2},n)}const Ye={static:Xt,connected:Ut},Yt=j({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ye},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Kt(e,n){const t=_({}),o=_();z&&(he(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var i,l;F(()=>e.locationStrategy,r),N(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(i=e.locationStrategy(n,e,t))==null?void 0:i.updateLocation:o.value=(l=Ye[e.locationStrategy](n,e,t))==null?void 0:l.updateLocation}),window.addEventListener("resize",a,{passive:!0}),N(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(r){var i;(i=o.value)==null||i.call(o,r)}return{contentStyles:t,updateLocation:o}}function Xt(){}function Gt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=$e(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Ut(e,n,t){(Array.isArray(e.target.value)||Ht(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Qe(()=>{const d=ke(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?le(d):ke(n.origin,e.isRtl.value);return d.side===v.side&&d.align===se(v).align?{preferredAnchor:Pe(d),preferredOrigin:Pe(v)}:{preferredAnchor:d,preferredOrigin:v}}),[i,l,f,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>k(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),u=k(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let m=!1;const h=new ResizeObserver(()=>{m&&y()});F([e.target,e.contentEl],(d,v)=>{let[P,C]=d,[p,b]=v;p&&!Array.isArray(p)&&h.unobserve(p),P&&!Array.isArray(P)&&h.observe(P),b&&h.unobserve(b),C&&h.observe(C)},{immediate:!0}),N(()=>{h.disconnect()});function y(){if(m=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>m=!0)}),!e.target.value||!e.contentEl.value)return;const d=qe(e.target.value),v=Gt(e.contentEl.value,e.isRtl.value),P=ne(e.contentEl.value),C=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=P.reduce((O,x)=>{const g=x.getBoundingClientRect(),w=new ie({x:x===document.documentElement?0:g.x,y:x===document.documentElement?0:g.y,width:x.clientWidth,height:x.clientHeight});return O?new ie({x:Math.max(O.left,w.left),y:Math.max(O.top,w.top),width:Math.min(O.right,w.right)-Math.max(O.left,w.left),height:Math.min(O.bottom,w.bottom)-Math.max(O.top,w.top)}):w},void 0);p.x+=C,p.y+=C,p.width-=C*2,p.height-=C*2;let b={anchor:a.value,origin:r.value};function q(O){const x=new ie(v),g=Fe(O.anchor,d),w=Fe(O.origin,x);let{x:B,y:D}=zt(g,w);switch(O.anchor.side){case"top":D-=u.value[0];break;case"bottom":D+=u.value[0];break;case"left":B-=u.value[0];break;case"right":B+=u.value[0];break}switch(O.anchor.align){case"top":D-=u.value[1];break;case"bottom":D+=u.value[1];break;case"left":B-=u.value[1];break;case"right":B+=u.value[1];break}return x.x+=B,x.y+=D,x.width=Math.min(x.width,f.value),x.height=Math.min(x.height,c.value),{overflows:Oe(x,p),x:B,y:D}}let M=0,T=0;const s={x:0,y:0},V={x:!1,y:!1};let ae=-1;for(;!(ae++>10);){const{x:O,y:x,overflows:g}=q(b);M+=O,T+=x,v.x+=O,v.y+=x;{const w=Ce(b.anchor),B=g.x.before||g.x.after,D=g.y.before||g.y.after;let K=!1;if(["x","y"].forEach(A=>{if(A==="x"&&B&&!V.x||A==="y"&&D&&!V.y){const $={anchor:{...b.anchor},origin:{...b.origin}},X=A==="x"?w==="y"?se:le:w==="y"?le:se;$.anchor=X($.anchor),$.origin=X($.origin);const{overflows:I}=q($);(I[A].before<=g[A].before&&I[A].after<=g[A].after||I[A].before+I[A].after<(g[A].before+g[A].after)/2)&&(b=$,K=V[A]=!0)}}),K)continue}g.x.before&&(M+=g.x.before,v.x+=g.x.before),g.x.after&&(M-=g.x.after,v.x-=g.x.after),g.y.before&&(T+=g.y.before,v.y+=g.y.before),g.y.after&&(T-=g.y.after,v.y-=g.y.after);{const w=Oe(v,p);s.x=p.width-w.x.before-w.x.after,s.y=p.height-w.y.before-w.y.after,M+=w.x.before,v.x+=w.x.before,T+=w.y.before,v.y+=w.y.before}break}const re=Ce(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:R(fe(T)),left:e.isRtl.value?void 0:R(fe(M)),right:e.isRtl.value?R(fe(-M)):void 0,minWidth:R(re==="y"?Math.min(i.value,d.width):i.value),maxWidth:R(Ve(pe(s.x,i.value===1/0?0:i.value,f.value))),maxHeight:R(Ve(pe(s.y,l.value===1/0?0:l.value,c.value)))}),{available:s,contentBox:v}}return F(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>y()),Q(()=>{const d=y();if(!d)return;const{available:v,contentBox:P}=d;P.height>v.y&&requestAnimationFrame(()=>{y(),requestAnimationFrame(()=>{y()})})}),{updateLocation:y}}function fe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ve(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let me=!0;const oe=[];function Jt(e){!me||oe.length?(oe.push(e),ge()):(me=!1,e(),ge())}let Be=-1;function ge(){cancelAnimationFrame(Be),Be=requestAnimationFrame(()=>{const e=oe.shift();e&&e(),oe.length?ge():me=!0})}const te={none:null,close:en,block:tn,reposition:nn},Zt=j({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in te}},"VOverlay-scroll-strategies");function Qt(e,n){if(!z)return;let t;we(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ne(),await Q(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=te[e.scrollStrategy])==null||o.call(te,n,e,t)}))}),N(()=>{t==null||t.stop()})}function en(e){function n(t){e.isActive.value=!1}Ke(e.targetEl.value??e.contentEl.value,n)}function tn(e,n){var i;const t=(i=e.root.value)==null?void 0:i.offsetParent,o=[...new Set([...ne(e.targetEl.value,n.contained?t:void 0),...ne(e.contentEl.value,n.contained?t:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(l=>xe(l)&&l)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((l,f)=>{l.style.setProperty("--v-body-scroll-x",R(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",R(-l.scrollTop)),l!==document.documentElement&&l.style.setProperty("--v-scrollbar-offset",R(a)),l.classList.add("v-overlay-scroll-blocked")}),N(()=>{o.forEach((l,f)=>{const c=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-c,l.scrollTop=-u}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function nn(e,n,t){let o=!1,a=-1,r=-1;function i(l){Jt(()=>{var u,m;const f=performance.now();(m=(u=e.updateLocation).value)==null||m.call(u,l),o=(performance.now()-f)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{t.run(()=>{Ke(e.targetEl.value??e.contentEl.value,l=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{i(l)})})):i(l)})})}),N(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Ke(e,n){const t=[document,...ne(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),N(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const on=Symbol.for("vuetify:v-menu"),an=j({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function rn(e,n){const t={},o=a=>()=>{if(!z)return Promise.resolve(!0);const r=a==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(i=>{const l=parseInt(e[a]??0,10);t[a]=window.setTimeout(()=>{n==null||n(r),i(r)},l)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const ln=j({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...an()},"VOverlay-activator");function sn(e,n){let{isActive:t,isTop:o}=n;const a=be("useActivator"),r=_();let i=!1,l=!1,f=!0;const c=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),u=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:m,runCloseDelay:h}=rn(e,s=>{s===(e.openOnHover&&i||c.value&&l)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==s&&(f=!0),t.value=s)}),y=_(),d={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,t.value||(y.value=[s.clientX,s.clientY]),t.value=!t.value},onMouseenter:s=>{var V;(V=s.sourceCapabilities)!=null&&V.firesTouchEvents||(i=!0,r.value=s.currentTarget||s.target,m())},onMouseleave:s=>{i=!1,h()},onFocus:s=>{et(s.target,":focus-visible")!==!1&&(l=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,m())},onBlur:s=>{l=!1,s.stopPropagation(),h()}},v=k(()=>{const s={};return u.value&&(s.onClick=d.onClick),e.openOnHover&&(s.onMouseenter=d.onMouseenter,s.onMouseleave=d.onMouseleave),c.value&&(s.onFocus=d.onFocus,s.onBlur=d.onBlur),s}),P=k(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{i=!0,m()},s.onMouseleave=()=>{i=!1,h()}),c.value&&(s.onFocusin=()=>{l=!0,m()},s.onFocusout=()=>{l=!1,h()}),e.closeOnContentClick){const V=Ie(on,null);s.onClick=()=>{t.value=!1,V==null||V.closeParents()}}return s}),C=k(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{f&&(i=!0,f=!1,m())},s.onMouseleave=()=>{i=!1,h()}),s});F(o,s=>{s&&(e.openOnHover&&!i&&(!c.value||!l)||c.value&&!l&&(!e.openOnHover||!i))&&(t.value=!1)}),F(t,s=>{s||setTimeout(()=>{y.value=void 0})},{flush:"post"});const p=_();we(()=>{p.value&&Q(()=>{r.value=Se(p.value)})});const b=_(),q=k(()=>e.target==="cursor"&&y.value?y.value:b.value?Se(b.value):Xe(e.target,a)||r.value),M=k(()=>Array.isArray(q.value)?void 0:q.value);let T;return F(()=>!!e.activator,s=>{s&&z?(T=Ne(),T.run(()=>{cn(e,a,{activatorEl:r,activatorEvents:v})})):T&&T.stop()},{flush:"post",immediate:!0}),N(()=>{T==null||T.stop()}),{activatorEl:r,activatorRef:p,target:q,targetEl:M,targetRef:b,activatorEvents:v,contentEvents:P,scrimEvents:C}}function cn(e,n,t){let{activatorEl:o,activatorEvents:a}=t;F(()=>e.activator,(f,c)=>{if(c&&f!==c){const u=l(c);u&&i(u)}f&&Q(()=>r())},{immediate:!0}),F(()=>e.activatorProps,()=>{r()}),N(()=>{i()});function r(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;f&&Rt(f,L(a.value,c))}function i(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;f&&_t(f,L(a.value,c))}function l(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=Xe(f,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function Xe(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let r=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function un(){if(!z)return Y(!1);const{ssr:e}=tt();if(e){const n=Y(!1);return nt(()=>{n.value=!0}),n}else return Y(!0)}const fn=j({eager:Boolean},"lazy");function dn(e,n){const t=Y(!1),o=k(()=>t.value||e.eager||n.value);F(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function Ge(){const n=be("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Le=Symbol.for("vuetify:stack"),J=He([]);function vn(e,n,t){const o=be("useStack"),a=!t,r=Ie(Le,void 0),i=He({activeChildren:new Set});ot(Le,i);const l=Y(+n.value);he(e,()=>{var m;const u=(m=J.at(-1))==null?void 0:m[1];l.value=u?u+10:+n.value,a&&J.push([o.uid,l.value]),r==null||r.activeChildren.add(o.uid),N(()=>{if(a){const h=rt(J).findIndex(y=>y[0]===o.uid);J.splice(h,1)}r==null||r.activeChildren.delete(o.uid)})});const f=Y(!0);a&&we(()=>{var m;const u=((m=J.at(-1))==null?void 0:m[0])===o.uid;setTimeout(()=>f.value=u)});const c=k(()=>!i.activeChildren.size);return{globalTop:at(f),localTop:c,stackStyles:k(()=>({zIndex:l.value}))}}function mn(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!z)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function gn(){return!0}function Ue(e,n,t){if(!e||Je(e,t)===!1)return!1;const o=ze(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function Je(e,n){return(typeof n.value=="object"&&n.value.closeConditional||gn)(e)}function yn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ue(e,n,t)&&setTimeout(()=>{Je(e,t)&&o&&o(e)},0)}function Me(e,n){const t=ze(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const hn={mounted(e,n){const t=a=>yn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ue(a,e,n)};Me(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Me(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function wn(e){const{modelValue:n,color:t,...o}=e;return E(de,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&E("div",L({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Ze=j({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...ln(),...pt(),...St(),...fn(),...Yt(),...Zt(),...it(),...Ft()},"VOverlay"),De=ye()({name:"VOverlay",directives:{ClickOutside:hn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ze()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const r=We(e,"modelValue"),i=k({get:()=>r.value,set:S=>{S&&e.disabled||(r.value=S)}}),{teleportTarget:l}=mn(k(()=>e.attach||e.contained)),{themeClasses:f}=lt(e),{rtlClasses:c,isRtl:u}=st(),{hasContent:m,onAfterLeave:h}=dn(e,i),y=Ot(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:P}=vn(i,ct(e,"zIndex"),e._disableGlobalStack),{activatorEl:C,activatorRef:p,target:b,targetEl:q,targetRef:M,activatorEvents:T,contentEvents:s,scrimEvents:V}=sn(e,{isActive:i,isTop:v}),{dimensionStyles:ae}=kt(e),re=un(),{scopeId:O}=Ge();F(()=>e.disabled,S=>{S&&(i.value=!1)});const x=_(),g=_(),{contentStyles:w,updateLocation:B}=Kt(e,{isRtl:u,contentEl:g,target:b,isActive:i});Qt(e,{root:x,contentEl:g,targetEl:q,isActive:i,updateLocation:B});function D(S){a("click:outside",S),e.persistent?I():i.value=!1}function K(){return i.value&&d.value}z&&F(i,S=>{S?window.addEventListener("keydown",A):window.removeEventListener("keydown",A)},{immediate:!0});function A(S){var H,Ee;S.key==="Escape"&&d.value&&(e.persistent?I():(i.value=!1,(H=g.value)!=null&&H.contains(document.activeElement)&&((Ee=C.value)==null||Ee.focus())))}const $=Pt();he(()=>e.closeOnBack,()=>{Ct($,S=>{d.value&&i.value?(S(!1),e.persistent?I():i.value=!1):S()})});const X=_();F(()=>i.value&&(e.absolute||e.contained)&&l.value==null,S=>{if(S){const H=Nt(x.value);H&&H!==document.scrollingElement&&(X.value=H.scrollTop)}});function I(){e.noClickAnimation||g.value&&Z(g.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ve})}return je(()=>{var S;return E(mt,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:i.value,props:L({ref:p,targetRef:M},T.value,e.activatorProps)}),re.value&&m.value&&E(ut,{disabled:!l.value,to:l.value},{default:()=>[E("div",L({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},f.value,c.value,e.class],style:[P.value,{top:R(X.value)},e.style],ref:x},O,o),[E(wn,L({color:y,modelValue:i.value&&!!e.scrim},V.value),null),E(Vt,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:()=>{h(),a("afterLeave")}},{default:()=>{var H;return[ft(E("div",L({ref:g,class:["v-overlay__content",e.contentClass],style:[ae.value,w.value]},s.value,e.contentProps),[(H=t.default)==null?void 0:H.call(t,{isActive:i})]),[[dt,i.value],[vt("click-outside"),{handler:D,closeConditional:K,include:()=>[C.value]}]])]}})])]})])}),{activatorEl:C,target:b,animateClick:I,contentEl:g,globalTop:d,localTop:v,updateLocation:B}}}),bn=j({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Ze({origin:"center center",scrollStrategy:"block",transition:{component:jt},zIndex:2400})},"VDialog"),xn=ye()({name:"VDialog",props:bn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=We(e,"modelValue"),{scopeId:a}=Ge(),r=_();function i(f){var m,h;const c=f.relatedTarget,u=f.target;if(c!==u&&((m=r.value)!=null&&m.contentEl)&&((h=r.value)!=null&&h.globalTop)&&![document,r.value.contentEl].includes(u)&&!r.value.contentEl.contains(u)){const y=gt(r.value.contentEl);if(!y.length)return;const d=y[0],v=y[y.length-1];c===d?v.focus():d.focus()}}z&&F(()=>o.value&&e.retainFocus,f=>{f?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),F(o,async f=>{var c,u;await Q(),f?(c=r.value.contentEl)==null||c.focus({preventScroll:!0}):(u=r.value.activatorEl)==null||u.focus({preventScroll:!0})});const l=k(()=>L({"aria-haspopup":"dialog","aria-expanded":String(o.value)},e.activatorProps));return je(()=>{const f=De.filterProps(e);return E(De,L({ref:r,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},f,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,"aria-modal":"true",activatorProps:l.value,role:"dialog"},a),{activator:t.activator,default:function(){for(var c=arguments.length,u=new Array(c),m=0;m<c;m++)u[m]=arguments[m];return E(Tt,{root:"VDialog"},{default:()=>{var h;return[(h=t.default)==null?void 0:h.call(t,...u)]}})}})}),Et({},r)}});function En(e,n,t,o,a,r){return ht(),wt(xn,{modelValue:a.dialog,"onUpdate:modelValue":n[1]||(n[1]=i=>a.dialog=i),persistent:"",width:"auto"},{activator:W(({props:i})=>[E(ce,L({class:"bg-red ma-4"},i),{default:W(()=>[G(U(t.buttonOpenText),1)]),_:2},1040)]),default:W(()=>[E(Dt,{class:"pa-2"},{default:W(()=>[E(Bt,{class:"text-h5"},{default:W(()=>[G(U(t.title),1)]),_:1}),E(Lt,null,{default:W(()=>[G(U(t.description),1)]),_:1}),E(Mt,null,{default:W(()=>[E(Wt),E(ce,{variant:"text",onClick:n[0]||(n[0]=i=>a.dialog=!1)},{default:W(()=>[G(U(t.buttonKoText),1)]),_:1}),E(ce,{class:"bg-red",variant:"text",onClick:r.agree},{default:W(()=>[G(U(t.buttonOkText),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}const Cn=yt(qt,[["render",En]]);export{Cn as M,jt as V,on as a,De as b,Nt as g,Ze as m,Ge as u};