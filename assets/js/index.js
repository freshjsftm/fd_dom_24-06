"use strict";

const myFirstPromise = new Promise(executor);
function executor(resolve, reject){
  Math.random()>0.5? resolve(12) : reject('error');
}
//console.log(myFirstPromise)
myFirstPromise
.then((data)=>console.log('resolve:', data))
.catch((error)=>console.log('rejext:', error))


function timeout(ms){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{Math.random()>0.5? resolve(12) : reject(0)}, ms)
  })
}
timeout(5000)
  .then((d)=>console.log(d))
  .catch((err)=>console.log(err))
  .finally(()=>console.log(3))




// fetch('./assets/js/data.json')
//   .then((response)=>response.json())
//   .then((data)=>{
//     console.log(data.map((item)=>item.name).join(', '))
    
//   })
//   .catch((error)=>console.log(error))
//   .finally(()=>console.log('finally'))


