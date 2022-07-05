"use strict";

const user = {
  name:"Elon",
  age:51,
  getName(){return this._name},
  isWife: true,
  children:['ch1','ch2'],
  addres:{
    country:'USA',
    town:{
      name:'NY',
      ok:123
    },
  },
  ukrPasport: null,
  petty: undefined,
  [Symbol('prop symbol')]: 'prop symbol',
}
console.log(user)
const serializeUser = JSON.stringify(user);
console.log(serializeUser)

const deserializeUser = JSON.parse(serializeUser)
console.log(deserializeUser)