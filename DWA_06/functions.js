//@ts-check

import { authors, books, BOOKS_PER_PAGE } from './data.js';

// DOM Data

/**
 * Html elements accessed via queryselector.
 * @type {object}
 */
export const html = {
    view: {
        mainHtml: document.querySelector('[data-list-items]'),
    },
    scroll: {
        moreButton: document.querySelector('[data-list-button]'),
    },
    preview: {
        summaryList: document.querySelectorAll('[data-preview]'),
        summaryOverlay: document.querySelector('[data-list-active]'),
        summaryBlur: document.querySelector('[data-list-blur]'),
        summaryImage: document.querySelector('[data-list-image]'),
        summaryTitle: document.querySelector('[data-list-title]'),
        summarySubTitle: document.querySelector('[data-list-subtitle]'),
        summaryDescription: document.querySelector('[data-list-description]'),
        summaryClose: document.querySelector('[data-list-close]'),
    },
    display: {
        settingsOverlay: document.querySelector('[data-settings-overlay]'),
        settingButton: document.querySelector('[data-header-settings]'),
        settingsTheme: document.querySelector('[data-settings-theme]'),
        settingsCancel: document.querySelector('[data-settings-cancel]'),
        settingsSubmit: document.querySelector('[data-settings-form]'),
    },
    search: {
        searchCancel: document.querySelector('[data-search-cancel]'),
        searchButton: document.querySelector('[data-header-search]'),
        searchOverlay: document.querySelector('[data-search-overlay]'),
        seacrhTitle: document.querySelector('[data-search-title]'),
        searchSubmit: document.querySelector('[data-search-form]'),
        searchAuthors: document.querySelector('[data-search-authors]'),
        searchGenres: document.querySelector('[data-search-genres]'),
        seachMessage: document.querySelector('[data-list-message]'),
    },
};

export const createBookButton = (child, books) => {
    for (const { author, id, image, title } of books.slice(0, BOOKS_PER_PAGE)) {
        const element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);
    
        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

        child.appendChild(element);
    };
    return child;
};

export const createMoreButton = (booksArray, page) => {
    html.scroll.moreButton.innerHTML = 
    `
        <span>Show more</span>
        <span class="list__remaining"> (${(booksArray.length - (page * BOOKS_PER_PAGE)) > 0 ? (booksArray.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `
    html.scroll.moreButton.disabled = (booksArray.length - (page * BOOKS_PER_PAGE)) <= 0;
};
