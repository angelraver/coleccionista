import{_ as n,E as d,F as m,G as s,m as o,J as c}from"./index-f3e10714.js";import{V as f,a}from"./VTextField-bad3a3b2.js";import{a as V,b as i,c as p,V as h}from"./VRow-8fe2adbe.js";import"./VIcon-3745d27b.js";import"./index-9447bec8.js";const y={data(){return{loading:!1,items:[],valid:!1,title:"",titleRules:[e=>e?!0:"Name is required."],year:"",yearRules:[e=>e?!0:"Name is required."]}},async created(){console.log("fetchItems"),await this.fetchItems()},methods:{async fetchItems(){this.loading=!0;try{const e=await fetch("http://localhost:8001/item");this.items=await e.json()}catch(e){console.log("FAIL!"),console.error(e)}finally{this.loading=!1}},async save(){console.log("save!")}}},g=c("h1",{class:"text-h4 font-weight-bold"},"Agregar a [colecction]",-1);function x(e,t,_,v,l,u){return d(),m(f,{modelValue:l.valid,"onUpdate:modelValue":t[3]||(t[3]=r=>l.valid=r)},{default:s(()=>[g,o(h,null,{default:s(()=>[o(V,null,{default:s(()=>[o(i,{cols:"6"},{default:s(()=>[o(a,{modelValue:l.title,"onUpdate:modelValue":t[0]||(t[0]=r=>l.title=r),rules:l.titleRules,counter:10,label:"Título",required:"","hide-details":""},null,8,["modelValue","rules"])]),_:1}),o(i,{cols:"2"},{default:s(()=>[o(a,{modelValue:l.year,"onUpdate:modelValue":t[1]||(t[1]=r=>l.year=r),rules:l.yearRules,counter:10,label:"Año",required:"","hide-details":""},null,8,["modelValue","rules"])]),_:1})]),_:1}),o(p,{text:"Guardar",onClick:t[2]||(t[2]=r=>u.save())})]),_:1})]),_:1},8,["modelValue"])}const q=n(y,[["render",x]]);export{q as default};