import{p as n,f as i,h as m,g as y}from"./VRow-3bda51f2.js";const l=async r=>{try{await n("/item",r)}catch(t){console.error(t)}},h=async(r,t,e,o,a)=>{const c={id:r,iduser:t,title:e,author:o,year:a};try{await i("/item",c)}catch(s){console.error(s)}},p=async(r,t)=>{try{await m("/item",{id:r,iduser:t})}catch(e){console.error(e)}},d=async(r,t,e)=>{try{return await y("/item",[r+"",t+"",e+""])||[]}catch(o){console.error(o)}},w={create:l,update:h,remove:p,fetch:d};export{w as I};
