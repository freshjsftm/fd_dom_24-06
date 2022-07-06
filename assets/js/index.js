"use strict";

const list = document.getElementById('list');
list.addEventListener('click', ({target})=>{
  if(target===list){return;}
  target.innerText += '!!!'
})