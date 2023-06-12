// @ts-check

import { 
    authors,
    books,
} from './data.js';

import { 
    html,
} from './functions.js';

/**
 * Event function to show summary overlay after clicking preview button.
 * Add overlay information from the books object using template literals.
 * 
 * @param void
 * @returns no return.
 */
export const showPreview = () => {
    /**
     * Node list of all preview buttons.
     * @type {NodeListOf}
     */
    const summaryList = document.querySelectorAll('[data-preview]');

    [...summaryList].forEach(function (buttons) {
         
        /**
         * Individual preview button.
         * @type {HTMLElement}
         */
        let summaryButton = buttons;
        summaryButton.addEventListener('click', () => {

            /**
             * Gets book id from the html elemnet's id attribute.
             * @type {string}
             */
            let summaryId = summaryButton.getAttribute('data-preview');

            /**
             * Book object with specified id extracted from books array.
             * @type {Object}
             */
            let searchBooks = books.find((book) => book.id === summaryId);

            const { author, image, title, description, published } = searchBooks;

            /**
             * Year of book publication.
             * @type {number}
             */
            let year = new Date(published).getFullYear();

            html.preview.summaryBlur.src = `${image}`;
            html.preview.summaryImage.src = `${image}`;
            html.preview.summaryTitle.innerHTML = `${title}`;
            html.preview.summarySubTitle.innerHTML = `${authors[author]} (${year})`;
            html.preview.summaryDescription.innerHTML = `${description}`;

            html.preview.summaryOverlay.showModal();
        });
    });
    html.preview.summaryClose.addEventListener('click', () => {
        html.preview.summaryOverlay.close();
    });
};