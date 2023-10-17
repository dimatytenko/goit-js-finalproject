export function createGalleryMarkup(galleryItems, getMurkup) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return getMurkup(preview, original, description);
    })
    .join("");
}

export const getGalleryMurkup = (preview, original, description) => {
  return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
};

export const getLightboxMurkup = (preview, original, description) => {
  return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
      `;
};

export function onGalleryContainerClick(event, openPreview) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }

  const originalImageURL = event.target.dataset.source;

  openPreview(originalImageURL);
}
