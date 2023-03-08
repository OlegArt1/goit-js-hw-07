// Gallery

import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const listItems = [];

galleryItems.forEach((element) =>
{
    const galleryLink = document.createElement("a");

    const galleryImage = document.createElement("img");

    galleryLink.href = element.original;

    galleryLink.classList.add("gallery__link");

    galleryImage.classList.add("gallery__image");

    galleryImage.src = element.preview;

    galleryImage.setAttribute("title", element.description);

    galleryImage.alt = element.description;

    galleryLink.append(galleryImage);

    listItems.push(galleryLink);
});
gallery.append(...listItems);

new SimpleLightbox(".gallery a",
{
    captionDelay: 250,
});