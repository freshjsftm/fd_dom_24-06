"use strict";

const cardsContainer = document.getElementById('cards-container');

const HTMLCollectionActors = actors.map((actor)=>createActorsCard(actor));

function createActorsCard(actor){
  const HTMLCard = document.createElement('li');
  HTMLCard.classList.add('card-wrapper');

  const cardContainer = document.createElement('article');
  cardContainer.classList.add('card-container');

  const cardPhotoWrapper = document.createElement('div');
  cardPhotoWrapper.classList.add('card-photo-wrapper');

  const cardInitials = document.createElement('div');
  cardInitials.classList.add('card-initials');
  cardInitials.style.backgroundColor = stringToColour(actor.name);
  cardInitials.append(document.createTextNode(actor.name[0]));//HW

  const cardPhoto = document.createElement('img');
  cardPhoto.classList.add('card-photo');
  cardPhoto.setAttribute('src', actor.photo);
  cardPhoto.setAttribute('alt', actor.name);
  cardPhoto.addEventListener('error', handlePhotoError)

  cardPhotoWrapper.append(cardInitials, cardPhoto)

  const cardName = document.createElement('h2');
  cardName.classList.add('card-name');
  cardName.append(document.createTextNode(actor.name));

  const cardInfo = document.createElement('p');
  cardInfo.classList.add('card-info');
  cardInfo.append(document.createTextNode(actor.birthdate));

  cardContainer.append(cardPhotoWrapper, cardName, cardInfo);
  HTMLCard.append(cardContainer);
  return HTMLCard;
} 

cardsContainer.append(...HTMLCollectionActors);

function handlePhotoError({target}){
  target.remove();
}

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).slice(-2);
  }
  return colour;
}
