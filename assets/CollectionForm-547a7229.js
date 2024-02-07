import{E as V,_ as b,B as S,v as C,H as g,q as e,x as l,I as T,z as p,K as h,F as d,G as c,y as x}from"./index-096889f3.js";import{C as u}from"./Collection-682a4539.js";import{I as G,g as v}from"./ItemType-548fac8d.js";import{M as P}from"./ModalConfirm-fcc11061.js";import{V as _}from"./VBreadcrumbs-0b3069eb.js";import{b as N,V as o,a as s}from"./VRow-33ca2d49.js";import{V as w}from"./VTextField-f27b48a8.js";import{V as f}from"./VSelect-337d7412.js";import{o as y}from"./VBtn-9acc2f64.js";import"./VOverlay-bfeedc33.js";import"./forwardRefs-e658ad70.js";import"./VImg-ac69a4dc.js";import"./VCard-0cb8d89e.js";import"./index-983975e5.js";import"./VList-330c3551.js";import"./ssrBoot-1b1fcea9.js";const D=[{id:52,name:"Arcade"},{id:59,name:"Atari 2600"},{id:61,name:"Atari Lynx"},{id:23,name:"Dreamcast"},{id:99,name:"Family Computer"},{id:33,name:"Game Boy"},{id:24,name:"Game Boy Advance"},{id:22,name:"Game Boy Color"},{id:137,name:"New Nintendo 3DS"},{id:37,name:"Nintendo 3DS"},{id:4,name:"Nintendo 64"},{id:20,name:"Nintendo DS"},{id:159,name:"Nintendo DSi"},{id:18,name:"Nintendo Entertainment System"},{id:21,name:"Nintendo GameCube"},{id:130,name:"Nintendo Switch"},{id:72,name:"Ouya"},{id:7,name:"PlayStation"},{id:8,name:"PlayStation 2"},{id:9,name:"PlayStation 3"},{id:48,name:"PlayStation 4"},{id:167,name:"PlayStation 5"},{id:38,name:"PlayStation Portable"},{id:46,name:"PlayStation Vita"},{id:35,name:"Sega Game Gear"},{id:64,name:"Sega Master System/Mark III"},{id:29,name:"Sega Mega Drive/Genesis"},{id:32,name:"Sega Saturn"},{id:58,name:"Super Famicom"},{id:19,name:"Super Nintendo Entertainment System"},{id:415,name:"Watara/QuickShot Supervision"},{id:5,name:"Wii"},{id:41,name:"Wii U"},{id:57,name:"WonderSwan"},{id:123,name:"WonderSwan Color"},{id:11,name:"Xbox"},{id:12,name:"Xbox 360"},{id:49,name:"Xbox One"},{id:169,name:"Xbox Series X|S"}],E={components:{ModalConfirm:P},data(){var a;return{id:parseInt(this.$route.params.id+""),idUser:parseInt(((a=V())==null?void 0:a.id)+""),collection:{},title:"Crear nueva colección",breadcrumb:[],loading:!1,valid:!1,name:"",selectedIdItemType:null,itemTypeLabel:"",itemTypes:G.map(({id:i,name:r})=>({id:i,title:r})),videoGamePlatforms:D.slice().sort((i,r)=>i.name.localeCompare(r.name)).map(({id:i,name:r})=>({id:i,title:r})),selectedIdVideoGamePlatform:null}},methods:{save(){this.id?this.update():this.create()},async create(){this.loading=!0;try{const a=await u.create(this.idUser,this.name,parseInt(this.selectedIdItemType+""),parseInt(this.selectedIdVideoGamePlatform+""));this.$router.push({name:"CollectionDetail",params:{id:a.id}})}catch(a){console.error(a)}finally{this.loading=!1}},async update(){this.loading=!0;try{await u.update(this.id,this.idUser,this.name,parseInt(this.selectedIdVideoGamePlatform+"")),this.$router.push({name:"CollectionDetail",params:{id:this.id}})}catch(a){console.error(a)}finally{this.loading=!1}},async del(){this.loading=!0;try{await u.remove(this.id,this.idUser),this.$router.push({name:"Home"})}catch(a){console.error(a)}finally{this.loading=!1}},async fetchCollection(){this.loading=!0;try{const a=await u.fetch(this.idUser,this.id);this.collection=a[0],this.name=this.collection.name,this.selectedIdItemType=this.collection.iditemtype,this.selectedIdVideoGamePlatform=this.collection.idplatform||0}catch(a){console.error(a)}finally{this.loading=!1}},cancel(){this.id?this.$router.push({name:"CollectionDetail",params:{id:this.id}}):this.$router.push({name:"Home"})}},computed:{idValid(){return this.id?this.name.length>0:this.name.length>0&&!!this.selectedIdItemType&&parseInt(this.selectedIdItemType+"")>0},isTypeVideoGame(){return!!this.selectedIdItemType&&this.selectedIdItemType===1}},async mounted(){this.id?(this.title="Editar colección",await this.fetchCollection(),this.itemTypeLabel=v(this.collection.iditemtype),this.breadcrumb=["Colecciones",this.collection.name,"Editar"]):this.breadcrumb=["Colecciones","Nueva"],this.videoGamePlatforms=[{id:0,title:"Ninguna"},...this.videoGamePlatforms]}},U={class:"text-h4 font-weight-bold text-center"};function B(a,i,r,M,t,m){const I=S("ModalConfirm");return C(),g(T,null,[e(_,{items:t.breadcrumb},null,8,["items"]),e(N,null,{default:l(()=>[e(o,{justify:"center"},{default:l(()=>[e(s,{cols:"18"},{default:l(()=>[p("h1",U,h(t.title),1)]),_:1})]),_:1}),e(o,{justify:"center"},{default:l(()=>[e(s,{cols:"8"},{default:l(()=>[e(w,{modelValue:t.name,"onUpdate:modelValue":i[0]||(i[0]=n=>t.name=n),label:t.id?"Nombre actual":"Nombre",required:"","hide-details":""},null,8,["modelValue","label"])]),_:1})]),_:1}),d(e(o,{class:"justify-center"},{default:l(()=>[e(s,{cols:"8",class:"text-center"},{default:l(()=>[x(h(t.itemTypeLabel),1)]),_:1})]),_:1},512),[[c,t.id]]),d(e(o,{justify:"center"},{default:l(()=>[e(s,{cols:"8"},{default:l(()=>[e(f,{modelValue:t.selectedIdItemType,"onUpdate:modelValue":i[1]||(i[1]=n=>t.selectedIdItemType=n),items:t.itemTypes,"item-text":"name","item-value":"id",label:"Tipo de item"},null,8,["modelValue","items"])]),_:1})]),_:1},512),[[c,!t.id]]),d(e(o,{justify:"center"},{default:l(()=>[e(s,{cols:"8"},{default:l(()=>[e(f,{modelValue:t.selectedIdVideoGamePlatform,"onUpdate:modelValue":i[2]||(i[2]=n=>t.selectedIdVideoGamePlatform=n),items:t.videoGamePlatforms,"item-text":"name","item-value":"id",label:"Plataforma"},null,8,["modelValue","items"])]),_:1})]),_:1},512),[[c,m.isTypeVideoGame]]),e(o,{justify:"center"},{default:l(()=>[e(s,{cols:"auto"},{default:l(()=>[e(y,{text:"Guardar",onClick:i[3]||(i[3]=n=>m.save()),class:"bg-amber ma-2",disabled:!m.idValid},null,8,["disabled"])]),_:1})]),_:1}),e(o,{justify:"center"},{default:l(()=>[e(s,{cols:"auto"},{default:l(()=>[d(p("span",null,[e(I,{buttonOpenText:"Eliminar",buttonOkText:"Eliminar",buttonKoText:"Cancelar",title:"Confirma que deseas eliminar",description:`La colección ${t.name} será eliminada junto con los ${t.collection.itemscount} elementos que contiene.`,onAgree:m.del},null,8,["description","onAgree"])],512),[[c,t.id]]),e(y,{text:"Cancelar",onClick:i[4]||(i[4]=n=>m.cancel()),class:"ma-2"})]),_:1})]),_:1})]),_:1})],64)}const Z=b(E,[["render",B]]);export{Z as default};