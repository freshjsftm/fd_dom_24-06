"use strict";

function loadImage(pathSrc) {
  const image = new Image(); //<img >
  image.src = pathSrc; //load||error //<img src='pathSrc'>
  return new Promise((resolve, reject) => {
    image.addEventListener("load", 
    () => {
      resolve(image);
    });
    image.addEventListener("error", 
    () => {
      reject(new Error("path invalid"));
    });
  });
}

loadImage("https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg")
  .then((data)=>{
    document.body.append(data)
  })
  .catch((error)=>{
    document.body.append(error)
  })
