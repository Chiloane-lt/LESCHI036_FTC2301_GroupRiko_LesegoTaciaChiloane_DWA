/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// @ts-check

import { authors, books } from './data.js';
import { BookCard } from './summary.js';
import { getHtml } from './DOM.js';

/**
 * @param {*} bookId
 * @returns {Element}
 */
export const createSummary = (bookId) => {
  /**
   * @type {import('./data.js').book}
   */
  const extractedBookObject = books.find((book) => book.id === bookId);

  const {
    author: authorId, image, title, description, published: year,
  } = extractedBookObject;

  const author = authors[authorId];
  const published = new Date(year).getFullYear();

  const bookAsFixed = {
    author,
    image,
    title,
    description,
    published,
  };
  const summaryPreviewButton = new BookCard(bookAsFixed);
  return summaryPreviewButton;
};

export const showPreview = () => {
  const summaryList = document.querySelectorAll('book-button');

  [...summaryList].forEach((button) => {
    button.addEventListener('click', () => {
      const summaryId = button.getAttribute('data-preview');

      const bookSummary = createSummary(summaryId);
      getHtml.view.mainHtml.insertAdjacentElement('afterend', bookSummary);
    });
  });
};
