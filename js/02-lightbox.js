import { galleryItems } from "./gallery-items.js";
// Change code below this line

import { createGalleryMarkup, getLightboxMurkup } from "./functions.js";

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems, getLightboxMurkup);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
