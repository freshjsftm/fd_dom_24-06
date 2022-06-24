'use strict';

function btnHandler(){
  console.log('button is clicked')
}
//const [btn] = document.getElementsByTagName('button');
//console.log(btn)
//const btn = document.getElementById('btn');
const btn = document.querySelector('.btn+.btn');

const btns1 = document.getElementsByClassName('btn');
const btns2 = document.querySelectorAll('.btn');

//btn.addEventListener('click', btnHandler);