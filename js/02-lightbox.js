import { galleryItems } from "./gallery-items.js";
// Change code below this line

import {
  createGalleryMarkup,
  getLightboxMurkup,
  onGalleryContainerClick,
} from "./functions.js";

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems, getLightboxMurkup);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", (e) =>
  onGalleryContainerClick(e, openPreview)
);

function openPreview(url) {
  const instance = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  instance.open();
}
