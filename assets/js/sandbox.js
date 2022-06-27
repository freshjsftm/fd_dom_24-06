"use strict";
/*
написать функцию  createAdder(n)
которая возвращает другую функцию
возвращенная функция должна принимать 
аргумент m  
и прибавлять его к n
*/
const createAdder = (n) => (m) => (n += m);
//debugger
const adder = createAdder(10);
console.log(adder(4));
console.log(adder(4));
console.log(adder(4));
