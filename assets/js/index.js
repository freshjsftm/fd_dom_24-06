"use strict";

// const promise1 = fetch('./assets/js/data.json');
// console.log(promise1)

// promise1.then((response)=>{
//   console.log(response)
//   const dataJson = response.json();
//   console.log(dataJson)
//   dataJson.then((data)=>{
//     console.table(data)
//   })
// })

fetch('./assets/js/data.json')
  .then((response)=>{console.log(response); 
    return response.json()})
  .then((data)=>console.table(data))