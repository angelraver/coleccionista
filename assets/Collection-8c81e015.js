import{g as s,p as n,d as l,e as i}from"./VResponsive-e0b54abe.js";const p=async()=>{try{return await s("/collectionbkp",[])}catch(t){console.error(t)}},d=async(t,o,r,c=0)=>{const a={iduser:t,name:o,iditemtype:r,idplatform:c};try{return await n("/collection",a)}catch(e){console.error(e)}},u=async(t,o)=>{try{return await s("/collection",[t+"",o+""])||[]}catch(r){console.error(r)}},y=async(t,o)=>{const r={id:t,iduser:o};try{await l("/collection",r)}catch(c){console.error(c)}},h=async(t,o,r,c)=>{const a={id:t,iduser:o,name:r,idplatform:c};try{await i("/collection",a)}catch(e){console.error(e)}},w={backup:p,create:d,fetch:u,remove:y,update:h};export{w as C};
