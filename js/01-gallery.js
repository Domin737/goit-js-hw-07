import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const createGalleryItemsMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
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
    })
    .join("");
};

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.innerHTML = galleryItemsMarkup;

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const sourceUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${sourceUrl}" width="800" height="600">
  `);
  instance.show();
}
console.log(galleryItems);
