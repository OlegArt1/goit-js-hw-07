import { galleryItems } from './gallery-items.js';

const imagesGallery = document.querySelector('.gallery');

const newElement = document.createElement("div");
newElement.classList.add("gallery__item");

const newElementLink = document.createElement("a");
newElementLink.classList.add("gallery__link");

const modalcontainerElem = document.createElement('div');
modalcontainerElem.classList.add('image-modal-overlay');

const modalContentElem = document.createElement('div');
modalContentElem.classList.add('image-modal');

imagesGallery.append(newElement);
newElement.append(newElementLink);
imagesGallery.after(modalcontainerElem);
modalcontainerElem.append(modalContentElem);

const imgElemtens = galleryItems.reduce((acum, item) =>
{
  return (acum += `<a class='gallery__link' href='#'><img class='gallery__image' src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`);
}, '');
newElementLink.insertAdjacentHTML('beforeend', imgElemtens);

newElementLink.addEventListener('click', (event) =>
{
  if (event.target.nodeName !== 'IMG')
  {
    return;
  }
  modalcontainerElem.classList.add('visible');
  modalContentElem.innerHTML = '';
  modalContentElem.insertAdjacentHTML('beforeend', `<img class='image' src='${event.target.src}' alt='${event.target.alt}'/>`);
});
document.addEventListener('keydown', (e) =>
{
  if (e.code === 'Escape')
  {
    modalcontainerElem.classList.remove('visible');
  }
});