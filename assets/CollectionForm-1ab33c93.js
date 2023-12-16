import{E as b,_ as C,B as g,v as V,H as T,q as e,x as l,I as x,z as h,K as p,F as m,G as d,y as _}from"./index-573eb4f5.js";import{C as c}from"./Collection-fb203b04.js";import{I,g as v}from"./VAvatar-756a34bc.js";import{M as w}from"./ModalConfirm-633c5798.js";import{V as U}from"./VBreadcrumbs-c0c85e9c.js";import{b as E,V as a,a as r}from"./VRow-47c118a5.js";import{V as j}from"./VTextField-f3aa5c09.js";import{V as B}from"./VSelect-ab9df90b.js";import{o as f}from"./VBtn-5c1037b7.js";import"./forwardRefs-e658ad70.js";import"./VCard-0ce01423.js";import"./index-7d3b2192.js";import"./VList-aa8fd6b1.js";import"./ssrBoot-22dd81ae.js";const N={components:{ModalConfirm:w},data(){var t;return{id:parseInt(this.$route.params.id+""),idUser:parseInt(((t=b())==null?void 0:t.id)+""),collection:{},title:"Crear nueva colección",breadcrumb:[],loading:!1,valid:!1,selectedItemType:null,name:"",itemTypeLabel:"",itemTypes:I.map(({id:s,name:u})=>({id:s,title:u}))}},methods:{save(){this.id?this.update():this.create()},async create(){this.loading=!0;try{const t=await c.create(this.idUser,this.name,parseInt(this.selectedItemType+""));this.$router.push({name:"CollectionDetail",params:{id:t.id}})}catch(t){console.error(t)}finally{this.loading=!1}},async update(){this.loading=!0;try{await c.update(this.id,this.idUser,this.name),this.$router.push({name:"CollectionDetail",params:{id:this.id}})}catch(t){console.error(t)}finally{this.loading=!1}},async del(){this.loading=!0;try{await c.remove(this.id,this.idUser),this.$router.push({name:"Home"})}catch(t){console.error(t)}finally{this.loading=!1}},async fetchCollection(){this.loading=!0;try{const t=await c.fetch(this.idUser,this.id);this.collection=t[0],this.name=this.collection.name}catch(t){console.error(t)}finally{this.loading=!1}},cancel(){this.id?this.$router.push({name:"CollectionDetail",params:{id:this.id}}):this.$router.push({name:"Home"})}},computed:{idValid(){return this.id?this.name.length>0:this.name.length>0&&!!this.selectedItemType&&parseInt(this.selectedItemType+"")>0}},async mounted(){this.id?(this.title="Editar colección",await this.fetchCollection(),this.itemTypeLabel=v(this.collection.iditemtype),this.breadcrumb=["Colecciones",this.collection.name,"Editar"]):this.breadcrumb=["Colecciones","Nueva"]}},k={class:"text-h4 font-weight-bold text-center"};function D(t,s,u,F,i,n){const y=g("ModalConfirm");return V(),T(x,null,[e(U,{items:i.breadcrumb},null,8,["items"]),e(E,null,{default:l(()=>[e(a,{justify:"center"},{default:l(()=>[e(r,{cols:"18"},{default:l(()=>[h("h1",k,p(i.title),1)]),_:1})]),_:1}),e(a,{justify:"center"},{default:l(()=>[e(r,{cols:"8"},{default:l(()=>[e(j,{modelValue:i.name,"onUpdate:modelValue":s[0]||(s[0]=o=>i.name=o),label:i.id?"Nombre actual":"Nombre",required:"","hide-details":""},null,8,["modelValue","label"])]),_:1})]),_:1}),m(e(a,{class:"justify-center"},{default:l(()=>[e(r,{cols:"8",class:"text-center"},{default:l(()=>[_(p(i.itemTypeLabel),1)]),_:1})]),_:1},512),[[d,i.id]]),m(e(a,{justify:"center"},{default:l(()=>[e(r,{cols:"8"},{default:l(()=>[e(B,{modelValue:i.selectedItemType,"onUpdate:modelValue":s[1]||(s[1]=o=>i.selectedItemType=o),items:i.itemTypes,"item-text":"name","item-value":"id",label:"Tipo de item"},null,8,["modelValue","items"])]),_:1})]),_:1},512),[[d,!i.id]]),e(a,{justify:"center"},{default:l(()=>[e(r,{cols:"auto"},{default:l(()=>[m(h("span",null,[e(y,{buttonOpenText:"Eliminar",buttonOkText:"Eliminar",buttonKoText:"Cancelar",title:`Confirma que deseas eliminar ${i.name}`,description:`La colección ${i.name} será eliminada junto con los ${i.collection.itemscount} elementos que contiene.`,onAgree:n.del},null,8,["title","description","onAgree"])],512),[[d,i.id]]),e(f,{text:"Cancelar",onClick:s[2]||(s[2]=o=>n.cancel()),class:"ma-4"}),e(f,{text:"Guardar",onClick:s[3]||(s[3]=o=>n.save()),class:"bg-green ma-4",disabled:!n.idValid},null,8,["disabled"])]),_:1})]),_:1})]),_:1})],64)}const W=C(N,[["render",D]]);export{W as default};
