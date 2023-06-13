/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// @ts-check

import { BookCard } from './summary.js';

export const showPreview = () => {
  const summaryList = document.querySelectorAll('[data-preview]');

  [...summaryList].forEach((buttons) => {
    const summaryButton = buttons;

    summaryButton.addEventListener('click', () => {
      const summaryId = summaryButton.getAttribute('data-preview');

      const searchAndSelectBookInBooks = books.find((book) => book.id === summaryId);

      const {
        author, image, title, description, published,
      } = searchAndSelectBookInBooks;

      const year = new Date(published).getFullYear();
    });
  });
};
