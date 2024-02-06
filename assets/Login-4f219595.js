import{p as I,b as g,a as m,V as u}from"./VRow-c0a7ebda.js";import{p as L,a0 as j,m as z,l as E,S as M,c as v,C as N,t as O,R as $,q as l,U as G,_ as H,v as Q,w as J,x as o,F as K,G as W}from"./index-bd743e3f.js";import{c as X,V as Y}from"./VImg-91d306b2.js";import{V as Z}from"./VForm-e1bd1189.js";import{V as p}from"./VTextField-87f0aff2.js";import{a as ee,b as le,C as te,c as ae,M as se,N as oe,d as ne,e as re,s as ie,x as ue,i as de,D as ce,j as me,P as ve,Q as fe,k as ye,q as Ve,B as ge,p as pe,r as b,o as k}from"./VBtn-4cad1b59.js";import"./forwardRefs-e658ad70.js";import"./index-0659ef7c.js";const be=async(e,s)=>await I("/login",{user:e,password:s}),ke={login:be},Ce={data(){return{loginFail:!1,loading:!1,valid:!1,user:"",userRules:[e=>e?!0:"User is required."],password:"",passwordRules:[e=>e.length<1?"Password is required.":!0]}},methods:{async login(){if(this.valid){this.loginFail=!1,this.loading=!0;try{const e=await ke.login(this.user,this.password);e.iduser?(document.cookie=`iduser=${e.iduser}`,this.$router.push({name:"Home"})):this.loginFail=!0}catch(e){console.error(e)}finally{this.loading=!1}}}}},_e="/coleccionista/assets/logo-s-97920e51.png";const Pe=X("v-alert-title"),he=["success","info","warning","error"],we=L({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:j,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>he.includes(e)},...ee(),...le(),...te(),...ae(),...se(),...oe(),...ne(),...re(),...z(),...ie({variant:"flat"})},"VAlert"),xe=E()({name:"VAlert",props:we(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{emit:d,slots:t}=s;const a=M(e,"modelValue"),r=v(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),n=v(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:C}=N(e),{colorClasses:_,colorStyles:P,variantClasses:h}=ue(n),{densityClasses:w}=de(e),{dimensionStyles:x}=ce(e),{elevationClasses:S}=me(e),{locationStyles:B}=ve(e),{positionClasses:F}=fe(e),{roundedClasses:D}=ye(e),{textColorClasses:R,textColorStyles:T}=Ve(O(e,"borderColor")),{t:U}=$(),f=v(()=>({"aria-label":U(e.closeLabel),onClick(c){a.value=!1,d("click:close",c)}}));return()=>{const c=!!(t.prepend||r.value),q=!!(t.title||e.title),A=!!(t.close||e.closable);return a.value&&l(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},C.value,_.value,w.value,S.value,F.value,D.value,h.value,e.class],style:[P.value,x.value,B.value,e.style],role:"alert"},{default:()=>{var y,V;return[ge(!1,"v-alert"),e.border&&l("div",{key:"border",class:["v-alert__border",R.value],style:T.value},null),c&&l("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?l(b,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},t.prepend):l(pe,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),l("div",{class:"v-alert__content"},[q&&l(Pe,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),((y=t.text)==null?void 0:y.call(t))??e.text,(V=t.default)==null?void 0:V.call(t)]),t.append&&l("div",{key:"append",class:"v-alert__append"},[t.append()]),A&&l("div",{key:"close",class:"v-alert__close"},[t.close?l(b,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var i;return[(i=t.close)==null?void 0:i.call(t,{props:f.value})]}}):l(k,G({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},f.value),null)])]}})}}});function Se(e,s,d,t,a,r){return Q(),J(g,{fluid:"","fill-height":""},{default:o(()=>[l(u,{justify:"center"},{default:o(()=>[l(m,{cols:"12",sm:"4",md:"8"},{default:o(()=>[l(Y,{height:"300",src:_e}),l(Z,{modelValue:a.valid,"onUpdate:modelValue":s[3]||(s[3]=n=>a.valid=n)},{default:o(()=>[l(g,null,{default:o(()=>[l(u,null,{default:o(()=>[l(m,null,{default:o(()=>[l(p,{modelValue:a.user,"onUpdate:modelValue":s[0]||(s[0]=n=>a.user=n),rules:a.userRules,label:"Usuario",required:"","hide-details":""},null,8,["modelValue","rules"])]),_:1})]),_:1}),l(u,null,{default:o(()=>[l(m,null,{default:o(()=>[l(p,{modelValue:a.password,"onUpdate:modelValue":s[1]||(s[1]=n=>a.password=n),rules:a.passwordRules,label:"Password",required:"",password:"",type:"password","hide-details":""},null,8,["modelValue","rules"])]),_:1})]),_:1}),l(u,null,{default:o(()=>[K(l(xe,{text:"Usuario o password equivocados.",type:"error"},null,512),[[W,a.loginFail]])]),_:1}),l(u,{justify:"center"},{default:o(()=>[l(k,{text:"Login",disabled:a.loading,onClick:s[2]||(s[2]=n=>r.login()),color:"amber"},null,8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const Ie=H(Ce,[["render",Se]]);export{Ie as default};
