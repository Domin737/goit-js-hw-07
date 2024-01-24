import { galleryItems } from "./gallery-items.js";

// Deklaracja zmiennej dla instancji okna modalnego
let modalInstance;

const galleryContainer = document.querySelector(".gallery");

// Funkcja tworząca znaczniki HTML dla elementów galerii
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

// Nasłuchiwanie kliknięć na elementach galerii
galleryContainer.addEventListener("click", onGalleryItemClick);

// Funkcja obsługująca kliknięcie w obraz galerii
function onGalleryItemClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const sourceUrl = event.target.dataset.source;

  modalInstance = basicLightbox.create(
    `<img src="${sourceUrl}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  modalInstance.show();
}

// Funkcja obsługująca naciśnięcie klawisza Escape
function onEscKeyPress(e) {
  if (e.key === "Escape") {
    modalInstance.close(); // Zamknięcie okna modalnego
  }
}

// Logowanie obiektów z galerii dla celów debugowania
console.log(galleryItems);
