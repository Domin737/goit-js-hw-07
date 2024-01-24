import { galleryItems } from "./gallery-items.js";

// Znalezienie kontenera galerii w dokumencie HTML
const galleryContainer = document.querySelector(".gallery");

// Funkcja do tworzenia znacznika HTML dla każdego elementu galerii
const createGalleryItemsMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `;
    })
    .join("");
};

// Generowanie i wstawianie znaczników galerii do HTML
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.innerHTML = galleryItemsMarkup;

// Inicjalizacja biblioteki SimpleLightbox po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  new SimpleLightbox(".gallery a", {
    captionsData: "alt", // Użycie tekstu z atrybutu alt jako podpisu
    captionDelay: 250, // Opóźnienie pojawienia się podpisu
  });
});

console.log(galleryItems);
