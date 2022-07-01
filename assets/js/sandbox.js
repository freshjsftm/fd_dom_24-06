"use strict";

const pattern1 = new RegExp('\\b[A-Z][a-z]{2,12}\\b','gi');

const pattern2 = /^[0-9]{2,12}\b/g;

const str = '788.All 234234 my trouble 342 seemed so 432 far away';

if(pattern2.test(str)){
  console.log(pattern2)
}else{
  console.log(str)
}