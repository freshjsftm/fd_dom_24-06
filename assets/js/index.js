"use strict";

const cardsContainer = document.getElementById('cards-container');

const HTMLCollectionActors = actors.map((actor)=>createActorsCard(actor));

function createActorsCard(actor){
  const HTMLCard = document.createElement('li');
  HTMLCard.classList.add('card-wrapper');

  const cardContainer = document.createElement('article');
  cardContainer.classList.add('card-container');

  const cardPhoto = document.createElement('img');
  cardPhoto.classList.add('card-photo');
  cardPhoto.setAttribute('src', actor.photo);
  cardPhoto.setAttribute('alt', actor.name);

  const cardName = document.createElement('h2');
  cardName.classList.add('card-name');
  cardName.append(document.createTextNode(actor.name));

  const cardInfo = document.createElement('p');
  cardInfo.classList.add('card-info');
  cardInfo.append(document.createTextNode(actor.birthdate));

  cardContainer.append(cardPhoto, cardName, cardInfo);
  HTMLCard.append(cardContainer);
  return HTMLCard;
} 

cardsContainer.append(...HTMLCollectionActors);