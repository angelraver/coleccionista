import{a as p,n as b}from"./VBtn-5c1037b7.js";import{b as v,c as F}from"./VTextField-f3aa5c09.js";import{f as V}from"./forwardRefs-e658ad70.js";import{p as y,l as h,r as R,q as P}from"./index-573eb4f5.js";const k=y({...p(),...v()},"VForm"),q=h()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=F(r),s=R();function l(t){t.preventDefault(),a.reset()}function u(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return b(()=>{var t;return P("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,s)}});export{q as V};
