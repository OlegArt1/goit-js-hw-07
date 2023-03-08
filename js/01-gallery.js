// Gallery

import { galleryItems } from "./gallery-items.js";

const imageGallery = document.querySelector("div.gallery");

const modalContainerElement = document.createElement("div");

const modalContentElement = document.createElement("div");

modalContainerElement.classList.add("image-modal-overlay");

modalContentElement.classList.add("image-modal");

imageGallery.after(modalContainerElement);

modalContainerElement.append(modalContentElement);

imageGallery.setAttribute("style", "margin-top: 50px; margin-bottom: 50px;");

const imagesElemtens = galleryItems.reduce((acum, item) =>
{
    return (acum += "<div class='gallery__item'>" +
                    
                    "<a class='gallery__link' href='#'>" +
                    
                    `<img class='gallery__image' src='${item.preview}' style='border: 2px solid black;' data-source='${item.original}' alt='${item.description}'/>` +
                    
                    "</a></div>");
}, '');

imageGallery.insertAdjacentHTML('beforeend', imagesElemtens);

imageGallery.addEventListener('click', (event) =>
{
    if (event.target.nodeName !== 'IMG')
    {
        return;
    }
    modalContainerElement.classList.add('visible');
    
    modalContentElement.innerHTML = '';
    
    modalContentElement.insertAdjacentHTML('beforeend', `<img class='image' src='${event.target.src}' alt='${event.target.alt}'/>`);
});
document.addEventListener('keydown', (e) =>
{
    if (e.code === 'Escape')
    {
        modalContainerElement.classList.remove('visible');
    }
});