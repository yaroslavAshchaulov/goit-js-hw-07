import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc, { preview, original, description }) => acc += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`, '');
list.insertAdjacentHTML('beforeend', markup);

list.addEventListener('click', onClickGallery)

function onClickGallery(evt) {
  evt.preventDefault()
  if (!evt.target.classList.contains('gallery')) {
    let originalGallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}
