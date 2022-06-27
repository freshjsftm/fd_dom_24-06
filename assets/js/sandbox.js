"use strict";

function createCounter(initial) {
  let i = initial;//closure
  return {
    increment(){
      return ++i;
    },
    decrement(){
      return --i;
    }
  }
}
let i = 44;
const counter1 = createCounter(10);
//debugger
counter1.increment()
counter1.increment()
console.log(counter1.increment())

const counter2 = createCounter(100);