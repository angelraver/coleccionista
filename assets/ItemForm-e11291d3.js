import{p as xe,r as H,c as j,M as X,N as Be,O as ge,P as Ye,Q as ze,l as He,R as Je,s as Z,S as fe,T as he,q as l,J as D,U as se,V as Qe,y as ke,W as We,X as be,Y as Ce,Z as Xe,_ as le,B as S,v,F as E,w as A,G as k,x as r,z as K,L as $,$ as Ze,K as $e,H as we,I as Te,E as et}from"./index-db27683a.js";import{C as tt}from"./Collection-fd8c5ba8.js";import{I as N}from"./Item-346a1c75.js";import{g as lt,b as ee,c as ue,V as C,a as I}from"./VResponsive-5198f2e3.js";import{L as ie}from"./Loading-4a342d08.js";import{V as it}from"./VForm-374b2607.js";import{m as at,u as nt,a as rt,b as ot,c as st,d as ut}from"./VSelect-8df28a13.js";import{m as ct,u as dt,V as te}from"./VTextField-d5e2cced.js";import{q as mt,n as ft,p as ye,r as ht,o as B}from"./VBtn-8f6a8530.js";import{f as gt}from"./forwardRefs-e658ad70.js";import{u as yt,V as vt,a as Ie}from"./VList-a91dc6f2.js";import{m as pt,V as _t}from"./VImg-f8fb2e3d.js";import{V as bt,g as Se,b as Ve}from"./VCard-a7df12e0.js";import{M as ve}from"./ModalConfirm-98726395.js";import{V as Ct}from"./VBreadcrumbs-9858da69.js";import"./VOverlay-fd81bb0a.js";import"./index-bb16fa6e.js";import"./ssrBoot-f8ed2b0d.js";function It(e){const i=e*1e3;return new Date(i).getFullYear()}const Vt=async(e,i)=>{try{return await(await lt("/games",[e,i+""])).map(d=>({id:d.id,title:d.name,year:It(d.first_release_date)}))}catch(t){console.error(t)}},xt={fetch:Vt},kt={components:{Loading:ie},props:{nameCollection:{type:String,required:!0},idCollection:{type:Number,required:!0},idItemType:{type:Number,required:!0},idPlatform:{type:Number,required:!0},idUser:{type:Number,required:!0}},data(){return{item:{},loading:!1,gameOptionSelected:null,gameTypedString:"",igdbGameList:[],igdbGame:{}}},computed:{isValid(){return!!this.igdbGame.title&&this.igdbGame.title.length>0}},methods:{async create(){this.loading=!0;const e={idcollection:this.idCollection,iditemtype:this.idItemType,iduser:this.idUser,title:this.igdbGame.titleSimple+"",idigdb:this.igdbGame.id,year:this.igdbGame.year};try{const i=await N.create(e);this.$emit("refreshTrigger",i),this.$router.push({name:"ItemEdit",params:{id:i}})}catch(i){console.error(i)}finally{this.loading=!1}},async fetchIgdbGames(e){this.loading=!0;try{const i=await xt.fetch(e,this.idPlatform);this.igdbGameList=i.map(t=>({id:t.id,title:`${t.title} (${t.year})`,titleSimple:t.title,author:"",year:t.year}))}catch(i){console.error(i)}finally{this.loading=!1}},async handleGameSelected(e){this.gameOptionSelected=e;const i=this.igdbGameList.find(({id:t})=>t===e);this.igdbGame=i?JSON.parse(JSON.stringify(i,null,2)):{}},async handleGameInput(e){e.data?this.gameTypedString=this.gameTypedString+e.data:this.gameTypedString=this.gameTypedString.substring(0,this.gameTypedString.length-1),this.gameTypedString.length>3&&await this.fetchIgdbGames(this.gameTypedString)},clearGameInput(){this.gameTypedString=""}}};const wt=(e,i,t)=>e==null||i==null?-1:e.toString().toLocaleLowerCase().indexOf(i.toString().toLocaleLowerCase()),Tt=xe({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function St(e,i,t){var p;const d=[],a=(t==null?void 0:t.default)??wt,o=t!=null&&t.filterKeys?ge(t.filterKeys):!1,g=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return d;e:for(let c=0;c<e.length;c++){const[m,T=m]=ge(e[c]),f={},s={};let V=-1;if(i&&!(t!=null&&t.noFilter)){if(typeof m=="object"){const J=o||Object.keys(T);for(const G of J){const ae=Ye(T,G,T),Q=(p=t==null?void 0:t.customKeyFilter)==null?void 0:p[G];if(V=Q?Q(ae,i,m):a(ae,i,m),V!==-1&&V!==!1)Q?f[G]=V:s[G]=V;else if((t==null?void 0:t.filterMode)==="every")continue e}}else V=a(m,i,m),V!==-1&&V!==!1&&(s.title=V);const M=Object.keys(s).length,F=Object.keys(f).length;if(!M&&!F||(t==null?void 0:t.filterMode)==="union"&&F!==g&&!M||(t==null?void 0:t.filterMode)==="intersection"&&(F!==g||!M))continue}d.push({index:c,matches:{...s,...f}})}return d}function Ft(e,i,t,d){const a=H([]),o=H(new Map),g=j(()=>d!=null&&d.transform?X(i).map(c=>[c,d.transform(c)]):X(i));Be(()=>{const c=typeof t=="function"?t():X(t),m=typeof c!="string"&&typeof c!="number"?"":String(c),T=St(g.value,m,{customKeyFilter:{...e.customKeyFilter,...X(d==null?void 0:d.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),f=X(i),s=[],V=new Map;T.forEach(M=>{let{index:F,matches:J}=M;const G=f[F];s.push(G),V.set(G.value,J)}),a.value=s,o.value=V});function p(c){return o.value.get(c.value)}return{filteredItems:a,filteredMatches:o,getMatches:p}}function Lt(e,i,t){if(i==null)return e;if(Array.isArray(i))throw new Error("Multiple matches is not implemented");return typeof i=="number"&&~i?l(D,null,[l("span",{class:"v-autocomplete__unmask"},[e.substr(0,i)]),l("span",{class:"v-autocomplete__mask"},[e.substr(i,t)]),l("span",{class:"v-autocomplete__unmask"},[e.substr(i+t)])]):e}const Mt=xe({autoSelectFirst:{type:[Boolean,String]},search:String,...Tt({filterKeys:["title"]}),...at(),...ze(ct({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...pt({transition:!1})},"VAutocomplete"),Ut=He()({name:"VAutocomplete",props:Mt(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:d}=Je(),a=H(),o=Z(!1),g=Z(!0),p=Z(!1),c=H(),m=H(),T=fe(e,"menu"),f=j({get:()=>T.value,set:n=>{var u;T.value&&!n&&((u=c.value)!=null&&u.ΨopenChildren)||(T.value=n)}}),s=Z(-1),V=j(()=>{var n;return(n=a.value)==null?void 0:n.color}),M=j(()=>f.value?e.closeText:e.openText),{items:F,transformIn:J,transformOut:G}=yt(e),{textColorClasses:ae,textColorStyles:Q}=mt(V),x=fe(e,"search",""),y=fe(e,"modelValue",[],n=>J(n===null?[null]:ge(n)),n=>{const u=G(n);return e.multiple?u:u[0]??null}),Y=dt(),{filteredItems:ce,getMatches:Le}=Ft(e,F,()=>g.value?"":x.value),P=j(()=>e.hideSelected?ce.value.filter(n=>!y.value.some(u=>u.value===n.value)):ce.value),Me=j(()=>y.value.map(n=>n.props.value)),ne=j(()=>{var u;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&x.value===((u=P.value[0])==null?void 0:u.title))&&P.value.length>0&&!g.value&&!p.value}),de=j(()=>e.hideNoData&&!F.value.length||e.readonly||(Y==null?void 0:Y.isReadonly.value)),me=H(),{onListScroll:Ue,onListKeydown:Ae}=nt(me,a);function Ee(n){e.openOnClear&&(f.value=!0),x.value=""}function De(){de.value||(f.value=!0)}function Ne(n){de.value||(o.value&&(n.preventDefault(),n.stopPropagation()),f.value=!f.value)}function Ge(n){var z,h,w;if(e.readonly||Y!=null&&Y.isReadonly.value)return;const u=a.value.selectionStart,_=y.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(n.key))&&n.preventDefault(),["Enter","ArrowDown"].includes(n.key)&&(f.value=!0),["Escape"].includes(n.key)&&(f.value=!1),ne.value&&["Enter","Tab"].includes(n.key)&&q(P.value[0]),n.key==="ArrowDown"&&ne.value&&((z=me.value)==null||z.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(n.key)){if(s.value<0){n.key==="Backspace"&&!x.value&&(s.value=_-1);return}const b=s.value,U=y.value[s.value];U&&!U.props.disabled&&q(U),s.value=b>=_-1?_-2:b}if(n.key==="ArrowLeft"){if(s.value<0&&u>0)return;const b=s.value>-1?s.value-1:_-1;y.value[b]?s.value=b:(s.value=-1,a.value.setSelectionRange((h=x.value)==null?void 0:h.length,(w=x.value)==null?void 0:w.length))}if(n.key==="ArrowRight"){if(s.value<0)return;const b=s.value+1;y.value[b]?s.value=b:(s.value=-1,a.value.setSelectionRange(0,0))}}}function Pe(n){x.value=n.target.value}function je(n){if(be(a.value,":autofill")||be(a.value,":-webkit-autofill")){const u=F.value.find(_=>_.title===n.target.value);u&&q(u)}}function qe(){var n;o.value&&(g.value=!0,(n=a.value)==null||n.focus())}function Oe(n){o.value=!0,setTimeout(()=>{p.value=!0})}function Re(n){p.value=!1}function Ke(n){(n==null||n===""&&!e.multiple)&&(y.value=[])}const W=Z(!1);function q(n){if(e.multiple){const u=y.value.findIndex(_=>e.valueComparator(_.value,n.value));if(u===-1)y.value=[...y.value,n];else{const _=[...y.value];_.splice(u,1),y.value=_}}else y.value=[n],W.value=!0,x.value=n.title,f.value=!1,g.value=!0,Ce(()=>W.value=!1)}return he(o,(n,u)=>{var _;n!==u&&(n?(W.value=!0,x.value=e.multiple?"":String(((_=y.value.at(-1))==null?void 0:_.props.title)??""),g.value=!0,Ce(()=>W.value=!1)):(!e.multiple&&!x.value?y.value=[]:ne.value&&!p.value&&!y.value.some(z=>{let{value:h}=z;return h===P.value[0].value})&&q(P.value[0]),f.value=!1,x.value="",s.value=-1))}),he(x,n=>{!o.value||W.value||(n&&(f.value=!0),g.value=!n)}),he(f,()=>{if(!e.hideSelected&&f.value&&y.value.length){const n=P.value.findIndex(u=>y.value.some(_=>u.value===_.value));Xe&&window.requestAnimationFrame(()=>{var u;n>=0&&((u=m.value)==null||u.scrollToIndex(n))})}}),ft(()=>{const n=!!(e.chips||t.chip),u=!!(!e.hideNoData||P.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),_=y.value.length>0,z=te.filterProps(e);return l(te,se({ref:a},z,{modelValue:x.value,"onUpdate:modelValue":Ke,focused:o.value,"onUpdate:focused":h=>o.value=h,validationValue:y.externalValue,counterValue:y.value.length,dirty:_,onInput:Pe,onChange:je,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":f.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:_?void 0:e.placeholder,"onClick:clear":Ee,"onMousedown:control":De,onKeydown:Ge}),{...t,default:()=>l(D,null,[l(rt,se({ref:c,modelValue:f.value,"onUpdate:modelValue":h=>f.value=h,activator:"parent",contentClass:"v-autocomplete__content",disabled:de.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:qe},e.menuProps),{default:()=>[u&&l(vt,{ref:me,selected:Me.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:h=>h.preventDefault(),onKeydown:Ae,onFocusin:Oe,onFocusout:Re,onScrollPassive:Ue,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var h,w,b;return[(h=t["prepend-item"])==null?void 0:h.call(t),!P.value.length&&!e.hideNoData&&(((w=t["no-data"])==null?void 0:w.call(t))??l(Ie,{title:d(e.noDataText)},null)),l(ot,{ref:m,renderless:!0,items:P.value},{default:U=>{var _e;let{item:L,index:O,itemRef:R}=U;const pe=se(L.props,{ref:R,key:O,active:ne.value&&O===0?!0:void 0,onClick:()=>q(L)});return((_e=t.item)==null?void 0:_e.call(t,{item:L,index:O,props:pe}))??l(Ie,pe,{prepend:re=>{let{isSelected:oe}=re;return l(D,null,[e.multiple&&!e.hideSelected?l(st,{key:L.value,modelValue:oe,ripple:!1,tabindex:"-1"},null):void 0,L.props.prependIcon&&l(ye,{icon:L.props.prependIcon},null)])},title:()=>{var re,oe;return g.value?L.title:Lt(L.title,(re=Le(L))==null?void 0:re.title,((oe=x.value)==null?void 0:oe.length)??0)}})}}),(b=t["append-item"])==null?void 0:b.call(t)]}})]}),y.value.map((h,w)=>{function b(R){R.stopPropagation(),R.preventDefault(),q(h)}const U={"onClick:close":b,onMousedown(R){R.preventDefault(),R.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},L=n?!!t.chip:!!t.selection,O=L?Qe(n?t.chip({item:h,index:w,props:U}):t.selection({item:h,index:w})):void 0;if(!(L&&!O))return l("div",{key:h.value,class:["v-autocomplete__selection",w===s.value&&["v-autocomplete__selection--selected",ae.value]],style:w===s.value?Q.value:{}},[n?t.chip?l(ht,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:h.title}}},{default:()=>[O]}):l(ut,se({key:"chip",closable:e.closableChips,size:"small",text:h.title,disabled:h.props.disabled},U),null):O??l("span",{class:"v-autocomplete__selection-text"},[h.title,e.multiple&&w<y.value.length-1&&l("span",{class:"v-autocomplete__selection-comma"},[ke(",")])])])})]),"append-inner":function(){var U;for(var h=arguments.length,w=new Array(h),b=0;b<h;b++)w[b]=arguments[b];return l(D,null,[(U=t["append-inner"])==null?void 0:U.call(t,...w),e.menuIcon?l(ye,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Ne,onClick:We,"aria-label":d(M.value),title:d(M.value)},null):void 0])}})}),gt({isFocused:o,isPristine:g,menu:f,search:x,filteredItems:ce,select:q},a)}}),At={key:1},Et={class:"text-h4 font-weight-bold"};function Dt(e,i,t,d,a,o){const g=S("Loading");return v(),E(D,null,[a.loading?(v(),A(g,{key:0})):k("",!0),a.loading?k("",!0):(v(),E("div",At,[l(ee,null,{default:r(()=>[l(ue,{class:"text-center"},{default:r(()=>[l(C,{class:"d-flex align-center justify-center"},{default:r(()=>[l(I,null,{default:r(()=>[l(it,null,{default:r(()=>[K("h2",Et,"Agregar un Videojuego a la colección "+$(t.nameCollection),1),l(ee,null,{default:r(()=>[l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(Ut,{label:"Buscar un título",modelValue:a.gameOptionSelected,"onUpdate:modelValue":[i[0]||(i[0]=p=>a.gameOptionSelected=p),o.handleGameSelected],items:a.igdbGameList,variant:"outlined","item-text":"title","item-value":"id",onInput:o.handleGameInput,onBlur:o.clearGameInput},null,8,["modelValue","items","onUpdate:modelValue","onInput","onBlur"])]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[l(B,{class:"ma-2",text:"Cancelar",onClick:i[1]||(i[1]=p=>e.$router.push({name:"CollectionDetail",params:{id:t.idCollection}}))}),l(B,{disabled:!o.isValid,class:"bg-amber ma-2",text:"Guardar",onClick:i[2]||(i[2]=p=>o.create())},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))],64)}const Nt=le(kt,[["render",Dt]]),Gt={props:{idUser:{type:Number,required:!0},idItem:{type:Number,required:!0}},components:{ModalConfirm:ve,Loading:ie},data(){return{images:[],loading:!1,mediaUrl:Ze}},methods:{async fetchItemImages(){this.loading=!0;try{this.images=await N.fetchImages(this.idUser,this.idItem)}catch(e){console.error(e)}finally{this.loading=!1}},async del(e){this.loading=!0;try{await N.removeImage(e.name,e.id,this.idUser)}catch(i){console.error(i)}finally{await this.fetchItemImages(),this.loading=!1}}},async mounted(){await this.fetchItemImages()}},Pt={key:1};function jt(e,i,t,d,a,o){const g=S("Loading"),p=S("ModalConfirm");return v(),E(D,null,[a.loading?(v(),A(g,{key:0})):k("",!0),a.loading?k("",!0):(v(),E("div",Pt,[l(ee,null,{default:r(()=>[l(ue,{class:"text-center"},{default:r(()=>[l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(B,{onClick:i[0]||(i[0]=c=>e.$router.push({name:"Photo",params:{idItem:t.idItem}})),class:"bg-amber mt-2"},{default:r(()=>[l(ye,{icon:"mdi-camera",size:"large",start:""}),ke(" Agregar Foto ")]),_:1})]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[(v(!0),E(D,null,$e(a.images,(c,m)=>(v(),A(bt,{key:m,class:"pa-2 ma-2"},{default:r(()=>[l(_t,{width:400,src:`${a.mediaUrl}/${c.name}`},null,8,["src"]),l(p,{buttonOpenText:"",buttonOkText:"Eliminar",buttonKoText:"Cancelar",title:"Confirma que deseas eliminar",description:"La imagen será eliminada definitivamente.","button-bg":"bg-red",icon:"mdi-delete",onAgree:T=>o.del(c)},null,8,["onAgree"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]))],64)}const Fe=le(Gt,[["render",jt]]),qt={props:{id:{type:Number,required:!1},currentTitle:{type:String,required:!1},nameCollection:{type:String,required:!0},idCollection:{type:Number,required:!0},idItemType:{type:Number,required:!0},idUser:{type:Number,required:!0}},components:{ModalConfirm:ve,ItemImageEdit:Fe,Loading:ie},data(){return{loading:!1,valid:!1,pageTitle:"",title:this.currentTitle||"",typeLabel:e=>Se(e)}},methods:{save(){this.id?this.update():this.create()},async create(){this.loading=!0;try{const e={idcollection:this.idCollection,iditemtype:this.idItemType,iduser:this.idUser,title:this.title},i=await N.create(e);this.$emit("refreshTrigger",i),this.$router.push({name:"ItemEdit",params:{id:i}})}catch(e){console.error(e)}finally{this.loading=!1}},async update(){this.loading=!0;try{await N.update(this.id||0,this.idUser,this.title,"",0),this.$router.push({name:"ItemDetail",params:{id:this.id}})}catch(e){console.error(e)}finally{this.loading=!1}},async del(){this.loading=!0;try{await N.remove(this.id||0,this.idUser),this.$router.push({name:"CollectionDetail",params:{id:this.idCollection}})}catch(e){console.error(e)}finally{this.loading=!1}},cancel(){this.$router.push({name:"CollectionDetail",params:{id:this.idCollection}})}},computed:{idValid(){return!!this.title&&this.title.length>0}},watch:{currentTitle:{immediate:!0,handler(e){this.title=e}}}},Ot={key:1},Rt={class:"text-h4 font-weight-bold text-center"};function Kt(e,i,t,d,a,o){const g=S("Loading"),p=S("ItemImageEdit"),c=S("ModalConfirm");return v(),E(D,null,[a.loading?(v(),A(g,{key:0})):k("",!0),a.loading?k("",!0):(v(),E("div",Ot,[l(ee,null,{default:r(()=>[l(ue,{class:"text-center"},{default:r(()=>[l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"18"},{default:r(()=>[K("h1",Rt,$(t.id?"Editar":"Agregar nuevo item a "+t.nameCollection),1)]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(te,{modelValue:a.title,"onUpdate:modelValue":i[0]||(i[0]=m=>a.title=m),label:"Título",required:"","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[K("p",null,$(a.typeLabel(t.idItemType)),1)]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[t.id?(v(),A(p,{key:0,"id-item":t.id,"id-user":t.idUser},null,8,["id-item","id-user"])):k("",!0)]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[l(B,{text:"Guardar",onClick:i[1]||(i[1]=m=>o.save()),class:"bg-amber ma-2",disabled:!o.idValid},null,8,["disabled"])]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[we(K("span",null,[l(c,{buttonOpenText:"Eliminar",buttonOkText:"Eliminar",buttonKoText:"Cancelar",title:"Confirma que deseas eliminar",description:`El item ${a.title} será eliminado de la colección ${t.nameCollection}.`,onAgree:o.del},null,8,["description","onAgree"])],512),[[Te,t.id]]),l(B,{text:"Cancelar",onClick:i[2]||(i[2]=m=>o.cancel()),class:"ma-2"})]),_:1})]),_:1})]),_:1})]),_:1})]))],64)}const Bt=le(qt,[["render",Kt]]),Yt={props:{id:{type:Number,required:!1},currentTitle:{type:String,required:!1},currentAuthor:{type:String,required:!1},currentYear:{type:Number,required:!1},nameCollection:{type:String,required:!0},idCollection:{type:Number,required:!0},idItemType:{type:Number,required:!0},idUser:{type:Number,required:!0}},components:{ModalConfirm:ve,ItemImageEdit:Fe,Loading:ie},data(){return{loading:!1,valid:!1,pageTitle:"",title:this.currentTitle||"",author:this.currentAuthor||"",year:this.currentYear||0,typeLabel:e=>Se(e)}},methods:{save(){this.id?this.update():this.create()},async create(){this.loading=!0;try{const e={idcollection:this.idCollection,iditemtype:this.idItemType,iduser:this.idUser,title:this.title,author:this.author,year:this.year},i=await N.create(e);this.$emit("refreshTrigger",i),this.$router.push({name:"ItemEdit",params:{id:i}})}catch(e){console.error(e)}finally{this.loading=!1}},async update(){this.loading=!0;try{await N.update(this.id||0,this.idUser,this.title,this.author,this.year),this.$router.push({name:"ItemDetail",params:{id:this.id}})}catch(e){console.error(e)}finally{this.loading=!1}},async del(){this.loading=!0;try{await N.remove(this.id||0,this.idUser),this.$router.push({name:"CollectionDetail",params:{id:this.idCollection}})}catch(e){console.error(e)}finally{this.loading=!1}},cancel(){this.$router.push({name:"CollectionDetail",params:{id:this.idCollection}})}},computed:{idValid(){return!!this.title&&this.title.length>0}},watch:{currentTitle:{immediate:!0,handler(e){this.title=e}}}},zt={key:1},Ht={class:"text-h4 font-weight-bold text-center"};function Jt(e,i,t,d,a,o){const g=S("Loading"),p=S("ItemImageEdit"),c=S("ModalConfirm");return v(),E(D,null,[a.loading?(v(),A(g,{key:0})):k("",!0),a.loading?k("",!0):(v(),E("div",zt,[l(ee,null,{default:r(()=>[l(ue,{class:"text-center"},{default:r(()=>[l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"18"},{default:r(()=>[K("h1",Ht,$(t.id?"Editar":"Agregar nuevo item a "+t.nameCollection),1)]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(te,{modelValue:a.title,"onUpdate:modelValue":i[0]||(i[0]=m=>a.title=m),label:"Título",required:"","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(te,{modelValue:a.author,"onUpdate:modelValue":i[1]||(i[1]=m=>a.author=m),label:"Autor",required:"","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[K("p",null,$(a.typeLabel(t.idItemType)),1)]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[t.id?(v(),A(p,{key:0,"id-item":t.id,"id-user":t.idUser},null,8,["id-item","id-user"])):k("",!0)]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[l(B,{text:"Guardar",onClick:i[2]||(i[2]=m=>o.save()),class:"bg-amber ma-2",disabled:!o.idValid},null,8,["disabled"])]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[we(K("span",null,[l(c,{buttonOpenText:"Eliminar",buttonOkText:"Eliminar",buttonKoText:"Cancelar",title:"Confirma que deseas eliminar",description:`El item ${a.title} será eliminado de la colección ${t.nameCollection}.`,onAgree:o.del},null,8,["description","onAgree"])],512),[[Te,t.id]]),l(B,{text:"Cancelar",onClick:i[3]||(i[3]=m=>o.cancel()),class:"ma-2"})]),_:1})]),_:1})]),_:1})]),_:1})]))],64)}const Qt=le(Yt,[["render",Jt]]),Wt={components:{ItemFormGame:Nt,ItemFormAny:Bt,ItemFormBook:Qt,Loading:ie},data(){var e;return{breadcrumbs:[],id:parseInt(this.$route.params.id+""),idCollection:parseInt(this.$route.params.idCollection+""),idUser:parseInt(((e=et())==null?void 0:e.id)+""),idItemType:0,idPlatform:0,nameCollection:"",item:{},collection:{},code:"",loading:!1}},methods:{async fetchItem(){this.loading=!0;try{const e=await N.fetch(this.idUser,this.id,null);this.item=e[0],this.idCollection=this.item.idcollection,this.idItemType=this.item.iditemtype,this.nameCollection=this.item.collectionname+"",this.code=Ve(this.item.iditemtype)}catch(e){console.error(e)}finally{this.loading=!1}},async fetchCollection(){this.loading=!0;try{const e=await tt.fetch(this.idUser,this.idCollection);this.collection=e[0],this.idItemType=this.collection.iditemtype,this.nameCollection=this.collection.name,this.idPlatform=this.collection.idplatform,this.code=Ve(this.collection.iditemtype)}catch(e){console.error(e)}finally{this.loading=!1}},async refresh(e){this.id=e,this.fetchItem()}},async mounted(){this.breadcrumbs=[{title:"Colecciones",href:"/coleccionista/home"}],this.idCollection&&(await this.fetchCollection(),this.breadcrumbs=[...this.breadcrumbs,{title:this.collection.name,href:"/coleccionista/collection/"+this.collection.id},{title:"Nuevo"}]),this.id&&(await this.fetchItem(),this.breadcrumbs=[...this.breadcrumbs,{title:this.nameCollection,href:"/coleccionista/collection/"+this.item.idcollection},{title:this.item.title,href:"/coleccionista/item/"+this.item.id},{title:"Editar"}])}},Xt={key:1};function Zt(e,i,t,d,a,o){var T,f,s,V,M,F;const g=S("Loading"),p=S("ItemFormGame"),c=S("ItemFormBook"),m=S("ItemFormAny");return v(),E(D,null,[a.loading?(v(),A(g,{key:0})):k("",!0),a.loading?k("",!0):(v(),E("div",Xt,[l(Ct,{items:a.breadcrumbs},null,8,["items"]),a.code==="videogame"?(v(),A(p,{key:0,"id-collection":a.idCollection,"id-user":a.idUser,"id-item-type":a.idItemType,"id-platform":a.idPlatform,"name-collection":a.nameCollection},null,8,["id-collection","id-user","id-item-type","id-platform","name-collection"])):k("",!0),a.code==="book"?(v(),A(c,{key:1,id:(T=a.item)==null?void 0:T.id,"current-title":(f=a.item)==null?void 0:f.title,"current-author":(s=a.item)==null?void 0:s.author,"current-year":(V=a.item)==null?void 0:V.year,"id-collection":a.idCollection,"id-user":a.idUser,"id-item-type":a.idItemType,"name-collection":a.nameCollection},null,8,["id","current-title","current-author","current-year","id-collection","id-user","id-item-type","name-collection"])):k("",!0),a.code!=="videogame"&&a.code!=="book"?(v(),A(m,{key:2,id:(M=a.item)==null?void 0:M.id,"current-title":(F=a.item)==null?void 0:F.title,"id-collection":a.idCollection,"id-user":a.idUser,"id-item-type":a.idItemType,"name-collection":a.nameCollection,onRefreshTrigger:o.refresh},null,8,["id","current-title","id-collection","id-user","id-item-type","name-collection","onRefreshTrigger"])):k("",!0)]))],64)}const vl=le(Wt,[["render",Zt]]);export{vl as default};
