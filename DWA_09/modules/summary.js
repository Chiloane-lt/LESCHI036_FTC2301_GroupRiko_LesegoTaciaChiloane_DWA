/* eslint-disable import/extensions */
// @ts-check

import { html } from './DOM.js';
import { authors, books } from './data.js';

/**
 * Creates a book summary preview with title, author, year of publication and short blurb.
 * @param {string} bookId - ID of book whose summary preview will be created. Used to find
 * book inside the books array since all books have a unique id.
 */
export function createPreview(bookId) {
  /**
         * Book object with specified id extracted from books array.
         * @type {Object}
         */
  const bookById = books.find((book) => book.id === bookId);

  const {
    author, image, title, description, published,
  } = bookById;

  /**
       * Year of book publication.
       * @type {number}
       */
  const year = new Date(published).getFullYear();
  html.preview.summaryBlur.src = `${image}`;
  html.preview.summaryImage.src = `${image}`;
  html.preview.summaryTitle.innerHTML = `${title}`;
  html.preview.summarySubTitle.innerHTML = `${authors[author]} (${year})`;
  html.preview.summaryDescription.innerHTML = `${description}`;
}

/**
 * Opens the oreview overlay.
 */
export function openPreview() {
  html.preview.summaryOverlay.showModal();
}

/**
 * Closes the preview overlay.
 */
export function closePreview() {
  html.preview.summaryClose.addEventListener('click', () => {
    html.preview.summaryOverlay.close();
  });
}

/**
 * Iterates through a node list of all book buttons and adds an event listener for `click`.
 * Handles the event by executing `createPreview`, `openPreviw` and `closePreview`.
 */
export function showPreview() {
  /**
   * Node list of all preview buttons.
   * @type {NodeListOf<HTMLButtonElement>}
   */
  const summaryList = document.querySelectorAll('[data-preview]');

  [...summaryList].forEach((buttons) => {
    /**
     * Individual preview button.
     * @type {HTMLElement}
     */
    const summaryButton = buttons;
    summaryButton.addEventListener('click', () => {
      /**
       * Gets book id from the html elemnet's id attribute.
       * @type {string}
       */
      const summaryId = summaryButton.getAttribute('data-preview');
      createPreview(summaryId);
      openPreview();
      closePreview();
    });
  });
}
