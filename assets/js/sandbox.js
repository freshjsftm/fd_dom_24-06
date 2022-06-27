'use strict';

let value = 10;
function log(){
  console.log('function log: ', value)
}

function wrapper(){
  let value = 20;
  console.log('function wrapper: ', value)//20

  log();//10
}
wrapper();

console.log('after: ', value)
