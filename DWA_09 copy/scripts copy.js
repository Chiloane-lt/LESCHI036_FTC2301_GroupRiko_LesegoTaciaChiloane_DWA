/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
// @ts-check

import { authors, books } from './modules/data.js';

const {
  author, image, title, description, published,
} = books[2];

const year = new Date(published).getFullYear();

class BookCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="overlay" data-list-active>
        <div class="overlay__preview"><img class="overlay__blur" data-list-blur src="${image}" /><img class="overlay__image"
            data-list-image src="${image}" /></div>
        <div class="overlay__content">
          <h3 class="overlay__title" data-list-title>${title}</h3>
          <div class="overlay__data" data-list-subtitle>${authors[author]} (${year})</div>
          <p class="overlay__data overlay__data_secondary" data-list-description>${description}</p>
        </div>

        <div class="overlay__row">
          <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
        </div>
    </div>
    `;
  }
}

window.customElements.define('book-card', BookCard);
