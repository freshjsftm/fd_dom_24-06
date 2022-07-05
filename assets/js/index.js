"use strict";

fetch('./assets/js/data.json')
  .then((response)=>response.json(), 
    (error)=>console.log(error))
  .then((data)=>console.table(data),
  (error)=>console.log(error))