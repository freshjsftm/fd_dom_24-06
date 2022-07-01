'use strict';
const messages = [];
const form = document.getElementById('formId');
const messagesContainer = document.getElementById('messages');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const testValue = e.target.test.value.trim();
  if( !messages.includes(testValue) && testValue ){
    messages.push(testValue);     
    messagesContainer.append(createElement('p',{events:{'click':handleClickMessage}},testValue));
  }
  e.target.reset();
})

function handleClickMessage({target}){
  target.style.backgroundColor = 'pink';
}

function createElement(tag, { classNames = [], attributes = {}, events={} }, ...children) {
  const element = document.createElement(tag);
  if (classNames.length) {
    element.classList.add(...classNames);
  }
  for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
    element.setAttribute(nameAttr, valueAttr);
  }
  for (const [typeEvent, handleEvent] of Object.entries(events)) {
    element.addEventListener(typeEvent, handleEvent);
  }
  element.append(...children);
  return element;
}