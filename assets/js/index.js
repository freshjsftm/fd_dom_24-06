"use strict";

function handlePromise(promise){
  return promise.then((data)=>{
    console.log('Promise: ', data)
  })
}

const number = 777;

handlePromise(Promise.resolve(number))