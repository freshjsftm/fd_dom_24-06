"use strict";

const [openBtn, closeBtn] = document.querySelectorAll(".btn");

const btnHandler = () => {
  let buffer = openBtn.textContent;
  openBtn.textContent = closeBtn.textContent;
  closeBtn.textContent = buffer;
};

openBtn.addEventListener("click", btnHandler);
closeBtn.addEventListener("click", btnHandler);

