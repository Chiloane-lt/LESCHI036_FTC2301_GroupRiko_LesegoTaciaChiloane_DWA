/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
// @ts-check

import { html } from './DOM.js';
import { authors, books } from './data.js';

/**
 * Creates an html fragment given a book object.
 * An input book object is selected and the author, id, title and image are extracted
 * via destructuring.
 * A template literate is used to create an html preview of the book.
 *
 * @param {import('./data').book} book is an object array with book properties.
 * @returns {HTMLElement}
 * */
export const createPreview = (book) => {
  const {
    author, image, title, id,
  } = book;

  const newElement = document.createElement('button');
  newElement.className = 'preview';
  newElement.setAttribute('data-preview', id);

  newElement.innerHTML = `
        <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${author}</div>
            </div>
        `;

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

export const initialPageLoad = () => {
  if (!books || !Array.isArray(books)) {
    throw new Error('Source required');
  }
  const fragment = createPreviewsFragment(books, 0, 36);
  // Add check to see if fragment created
  html.view.mainHtml.appendChild(fragment);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
