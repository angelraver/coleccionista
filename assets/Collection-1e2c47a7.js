import{p as s,d as n,e as l,g as i}from"./VRow-c0a7ebda.js";const d=async(o,r,t,e=0)=>{const a={iduser:o,name:r,iditemtype:t,idplatform:e};try{return await s("/collection",a)}catch(c){console.error(c)}},p=async(o,r,t,e)=>{const a={id:o,iduser:r,name:t,idplatform:e};try{await n("/collection",a)}catch(c){console.error(c)}},u=async(o,r)=>{const t={id:o,iduser:r};try{await l("/collection",t)}catch(e){console.error(e)}},y=async(o,r)=>{try{return await i("/collection",[o+"",r+""])||[]}catch(t){console.error(t)}},h={create:d,update:p,remove:u,fetch:y};export{h as C};
