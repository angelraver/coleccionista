import{p as m,d as y,e as o,g as c,f as l}from"./VRow-c0a7ebda.js";const d=async r=>{try{await m("/item",r)}catch(t){console.error(t)}},h=async(r,t,e,a,s)=>{const n={id:r,iduser:t,title:e,author:a,year:s};try{await y("/item",n)}catch(i){console.error(i)}},p=async(r,t)=>{try{await o("/item",{id:r,iduser:t})}catch(e){console.error(e)}},u=async(r,t,e)=>{try{return await c("/item",[r+"",t+"",e+""])||[]}catch(a){console.error(a)}},g=async r=>{try{return await l("/upload",r)}catch(t){console.error(t)}},w=async(r,t)=>{try{return await c("/itemimage",[r+"",t+""])||[]}catch(e){console.error(e)}},I=async(r,t,e)=>{try{await o("/image",{name:r,id:t,iduser:e})}catch(a){console.error(a)}},v={create:d,update:h,remove:p,fetch:u,uploadImage:g,fetchImages:w,removeImage:I};export{v as I};
