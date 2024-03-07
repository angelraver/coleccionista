import{p as xe,r as H,c as j,M as X,N as Be,O as ye,P as Ye,Q as ze,l as He,R as Je,s as Z,S as fe,T as he,q as l,F as D,U as se,V as Qe,y as ke,W as We,X as be,Y as Ce,Z as Xe,_ as le,B as S,v,w as E,C as A,H as k,x as r,z as K,L as $,$ as Ze,K as $e,I as we,J as Te,G as et}from"./index-462096f9.js";import{C as tt}from"./Collection-76c6b883.js";import{I as N}from"./Item-adc4cb92.js";import{g as lt,b as ee,c as ue,V as C,a as I}from"./VResponsive-ca61ecf9.js";import{L as ie}from"./Loading-48724487.js";import{V as it}from"./VForm-e941fe5a.js";import{m as at,u as nt,a as rt,b as ot,c as st,d as ut}from"./VSelect-5b311eb5.js";import{m as ct,u as dt,V as te}from"./VTextField-df7d3fd4.js";import{q as mt,n as ft,p as ge,r as ht,o as B}from"./VBtn-42c2cdc8.js";import{f as yt}from"./forwardRefs-e658ad70.js";import{u as gt,V as vt,a as Ie}from"./VList-df634d00.js";import{m as pt,V as _t}from"./VImg-96b44f86.js";import{V as bt,g as Se,b as Ve}from"./VCard-cf8e7570.js";import{M as ve}from"./ModalConfirm-f817a52c.js";import{V as Ct}from"./VBreadcrumbs-50f85b7f.js";import"./VOverlay-b7f40ac3.js";import"./index-1e23616e.js";import"./ssrBoot-277581ff.js";function It(e){const a=e*1e3;return new Date(a).getFullYear()}const Vt=async(e,a)=>{try{return await(await lt("/games",[e,a+""])).map(d=>({id:d.id,title:d.name,year:It(d.first_release_date)}))}catch(t){console.error(t)}},xt={fetch:Vt},kt={components:{Loading:ie},props:{nameCollection:{type:String,required:!0},idCollection:{type:Number,required:!0},idItemType:{type:Number,required:!0},idPlatform:{type:Number,required:!0},idUser:{type:Number,required:!0}},data(){return{item:{},loading:!1,gameOptionSelected:null,gameTypedString:"",igdbGameList:[],igdbGame:{}}},computed:{isValid(){return!!this.igdbGame.title&&this.igdbGame.title.length>0}},methods:{async create(){this.loading=!0;const e={idcollection:this.idCollection,iditemtype:this.idItemType,iduser:this.idUser,title:this.igdbGame.titleSimple+"",idigdb:this.igdbGame.id,year:this.igdbGame.year};try{await N.create(e),this.$router.push({name:"CollectionDetail",params:{id:this.idCollection}})}catch(a){console.error(a)}finally{this.loading=!1}},async fetchIgdbGames(e){try{const a=await xt.fetch(e,this.idPlatform);this.igdbGameList=a.map(t=>({id:t.id,title:`${t.title} (${t.year})`,titleSimple:t.title,author:"",year:t.year}))}catch(a){console.error(a)}},async handleGameSelected(e){this.gameOptionSelected=e;const a=this.igdbGameList.find(({id:t})=>t===e);this.igdbGame=a?JSON.parse(JSON.stringify(a,null,2)):{}},async handleGameInput(e){e.data?this.gameTypedString=this.gameTypedString+e.data:this.gameTypedString=this.gameTypedString.substring(0,this.gameTypedString.length-1),this.gameTypedString.length>3&&await this.fetchIgdbGames(this.gameTypedString)},clearGameInput(){this.gameTypedString=""}}};const wt=(e,a,t)=>e==null||a==null?-1:e.toString().toLocaleLowerCase().indexOf(a.toString().toLocaleLowerCase()),Tt=xe({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function St(e,a,t){var p;const d=[],i=(t==null?void 0:t.default)??wt,o=t!=null&&t.filterKeys?ye(t.filterKeys):!1,y=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return d;e:for(let c=0;c<e.length;c++){const[m,T=m]=ye(e[c]),f={},s={};let V=-1;if(a&&!(t!=null&&t.noFilter)){if(typeof m=="object"){const J=o||Object.keys(T);for(const G of J){const ae=Ye(T,G,T),Q=(p=t==null?void 0:t.customKeyFilter)==null?void 0:p[G];if(V=Q?Q(ae,a,m):i(ae,a,m),V!==-1&&V!==!1)Q?f[G]=V:s[G]=V;else if((t==null?void 0:t.filterMode)==="every")continue e}}else V=i(m,a,m),V!==-1&&V!==!1&&(s.title=V);const M=Object.keys(s).length,F=Object.keys(f).length;if(!M&&!F||(t==null?void 0:t.filterMode)==="union"&&F!==y&&!M||(t==null?void 0:t.filterMode)==="intersection"&&(F!==y||!M))continue}d.push({index:c,matches:{...s,...f}})}return d}function Ft(e,a,t,d){const i=H([]),o=H(new Map),y=j(()=>d!=null&&d.transform?X(a).map(c=>[c,d.transform(c)]):X(a));Be(()=>{const c=typeof t=="function"?t():X(t),m=typeof c!="string"&&typeof c!="number"?"":String(c),T=St(y.value,m,{customKeyFilter:{...e.customKeyFilter,...X(d==null?void 0:d.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),f=X(a),s=[],V=new Map;T.forEach(M=>{let{index:F,matches:J}=M;const G=f[F];s.push(G),V.set(G.value,J)}),i.value=s,o.value=V});function p(c){return o.value.get(c.value)}return{filteredItems:i,filteredMatches:o,getMatches:p}}function Lt(e,a,t){if(a==null)return e;if(Array.isArray(a))throw new Error("Multiple matches is not implemented");return typeof a=="number"&&~a?l(D,null,[l("span",{class:"v-autocomplete__unmask"},[e.substr(0,a)]),l("span",{class:"v-autocomplete__mask"},[e.substr(a,t)]),l("span",{class:"v-autocomplete__unmask"},[e.substr(a+t)])]):e}const Mt=xe({autoSelectFirst:{type:[Boolean,String]},search:String,...Tt({filterKeys:["title"]}),...at(),...ze(ct({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...pt({transition:!1})},"VAutocomplete"),Ut=He()({name:"VAutocomplete",props:Mt(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:t}=a;const{t:d}=Je(),i=H(),o=Z(!1),y=Z(!0),p=Z(!1),c=H(),m=H(),T=fe(e,"menu"),f=j({get:()=>T.value,set:n=>{var u;T.value&&!n&&((u=c.value)!=null&&u.ΨopenChildren)||(T.value=n)}}),s=Z(-1),V=j(()=>{var n;return(n=i.value)==null?void 0:n.color}),M=j(()=>f.value?e.closeText:e.openText),{items:F,transformIn:J,transformOut:G}=gt(e),{textColorClasses:ae,textColorStyles:Q}=mt(V),x=fe(e,"search",""),g=fe(e,"modelValue",[],n=>J(n===null?[null]:ye(n)),n=>{const u=G(n);return e.multiple?u:u[0]??null}),Y=dt(),{filteredItems:ce,getMatches:Le}=Ft(e,F,()=>y.value?"":x.value),P=j(()=>e.hideSelected?ce.value.filter(n=>!g.value.some(u=>u.value===n.value)):ce.value),Me=j(()=>g.value.map(n=>n.props.value)),ne=j(()=>{var u;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&x.value===((u=P.value[0])==null?void 0:u.title))&&P.value.length>0&&!y.value&&!p.value}),de=j(()=>e.hideNoData&&!F.value.length||e.readonly||(Y==null?void 0:Y.isReadonly.value)),me=H(),{onListScroll:Ue,onListKeydown:Ae}=nt(me,i);function Ee(n){e.openOnClear&&(f.value=!0),x.value=""}function De(){de.value||(f.value=!0)}function Ne(n){de.value||(o.value&&(n.preventDefault(),n.stopPropagation()),f.value=!f.value)}function Ge(n){var z,h,w;if(e.readonly||Y!=null&&Y.isReadonly.value)return;const u=i.value.selectionStart,_=g.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(n.key))&&n.preventDefault(),["Enter","ArrowDown"].includes(n.key)&&(f.value=!0),["Escape"].includes(n.key)&&(f.value=!1),ne.value&&["Enter","Tab"].includes(n.key)&&q(P.value[0]),n.key==="ArrowDown"&&ne.value&&((z=me.value)==null||z.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(n.key)){if(s.value<0){n.key==="Backspace"&&!x.value&&(s.value=_-1);return}const b=s.value,U=g.value[s.value];U&&!U.props.disabled&&q(U),s.value=b>=_-1?_-2:b}if(n.key==="ArrowLeft"){if(s.value<0&&u>0)return;const b=s.value>-1?s.value-1:_-1;g.value[b]?s.value=b:(s.value=-1,i.value.setSelectionRange((h=x.value)==null?void 0:h.length,(w=x.value)==null?void 0:w.length))}if(n.key==="ArrowRight"){if(s.value<0)return;const b=s.value+1;g.value[b]?s.value=b:(s.value=-1,i.value.setSelectionRange(0,0))}}}function Pe(n){x.value=n.target.value}function je(n){if(be(i.value,":autofill")||be(i.value,":-webkit-autofill")){const u=F.value.find(_=>_.title===n.target.value);u&&q(u)}}function qe(){var n;o.value&&(y.value=!0,(n=i.value)==null||n.focus())}function Oe(n){o.value=!0,setTimeout(()=>{p.value=!0})}function Re(n){p.value=!1}function Ke(n){(n==null||n===""&&!e.multiple)&&(g.value=[])}const W=Z(!1);function q(n){if(e.multiple){const u=g.value.findIndex(_=>e.valueComparator(_.value,n.value));if(u===-1)g.value=[...g.value,n];else{const _=[...g.value];_.splice(u,1),g.value=_}}else g.value=[n],W.value=!0,x.value=n.title,f.value=!1,y.value=!0,Ce(()=>W.value=!1)}return he(o,(n,u)=>{var _;n!==u&&(n?(W.value=!0,x.value=e.multiple?"":String(((_=g.value.at(-1))==null?void 0:_.props.title)??""),y.value=!0,Ce(()=>W.value=!1)):(!e.multiple&&!x.value?g.value=[]:ne.value&&!p.value&&!g.value.some(z=>{let{value:h}=z;return h===P.value[0].value})&&q(P.value[0]),f.value=!1,x.value="",s.value=-1))}),he(x,n=>{!o.value||W.value||(n&&(f.value=!0),y.value=!n)}),he(f,()=>{if(!e.hideSelected&&f.value&&g.value.length){const n=P.value.findIndex(u=>g.value.some(_=>u.value===_.value));Xe&&window.requestAnimationFrame(()=>{var u;n>=0&&((u=m.value)==null||u.scrollToIndex(n))})}}),ft(()=>{const n=!!(e.chips||t.chip),u=!!(!e.hideNoData||P.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),_=g.value.length>0,z=te.filterProps(e);return l(te,se({ref:i},z,{modelValue:x.value,"onUpdate:modelValue":Ke,focused:o.value,"onUpdate:focused":h=>o.value=h,validationValue:g.externalValue,counterValue:g.value.length,dirty:_,onInput:Pe,onChange:je,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":f.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:_?void 0:e.placeholder,"onClick:clear":Ee,"onMousedown:control":De,onKeydown:Ge}),{...t,default:()=>l(D,null,[l(rt,se({ref:c,modelValue:f.value,"onUpdate:modelValue":h=>f.value=h,activator:"parent",contentClass:"v-autocomplete__content",disabled:de.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:qe},e.menuProps),{default:()=>[u&&l(vt,{ref:me,selected:Me.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:h=>h.preventDefault(),onKeydown:Ae,onFocusin:Oe,onFocusout:Re,onScrollPassive:Ue,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var h,w,b;return[(h=t["prepend-item"])==null?void 0:h.call(t),!P.value.length&&!e.hideNoData&&(((w=t["no-data"])==null?void 0:w.call(t))??l(Ie,{title:d(e.noDataText)},null)),l(ot,{ref:m,renderless:!0,items:P.value},{default:U=>{var _e;let{item:L,index:O,itemRef:R}=U;const pe=se(L.props,{ref:R,key:O,active:ne.value&&O===0?!0:void 0,onClick:()=>q(L)});return((_e=t.item)==null?void 0:_e.call(t,{item:L,index:O,props:pe}))??l(Ie,pe,{prepend:re=>{let{isSelected:oe}=re;return l(D,null,[e.multiple&&!e.hideSelected?l(st,{key:L.value,modelValue:oe,ripple:!1,tabindex:"-1"},null):void 0,L.props.prependIcon&&l(ge,{icon:L.props.prependIcon},null)])},title:()=>{var re,oe;return y.value?L.title:Lt(L.title,(re=Le(L))==null?void 0:re.title,((oe=x.value)==null?void 0:oe.length)??0)}})}}),(b=t["append-item"])==null?void 0:b.call(t)]}})]}),g.value.map((h,w)=>{function b(R){R.stopPropagation(),R.preventDefault(),q(h)}const U={"onClick:close":b,onMousedown(R){R.preventDefault(),R.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},L=n?!!t.chip:!!t.selection,O=L?Qe(n?t.chip({item:h,index:w,props:U}):t.selection({item:h,index:w})):void 0;if(!(L&&!O))return l("div",{key:h.value,class:["v-autocomplete__selection",w===s.value&&["v-autocomplete__selection--selected",ae.value]],style:w===s.value?Q.value:{}},[n?t.chip?l(ht,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:h.title}}},{default:()=>[O]}):l(ut,se({key:"chip",closable:e.closableChips,size:"small",text:h.title,disabled:h.props.disabled},U),null):O??l("span",{class:"v-autocomplete__selection-text"},[h.title,e.multiple&&w<g.value.length-1&&l("span",{class:"v-autocomplete__selection-comma"},[ke(",")])])])})]),"append-inner":function(){var U;for(var h=arguments.length,w=new Array(h),b=0;b<h;b++)w[b]=arguments[b];return l(D,null,[(U=t["append-inner"])==null?void 0:U.call(t,...w),e.menuIcon?l(ge,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Ne,onClick:We,"aria-label":d(M.value),title:d(M.value)},null):void 0])}})}),yt({isFocused:o,isPristine:y,menu:f,search:x,filteredItems:ce,select:q},i)}}),At={key:1},Et={class:"text-h4 font-weight-bold"};function Dt(e,a,t,d,i,o){const y=S("Loading");return v(),E(D,null,[i.loading?(v(),A(y,{key:0})):k("",!0),i.loading?k("",!0):(v(),E("div",At,[l(ee,null,{default:r(()=>[l(ue,{class:"text-center"},{default:r(()=>[l(C,{class:"d-flex align-center justify-center"},{default:r(()=>[l(I,null,{default:r(()=>[l(it,null,{default:r(()=>[K("h2",Et,"Agregar un Videojuego a la colección "+$(t.nameCollection),1),l(ee,null,{default:r(()=>[l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(Ut,{label:"Buscar un título",modelValue:i.gameOptionSelected,"onUpdate:modelValue":[a[0]||(a[0]=p=>i.gameOptionSelected=p),o.handleGameSelected],items:i.igdbGameList,variant:"outlined","item-text":"title","item-value":"id",onInput:o.handleGameInput,onBlur:o.clearGameInput},null,8,["modelValue","items","onUpdate:modelValue","onInput","onBlur"])]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[l(B,{class:"ma-2",text:"Cancelar",onClick:a[1]||(a[1]=p=>e.$router.push({name:"CollectionDetail",params:{id:t.idCollection}}))}),l(B,{disabled:!o.isValid,class:"bg-amber ma-2",text:"Guardar",onClick:a[2]||(a[2]=p=>o.create())},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))],64)}const Nt=le(kt,[["render",Dt]]),Gt={props:{idUser:{type:Number,required:!0},idItem:{type:Number,required:!0}},components:{ModalConfirm:ve,Loading:ie},data(){return{images:[],loading:!1,mediaUrl:Ze}},methods:{async fetchItemImages(){this.loading=!0;try{this.images=await N.fetchImages(this.idUser,this.idItem)}catch(e){console.error(e)}finally{this.loading=!1}},async del(e){this.loading=!0;try{await N.removeImage(e.name,e.id,this.idUser)}catch(a){console.error(a)}finally{await this.fetchItemImages(),this.loading=!1}}},async mounted(){await this.fetchItemImages()}},Pt={key:1};function jt(e,a,t,d,i,o){const y=S("Loading"),p=S("ModalConfirm");return v(),E(D,null,[i.loading?(v(),A(y,{key:0})):k("",!0),i.loading?k("",!0):(v(),E("div",Pt,[l(ee,null,{default:r(()=>[l(ue,{class:"text-center"},{default:r(()=>[l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(B,{onClick:a[0]||(a[0]=c=>e.$router.push({name:"Photo",params:{idItem:t.idItem}})),class:"bg-amber mt-2"},{default:r(()=>[l(ge,{icon:"mdi-camera",size:"large",start:""}),ke(" Agregar Foto ")]),_:1})]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[(v(!0),E(D,null,$e(i.images,(c,m)=>(v(),A(bt,{key:m,class:"pa-2 ma-2"},{default:r(()=>[l(_t,{width:400,src:`${i.mediaUrl}/${c.name}`},null,8,["src"]),l(p,{buttonOpenText:"",buttonOkText:"Eliminar",buttonKoText:"Cancelar",title:"Confirma que deseas eliminar",description:"La imagen será eliminada definitivamente.","button-bg":"bg-red",icon:"mdi-delete",onAgree:T=>o.del(c)},null,8,["onAgree"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]))],64)}const Fe=le(Gt,[["render",jt]]),qt={props:{id:{type:Number,required:!1},currentTitle:{type:String,required:!1},nameCollection:{type:String,required:!0},idCollection:{type:Number,required:!0},idItemType:{type:Number,required:!0},idUser:{type:Number,required:!0}},components:{ModalConfirm:ve,ItemImageEdit:Fe,Loading:ie},data(){return{loading:!1,valid:!1,pageTitle:"",title:this.currentTitle||"",typeLabel:e=>Se(e)}},methods:{save(){this.id?this.update():this.create()},async create(){this.loading=!0;try{const e={idcollection:this.idCollection,iditemtype:this.idItemType,iduser:this.idUser,title:this.title},a=await N.create(e);this.$emit("refreshTrigger",a),this.$router.push({name:"ItemEdit",params:{id:a}})}catch(e){console.error(e)}finally{this.loading=!1}},async update(){this.loading=!0;try{await N.update(this.id||0,this.idUser,this.title,"",0),this.$router.push({name:"ItemDetail",params:{id:this.id}})}catch(e){console.error(e)}finally{this.loading=!1}},async del(){this.loading=!0;try{await N.remove(this.id||0,this.idUser),this.$router.push({name:"CollectionDetail",params:{id:this.idCollection}})}catch(e){console.error(e)}finally{this.loading=!1}},cancel(){this.$router.push({name:"CollectionDetail",params:{id:this.idCollection}})}},computed:{idValid(){return!!this.title&&this.title.length>0}},watch:{currentTitle:{immediate:!0,handler(e){this.title=e}}}},Ot={key:1},Rt={class:"text-h4 font-weight-bold text-center"};function Kt(e,a,t,d,i,o){const y=S("Loading"),p=S("ItemImageEdit"),c=S("ModalConfirm");return v(),E(D,null,[i.loading?(v(),A(y,{key:0})):k("",!0),i.loading?k("",!0):(v(),E("div",Ot,[l(ee,null,{default:r(()=>[l(ue,{class:"text-center"},{default:r(()=>[l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"18"},{default:r(()=>[K("h1",Rt,$(t.id?"Editar":"Agregar nuevo item a "+t.nameCollection),1)]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(te,{modelValue:i.title,"onUpdate:modelValue":a[0]||(a[0]=m=>i.title=m),label:"Título",required:"","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[K("p",null,$(i.typeLabel(t.idItemType)),1)]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[t.id?(v(),A(p,{key:0,"id-item":t.id,"id-user":t.idUser},null,8,["id-item","id-user"])):k("",!0)]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[l(B,{text:"Guardar",onClick:a[1]||(a[1]=m=>o.save()),class:"bg-amber ma-2",disabled:!o.idValid},null,8,["disabled"])]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[we(K("span",null,[l(c,{buttonOpenText:"Eliminar",buttonOkText:"Eliminar",buttonKoText:"Cancelar",title:"Confirma que deseas eliminar",description:`El item ${i.title} será eliminado de la colección ${t.nameCollection}.`,onAgree:o.del},null,8,["description","onAgree"])],512),[[Te,t.id]]),l(B,{text:"Cancelar",onClick:a[2]||(a[2]=m=>o.cancel()),class:"ma-2"})]),_:1})]),_:1})]),_:1})]),_:1})]))],64)}const Bt=le(qt,[["render",Kt]]),Yt={props:{id:{type:Number,required:!1},currentTitle:{type:String,required:!1},currentAuthor:{type:String,required:!1},currentYear:{type:Number,required:!1},nameCollection:{type:String,required:!0},idCollection:{type:Number,required:!0},idItemType:{type:Number,required:!0},idUser:{type:Number,required:!0}},components:{ModalConfirm:ve,ItemImageEdit:Fe,Loading:ie},data(){return{loading:!1,valid:!1,pageTitle:"",title:this.currentTitle||"",author:this.currentAuthor||"",year:this.currentYear||0,typeLabel:e=>Se(e)}},methods:{save(){this.id?this.update():this.create()},async create(){this.loading=!0;try{const e={idcollection:this.idCollection,iditemtype:this.idItemType,iduser:this.idUser,title:this.title,author:this.author,year:this.year},a=await N.create(e);this.$emit("refreshTrigger",a),this.$router.push({name:"ItemEdit",params:{id:a}})}catch(e){console.error(e)}finally{this.loading=!1}},async update(){this.loading=!0;try{await N.update(this.id||0,this.idUser,this.title,this.author,this.year),this.$router.push({name:"ItemDetail",params:{id:this.id}})}catch(e){console.error(e)}finally{this.loading=!1}},async del(){this.loading=!0;try{await N.remove(this.id||0,this.idUser),this.$router.push({name:"CollectionDetail",params:{id:this.idCollection}})}catch(e){console.error(e)}finally{this.loading=!1}},cancel(){this.$router.push({name:"CollectionDetail",params:{id:this.idCollection}})}},computed:{idValid(){return!!this.title&&this.title.length>0}},watch:{currentTitle:{immediate:!0,handler(e){this.title=e}}}},zt={key:1},Ht={class:"text-h4 font-weight-bold text-center"};function Jt(e,a,t,d,i,o){const y=S("Loading"),p=S("ItemImageEdit"),c=S("ModalConfirm");return v(),E(D,null,[i.loading?(v(),A(y,{key:0})):k("",!0),i.loading?k("",!0):(v(),E("div",zt,[l(ee,null,{default:r(()=>[l(ue,{class:"text-center"},{default:r(()=>[l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"18"},{default:r(()=>[K("h1",Ht,$(t.id?"Editar":"Agregar nuevo item a "+t.nameCollection),1)]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(te,{modelValue:i.title,"onUpdate:modelValue":a[0]||(a[0]=m=>i.title=m),label:"Título",required:"","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[l(te,{modelValue:i.author,"onUpdate:modelValue":a[1]||(a[1]=m=>i.author=m),label:"Autor",required:"","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[K("p",null,$(i.typeLabel(t.idItemType)),1)]),_:1})]),_:1}),l(C,{class:"justify-center"},{default:r(()=>[l(I,{cols:"8"},{default:r(()=>[t.id?(v(),A(p,{key:0,"id-item":t.id,"id-user":t.idUser},null,8,["id-item","id-user"])):k("",!0)]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[l(B,{text:"Guardar",onClick:a[2]||(a[2]=m=>o.save()),class:"bg-amber ma-2",disabled:!o.idValid},null,8,["disabled"])]),_:1})]),_:1}),l(C,{justify:"center"},{default:r(()=>[l(I,{cols:"auto"},{default:r(()=>[we(K("span",null,[l(c,{buttonOpenText:"Eliminar",buttonOkText:"Eliminar",buttonKoText:"Cancelar",title:"Confirma que deseas eliminar",description:`El item ${i.title} será eliminado de la colección ${t.nameCollection}.`,onAgree:o.del},null,8,["description","onAgree"])],512),[[Te,t.id]]),l(B,{text:"Cancelar",onClick:a[3]||(a[3]=m=>o.cancel()),class:"ma-2"})]),_:1})]),_:1})]),_:1})]),_:1})]))],64)}const Qt=le(Yt,[["render",Jt]]),Wt={components:{ItemFormGame:Nt,ItemFormAny:Bt,ItemFormBook:Qt,Loading:ie},data(){var e;return{breadcrumbs:[],id:parseInt(this.$route.params.id+""),idCollection:parseInt(this.$route.params.idCollection+""),idUser:parseInt(((e=et())==null?void 0:e.id)+""),idItemType:0,idPlatform:0,nameCollection:"",item:{},collection:{},code:"",loading:!1}},methods:{async fetchItem(){this.loading=!0;try{const e=await N.fetch(this.idUser,this.id,null);this.item=e[0],this.idCollection=this.item.idcollection,this.idItemType=this.item.iditemtype,this.nameCollection=this.item.collectionname+"",this.code=Ve(this.item.iditemtype)}catch(e){console.error(e)}finally{this.loading=!1}},async fetchCollection(){this.loading=!0;try{const e=await tt.fetch(this.idUser,this.idCollection);this.collection=e[0],this.idItemType=this.collection.iditemtype,this.nameCollection=this.collection.name,this.idPlatform=this.collection.idplatform,this.code=Ve(this.collection.iditemtype)}catch(e){console.error(e)}finally{this.loading=!1}},async refresh(e){this.id=e,this.fetchItem()}},async mounted(){this.breadcrumbs=[{title:"Colecciones",href:"/home"}],this.idCollection&&(await this.fetchCollection(),this.breadcrumbs=[...this.breadcrumbs,{title:this.collection.name,href:"/collection/"+this.collection.id},{title:"Nuevo"}]),this.id&&(await this.fetchItem(),this.breadcrumbs=[...this.breadcrumbs,{title:this.nameCollection,href:"/collection/"+this.item.idcollection},{title:this.item.title,href:"/item/"+this.item.id},{title:"Editar"}])}},Xt={key:1};function Zt(e,a,t,d,i,o){var T,f,s,V,M,F;const y=S("Loading"),p=S("ItemFormGame"),c=S("ItemFormBook"),m=S("ItemFormAny");return v(),E(D,null,[i.loading?(v(),A(y,{key:0})):k("",!0),i.loading?k("",!0):(v(),E("div",Xt,[l(Ct,{items:i.breadcrumbs},null,8,["items"]),i.code==="videogame"?(v(),A(p,{key:0,"id-collection":i.idCollection,"id-user":i.idUser,"id-item-type":i.idItemType,"id-platform":i.idPlatform,"name-collection":i.nameCollection},null,8,["id-collection","id-user","id-item-type","id-platform","name-collection"])):k("",!0),i.code==="book"?(v(),A(c,{key:1,id:(T=i.item)==null?void 0:T.id,"current-title":(f=i.item)==null?void 0:f.title,"current-author":(s=i.item)==null?void 0:s.author,"current-year":(V=i.item)==null?void 0:V.year,"id-collection":i.idCollection,"id-user":i.idUser,"id-item-type":i.idItemType,"name-collection":i.nameCollection},null,8,["id","current-title","current-author","current-year","id-collection","id-user","id-item-type","name-collection"])):k("",!0),i.code!=="videogame"&&i.code!=="book"?(v(),A(m,{key:2,id:(M=i.item)==null?void 0:M.id,"current-title":(F=i.item)==null?void 0:F.title,"id-collection":i.idCollection,"id-user":i.idUser,"id-item-type":i.idItemType,"name-collection":i.nameCollection,onRefreshTrigger:o.refresh},null,8,["id","current-title","id-collection","id-user","id-item-type","name-collection","onRefreshTrigger"])):k("",!0)]))],64)}const vl=le(Wt,[["render",Zt]]);export{vl as default};
