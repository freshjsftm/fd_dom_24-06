"use strict";

fetch('./assets/js/data.json')
.then((response)=>response.json())
.then((data)=>{
  console.log(data);
  if(data.length>2){
    throw new Error('must be two')
  }
})
.catch((error)=>{
  document.body.append('500')
  if(error instanceof TypeError){
    console.log(error.message, ', check the path!')
  }else if(error instanceof SyntaxError){
    console.log(error.message, ', check the coma!')
  }else{
    console.log(error.message, '!!!!')
  }
})
.finally(()=>{console.log('finally')})

