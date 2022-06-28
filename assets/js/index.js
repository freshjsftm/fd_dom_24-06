"use strict";

const test = document.getElementById('test')

const typeBtn = document.createAttribute('type')
typeBtn.value = 'submit';
test.setAttributeNode(typeBtn);

const btnHandler = ({target, currentTarget}) =>{
  console.group()
  typeBtn.value = 'reset'; 
  console.log(target.setAttribute('title', '123'))
  console.log(target.innerText)
  console.log(target.textContent)
  console.log(target)//на ком произошло событие
  console.log(currentTarget)//чей обработчик отработал
  console.groupEnd();
}

test.addEventListener('click', btnHandler);
window.addEventListener('click', btnHandler);
document.addEventListener('click', btnHandler);
document.body.addEventListener('click', btnHandler);

//найти свойство, которое возвращает содержимое элемента

















// const imagesDB = [
//   "https://upload.wikimedia.org/wikipedia/commons/5/5e/Pembroke_Welsh_Corgi_in_Grass.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pembroke_Welsh_Corgi_dog.jpg/767px-Pembroke_Welsh_Corgi_dog.jpg",
//   "https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BB%D1%88-%D0%BA%D0%BE%D1%80%D0%B3%D0%B8-%D0%BA%D0%B0%D1%80%D0%B4%D0%B8%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D0%BE%D0%B1%D0%B0%D1%87%D0%B8%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-159585672.jpg",
// ];

// const [prevBtn, nextBtn] = document.querySelectorAll(
//   ".slider-container button"
// );
// const img = document.querySelector(".slider-container .slider img");

// const slider = new Slider(imagesDB);

// const createSlideBtnHandler =
//   (direction = "next") =>
//   () => {
//     slider.currentIndex = slider[direction === "next" ? "next" : "prev"];
//     updateView();
//   };

// nextBtn.addEventListener("click", createSlideBtnHandler("next"));
// prevBtn.addEventListener("click", createSlideBtnHandler("prev"));

// function updateView() {
//   img.setAttribute("src", slider.currentSlide);
// }
// updateView();


