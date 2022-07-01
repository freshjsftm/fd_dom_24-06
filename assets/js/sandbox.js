"use strict";

// const pattern1 = new RegExp('\\b[A-Z][a-z]{2,12}\\b','gi');
// const pattern2 = /[0-9]{5,12}\b/g;

const pattern2 =/\b(\d{4})([a-z]+)\b/g;
const str = '788.All 1234ddd my trouble 1956ddd seemed so 432 far away';
//'788.All 1234year my trouble 1956year seemed so 432 far away';
// if(pattern2.test(str)){
//   console.log(pattern2)
// }else{
//   console.log(str)
// }

const newStr = str.replace(pattern2, '$2: $1')
console.log(newStr)