import{ad as W,ae as D,af as q,ag as A,p as F,Q as j,l as G,S as H,e as J,c as m,r as K,U as L,q as i,_ as E,v as r,H as s,F as v,G as _,z as f,x as o,L as b,I as y,J as T,w as S,y as I,K as p,E as Q,B as X}from"./index-096889f3.js";import{I as Y}from"./Item-ae752ac2.js";import{V as Z,a as $}from"./VList-330c3551.js";import{b as M,V,a as C,c as ee}from"./VRow-33ca2d49.js";import{b as te,V as ie,c as oe}from"./VCard-0cb8d89e.js";import{n as ne,o as w,p as U}from"./VBtn-9acc2f64.js";import{V as re}from"./VImg-ac69a4dc.js";import{m as le,u as se,a as B}from"./VOverlay-bfeedc33.js";import{f as ae}from"./forwardRefs-e658ad70.js";import{C as ce}from"./Collection-682a4539.js";import{I as de,g as ue}from"./ItemType-548fac8d.js";import{V as me}from"./VBreadcrumbs-0b3069eb.js";import"./index-983975e5.js";import"./ssrBoot-1b1fcea9.js";const fe={props:{idCollection:{type:Number,required:!0},idUser:{type:Number,required:!0},idItemType:{type:Number,required:!0}},data(){return{loading:!1,items:[],isMobile:!1,coverUrlSmall:W,coverUrlBig:D}},methods:{checkWindowSize(){this.isMobile=window.innerWidth<=768},randomIcon(){return q()},randomColor(){return A().name},async fetchItems(){this.loading=!0;try{this.items=await Y.fetch(this.idUser,null,this.idCollection)}catch(e){console.error(e)}finally{this.loading=!1}}},async mounted(){this.items=[],await this.fetchItems(),this.checkWindowSize(),window.addEventListener("resize",this.checkWindowSize)},beforeUnmount(){window.removeEventListener("resize",this.checkWindowSize)}};const pe=F({id:String,text:String,...j(le({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),he=G()({name:"VTooltip",props:pe(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a;const d=H(e,"modelValue"),{scopeId:t}=se(),u=J(),n=m(()=>e.id||`v-tooltip-${u}`),c=K(),z=m(()=>e.location.split(" ").length>1?e.location:e.location+" center"),N=m(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),P=m(()=>e.transition?e.transition:d.value?"scale-transition":"fade-transition"),R=m(()=>L({"aria-describedby":n.value},e.activatorProps));return ne(()=>{const O=B.filterProps(e);return i(B,L({ref:c,class:["v-tooltip",e.class],style:e.style,id:n.value},O,{modelValue:d.value,"onUpdate:modelValue":h=>d.value=h,transition:P.value,absolute:!0,location:z.value,origin:N.value,persistent:!0,role:"tooltip",activatorProps:R.value,_disableGlobalStack:!0},t),{activator:l.activator,default:function(){var x;for(var h=arguments.length,k=new Array(h),g=0;g<h;g++)k[g]=arguments[g];return((x=l.default)==null?void 0:x.call(l,...k))??e.text}})}),ae({},c)}}),ge={key:0},ve={key:1};function _e(e,a,l,d,t,u){return r(),s(y,null,[v(f("p",null,"La colección está vacía.",512),[[_,t.items.length<1]]),l.idItemType!=1?(r(),s("div",ge,[v(i(Z,{lines:"two"},{default:o(()=>[(r(!0),s(y,null,T(t.items,n=>(r(),S($,{key:n.id,title:n.title},{prepend:o(()=>[i(te,{color:u.randomColor(),icon:u.randomIcon()},null,8,["color","icon"])]),append:o(()=>[i(w,{color:"grey-lighten-1",icon:"mdi-information",variant:"text",onClick:c=>e.$router.push({name:"Item",params:{id:n.id}})},null,8,["onClick"])]),_:2},1032,["title"]))),128))]),_:1},512),[[_,t.items.length>0&&l.idItemType!=1]])])):b("",!0),l.idItemType===1?(r(),s("div",ve,[i(M,{fluid:""},{default:o(()=>[i(V,{dense:""},{default:o(()=>[(r(!0),s(y,null,T(t.items,n=>(r(),S(C,{key:n.id,cols:t.isMobile?4:3},{default:o(()=>[i(ie,{height:t.isMobile?"100px":"280px",onClick:c=>e.$router.push({name:"Item",params:{id:n.id}})},{default:o(()=>[i(re,{src:(t.isMobile?t.coverUrlSmall:t.coverUrlBig)+n.cover,height:t.isMobile?"100px":"200px",cover:""},null,8,["src","height"]),v(i(oe,null,{default:o(()=>[I(p(n.title),1)]),_:2},1536),[[_,!t.isMobile]]),v(i(he,{activator:"parent",location:"top"},{default:o(()=>[I(p(n.title),1)]),_:2},1536),[[_,t.isMobile]])]),_:2},1032,["height","onClick"])]),_:2},1032,["cols"]))),128))]),_:1})]),_:1})])):b("",!0)],64)}const ye=E(fe,[["render",_e]]),Ve={components:{ItemList:ye},data(){var e;return{id:parseInt(this.$route.params.id+""),idUser:parseInt(((e=Q())==null?void 0:e.id)+""),loading:!0,items:[],collection:{},itemTypes:de,itemTypeLabel:"",picture:""}},methods:{async fetchCollection(){this.loading=!0;try{const e=await ce.fetch(this.idUser,this.id);this.collection=e[0]}catch(e){console.error(e)}finally{this.loading=!1}}},async mounted(){await this.fetchCollection(),this.itemTypeLabel=ue(this.collection.iditemtype)}},Ce={key:0},be=f("h1",null,"cargando...",-1),Ie=[be],we={key:1},ke={class:"text-h4 font-weight-bold text-center"},xe={class:"ma-2"},Le={class:"ma-2"};function Te(e,a,l,d,t,u){const n=X("ItemList");return r(),s(y,null,[t.loading?(r(),s("div",Ce,Ie)):b("",!0),t.loading?b("",!0):(r(),s("div",we,[i(me,{items:["Colecciones",t.collection.name]},null,8,["items"]),i(M,null,{default:o(()=>[i(ee,{class:"text-center"},{default:o(()=>[i(V,{class:"d-flex align-center justify-center"},{default:o(()=>[i(C,null,{default:o(()=>[f("h1",ke,p(t.collection.name),1),f("p",xe,p(t.collection.itemscount)+" ítems",1),f("p",Le,p(t.itemTypeLabel),1),i(w,{onClick:a[0]||(a[0]=c=>e.$router.push({name:"ItemNew",params:{idCollection:t.collection.id}})),class:"bg-amber mt-2"},{default:o(()=>[i(U,{icon:"mdi-plus",size:"large",start:""}),I(" Nuevo item ")]),_:1})]),_:1})]),_:1}),i(V,{justify:"center"},{default:o(()=>[i(C,null,{default:o(()=>[i(n,{"id-item-type":t.collection.iditemtype,"id-collection":t.id,"id-user":t.idUser},null,8,["id-item-type","id-collection","id-user"])]),_:1})]),_:1}),i(V,{justify:"center"},{default:o(()=>[i(C,null,{default:o(()=>[i(w,{onClick:a[1]||(a[1]=c=>e.$router.push({name:"CollectionEdit",params:{id:t.collection.id}})),class:"bg-amber mt-4"},{default:o(()=>[i(U,{icon:"mdi-pencil",size:"large"}),I(" Editar ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))],64)}const Fe=E(Ve,[["render",Te]]);export{Fe as default};