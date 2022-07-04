'use strict';
const messages = [];
const form = document.getElementById('formId');
const messagesContainer = document.getElementById('messages');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const testValue = e.target.test.value.trim();
  const pattern = /^[A-Z][a-z]{2,12}$/;
  //files with extends: jpg, png, webp, JPG, PNG, WEBP
  //const pattern = /^.+\.(jpg|png|webp)$/i;
  if( !messages.includes(testValue) && pattern.test(testValue) ){
    messages.push(testValue);
    const pElem = createElement('p',{events:{'click':handleClickMessage}},testValue) ;  
    const btn = createElement('button',{},'x') ; 
    pElem.append(btn);  
    messagesContainer.append(pElem);
  }
  e.target.reset();
})

//добавить кнопку удаления для каждого абзаца с именем
//по клику на которую удaлять весь абзац со страницы
//удалять значение из массива

function handleClickMessage({target}){
  for (const p of document.getElementsByTagName('p')) {
    p.style.backgroundColor = '';
  }
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