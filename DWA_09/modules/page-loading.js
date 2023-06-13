/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
// @ts-check

import { html } from './DOM.js';
import { BOOKS_PER_PAGE, authors, books } from './data.js';
import { BookButton } from './preview.js';

let page = 0;

/**
 * Creates an html fragment given a book object.
 * An input book object is selected and the author, id, title and image are extracted
 * via destructuring.
 * A template literate is used to create an html preview of the book.
 *
 * @param {import('./data.js').book} book is an object array with book properties.
 * @returns {HTMLElement}
 * */
export const createPreview = (book) => {
  const newElement = new BookButton(book);
  return newElement;
};

/**
 * Creates a slice of specified length from the database of books.
 * This slice is then converted into a preview for each book using the createPreview
 * function.
 * The previe is appended to an htlm fragment and this fragment is returned.
 *
 * @param {array} array is an object array of books with properties.
 * @param {number} start is a number denoting where to start slice.
 * @param {number} end is a number denoting where to end slice.
 * @return {DocumentFragment}
 *
 */
export const createPreviewsFragment = (array, start, end) => {
  const booksSlice = array.slice(start, end);

  const previewFragment = document.createDocumentFragment();

  for (let i = 0; i < booksSlice.length; i += 1) {
    const {
      author, image, title, id,
    } = booksSlice[i];
    const authorName = authors[author];

    const preview = {
      authorName,
      id,
      image,
      title,
    };
    previewFragment.appendChild(createPreview(preview));
  }
  return previewFragment;
};

/**
 * Determines the number of pages to travese on the app based on the total
 * number of books available in the database.
 *
 * @param {array} array with total number of books.
 * @param {number} currentPage current page.
 * @returns {number}
 */
export const updateRemaining = (array, currentPage) => {
  const remaining = array.length - (currentPage * BOOKS_PER_PAGE);
  return remaining;
};

export const initialPageLoad = () => {
  if (!books || !Array.isArray(books)) {
    throw new Error('Source required');
  }
  const fragment = createPreviewsFragment(books, 0, 36);
  // Add check to see if fragment created
  html.view.mainHtml.appendChild(fragment);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  page += 1;
};

export const createShowMoreButton = () => {
  const booksRemaining = updateRemaining(books, page);
  html.scroll.moreButton.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${booksRemaining > 0 ? booksRemaining : 0})</span>
`;
};

export const showMorePages = () => {
  html.scroll.moreButton.addEventListener('click', () => {
    let booksRemaining = updateRemaining(books, page);
    if (booksRemaining <= 0) {
      // eslint-disable-next-line no-unused-expressions
      html.scroll.moreButton.disabled;
    } else {
      const start = page * BOOKS_PER_PAGE;
      const end = (page + 1) * BOOKS_PER_PAGE;
      const newFragment = createPreviewsFragment(books, start, end);

      html.view.mainHtml.appendChild(newFragment);
      page += 1;
      booksRemaining = updateRemaining(books, page);
      createShowMoreButton();
    }
  });
};
