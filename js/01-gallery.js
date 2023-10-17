import { galleryItems } from "./gallery-items.js";
// Change code below this line

import {
  createGalleryMarkup,
  getGalleryMurkup,
  onGalleryContainerClick,
} from "./functions.js";

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems, getGalleryMurkup);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", (e) =>
  onGalleryContainerClick(e, openPreview)
);

function openPreview(url) {
  const instance = basicLightbox.create(
    `
    <img src="${url}" width="800" height="600">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", onKeyPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onKeyPress);
      },
    }
  );

  instance.show();

  function onKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
