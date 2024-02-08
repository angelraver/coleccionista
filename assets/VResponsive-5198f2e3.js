import{cj as i,p as d,l as f,D as T,q as u,ck as y,aH as m,c as v,b5 as j}from"./index-db27683a.js";import{a as g,e as C,n as p,C as B,D as G}from"./VBtn-8f6a8530.js";async function X(t,n){let e=`${i}${t}`;return n.forEach(function(o){e=`${e}/${o}`}),await(await fetch(e,{method:"get"})).json()}async function Z(t,n){return await(await fetch(`${i}${t}`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}async function tt(t,n){return await(await fetch(`${i}${t}`,{method:"POST",body:n})).json()}async function et(t,n){return await(await fetch(`${i}${t}`,{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}async function nt(t,n){return await(await fetch(`${i}${t}`,{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}const I=d({fluid:{type:Boolean,default:!1},...g(),...C()},"VContainer"),st=f()({name:"VContainer",props:I(),setup(t,n){let{slots:e}=n;const{rtlClasses:s}=T();return p(()=>u(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},s.value,t.class],style:t.style},e)),{}}}),N=(()=>y.reduce((t,n)=>(t[n]={type:[Boolean,String,Number],default:!1},t),{}))(),w=(()=>y.reduce((t,n)=>{const e="offset"+m(n);return t[e]={type:[String,Number],default:null},t},{}))(),k=(()=>y.reduce((t,n)=>{const e="order"+m(n);return t[e]={type:[String,Number],default:null},t},{}))(),h={col:Object.keys(N),offset:Object.keys(w),order:Object.keys(k)};function U(t,n,e){let s=t;if(!(e==null||e===!1)){if(n){const a=n.replace(t,"");s+=`-${a}`}return t==="col"&&(s="v-"+s),t==="col"&&(e===""||e===!0)||(s+=`-${e}`),s.toLowerCase()}}const D=["auto","start","end","center","baseline","stretch"],F=d({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...w,order:{type:[String,Number],default:null},...k,alignSelf:{type:String,default:null,validator:t=>D.includes(t)},...g(),...C()},"VCol"),at=f()({name:"VCol",props:F(),setup(t,n){let{slots:e}=n;const s=v(()=>{const a=[];let o;for(o in h)h[o].forEach(l=>{const c=t[l],V=U(o,l,c);V&&a.push(V)});const r=a.some(l=>l.startsWith("v-col-"));return a.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),a});return()=>{var a;return j(t.tag,{class:[s.value,t.class],style:t.style},(a=e.default)==null?void 0:a.call(e))}}}),S=["start","end","center"],P=["space-between","space-around","space-evenly"];function b(t,n){return y.reduce((e,s)=>{const a=t+m(s);return e[a]=n(),e},{})}const J=[...S,"baseline","stretch"],L=t=>J.includes(t),R=b("align",()=>({type:String,default:null,validator:L})),M=[...S,...P],A=t=>M.includes(t),E=b("justify",()=>({type:String,default:null,validator:A})),K=[...S,...P,"stretch"],O=t=>K.includes(t),_=b("alignContent",()=>({type:String,default:null,validator:O})),$={align:Object.keys(R),justify:Object.keys(E),alignContent:Object.keys(_)},x={align:"align",justify:"justify",alignContent:"align-content"};function z(t,n,e){let s=x[t];if(e!=null){if(n){const a=n.replace(t,"");s+=`-${a}`}return s+=`-${e}`,s.toLowerCase()}}const q=d({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:L},...R,justify:{type:String,default:null,validator:A},...E,alignContent:{type:String,default:null,validator:O},..._,...g(),...C()},"VRow"),ot=f()({name:"VRow",props:q(),setup(t,n){let{slots:e}=n;const s=v(()=>{const a=[];let o;for(o in $)$[o].forEach(r=>{const l=t[r],c=z(o,r,l);c&&a.push(c)});return a.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),a});return()=>{var a;return j(t.tag,{class:["v-row",s.value,t.class],style:t.style},(a=e.default)==null?void 0:a.call(e))}}});function H(t){return{aspectStyles:v(()=>{const n=Number(t.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const W=d({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...g(),...B()},"VResponsive"),lt=f()({name:"VResponsive",props:W(),setup(t,n){let{slots:e}=n;const{aspectStyles:s}=H(t),{dimensionStyles:a}=G(t);return p(()=>{var o;return u("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[a.value,t.style]},[u("div",{class:"v-responsive__sizer",style:s.value},null),(o=e.additional)==null?void 0:o.call(e),e.default&&u("div",{class:["v-responsive__content",t.contentClass]},[e.default()])])}),{}}});export{ot as V,at as a,st as b,lt as c,et as d,nt as e,tt as f,X as g,W as m,Z as p};
