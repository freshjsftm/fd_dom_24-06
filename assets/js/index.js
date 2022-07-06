"use strict";
try{
  const userInput = prompt()
  if(isNaN(Number(userInput))){
    throw new TypeError('must be number')
  }
}catch {
  console.log('err')
}finally{
  console.log('info')
}

//synchronous
// try {} catch {}
// try {} finally{}
// try {} catch {} finally{}

console.log("start");
try {
  console.log("try1");
  //throw new Error("error1");
  console.log("try2");
} catch {
  console.log("catch error");
} finally {
  console.log("finally");
}

console.log("end");
