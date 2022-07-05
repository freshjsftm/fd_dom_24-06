"use strict";

fetch('./assets/js/data.json')
  .then((response)=>response.json())
  .then((data)=>{
    console.log(data.map((item)=>item.name).join(', '))
    
  })
  .catch((error)=>console.log(error))
  .finally(()=>console.log('finally'))


