import { galleryItems } from './gallery-items.js';

import SimpleLightboxJs from "../node_modules/simplelightbox/dist";
//import SimpleLightboxCss from "../node_modules/simplelightbox/dist/simple-lightbox.min.css";

var gallery = new SimpleLightBox({elements: '.gallery a'});

//const Lightbox = new SimpleLightbox('.gallery a',
//    {
//        loop: true,
//        captionType: 'alt',
//        captionDelay: 250
//    });

const imagesGallery = document.querySelector('.gallery');
const modalcontainerElem = document.querySelector('.image-modal-overlay');
const modalContentElem = document.querySelector('.image-modal');
const modalButtonClose = document.querySelector('.modal-button-close');
const modalButtonIcon = document.querySelector('.modal-button-icon');

//const newElement = document.createElement("li");
//newElement.classList.add("gallery__item");

//const newElementLink = document.createElement("a");
//newElementLink.classList.add("gallery__link");

//imagesGallery.append(newElement);
//newElement.append(newElementLink);

const imgElemtens = galleryItems.reduce((acum, item) =>
{
  return (acum += `<li class='gallery__item'><a class='gallery__link' href='#'><img class='gallery__image' src="${item.preview}" alt="${item.description}"/></a></li>`);
},
    '');
imagesGallery.insertAdjacentHTML('beforeend', imgElemtens);

imagesGallery.addEventListener('click', (event) =>
{
  if (event.target.nodeName !== 'IMG')
  {
    return;
  }
  modalcontainerElem.classList.add('visible');
  modalContentElem.innerHTML = '';
  modalContentElem.insertAdjacentHTML('beforeend', `<img class='image' src='${event.target.src}' alt='${event.target.alt}'/>`);
});
imagesGallery.addEventListener('keydown', (e) =>
{
    if (e.code === 'Escape')
    {
      modalcontainerElem.classList.remove('visible');
    }
});