"use strict";
//написать скрипт, который разрешает 
//кликать по кнопке не более 3 раз

const test = document.getElementById('test')
//реализовать замыкание!!!
let amount = 0; //closure
const btnHandler = () =>{
  //увеличиваем amount, выводим его в консоль
  //проверяем, если равен 3 -> удаляем обрабтчик
}
test.addEventListener('click', btnHandler);



const imagesDB = [
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Pembroke_Welsh_Corgi_in_Grass.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pembroke_Welsh_Corgi_dog.jpg/767px-Pembroke_Welsh_Corgi_dog.jpg",
  "https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BB%D1%88-%D0%BA%D0%BE%D1%80%D0%B3%D0%B8-%D0%BA%D0%B0%D1%80%D0%B4%D0%B8%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D0%BE%D0%B1%D0%B0%D1%87%D0%B8%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-159585672.jpg",
];

const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container button"
);
const img = document.querySelector(".slider-container .slider img");

const slider = new Slider(imagesDB);

const createSlideBtnHandler =
  (direction = "next") =>
  () => {
    slider.currentIndex = slider[direction === "next" ? "next" : "prev"];
    updateView();
  };

nextBtn.addEventListener("click", createSlideBtnHandler("next"));
prevBtn.addEventListener("click", createSlideBtnHandler("prev"));

function updateView() {
  img.setAttribute("src", slider.currentSlide);
}
updateView();
