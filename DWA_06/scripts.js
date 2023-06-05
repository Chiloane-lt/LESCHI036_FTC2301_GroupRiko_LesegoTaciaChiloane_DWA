//@ts-check

// Imports from other files.

import { 
    BOOKS_PER_PAGE,
    authors,
    genres,
    books,
} from "./data.js";

import { 
    html,
    createBookButton,
    createMoreButton
} from "./functions.js";

let page = 1;
let matches = books;

const starting = document.createDocumentFragment();

createBookButton(starting, matches);

html.view.mainHtml.appendChild(starting);

const genreHtml = document.createDocumentFragment();
const firstGenreElement = document.createElement('option');
firstGenreElement.value = 'any';
firstGenreElement.innerText = 'All Genres';
genreHtml.appendChild(firstGenreElement);

for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genreHtml.appendChild(element);
};

html.search.searchGenres.appendChild(genreHtml);

const authorsHtml = document.createDocumentFragment();
const firstAuthorElement = document.createElement('option');
firstAuthorElement.value = 'any';
firstAuthorElement.innerText = 'All Authors';
authorsHtml.appendChild(firstAuthorElement);

for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    authorsHtml.appendChild(element);
};

html.search.searchAuthors.appendChild(authorsHtml);

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.display.settingsTheme.value = 'night'
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    html.display.settingsTheme.value.value = 'day';
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}

html.scroll.moreButton.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;

html.search.searchCancel.addEventListener('click', () => {
    html.search.searchOverlay.open = false;
});

html.display.settingsCancel.addEventListener('click', () => {
    html.display.settingsOverlay.open = false;
});

html.search.searchButton.addEventListener('click', () => {
    html.search.searchOverlay.open = true ;
    html.search.seacrhTitle.focus();
});

html.display.settingButton.addEventListener('click', () => {
    html.display.settingsOverlay.open = true; 
});

html.preview.summaryClose.addEventListener('click', () => {
    html.preview.summaryOverlay.open = false;
});

html.display.settingsSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);

    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    };
    
    html.display.settingsOverlay.open = false;
});

html.search.searchSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    for (const book of books) {
        let genreMatch = filters.genre === 'any';

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true };
        };

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            result.push(book)
        };
    };

    page = 1;
    matches = result;

    if (result.length < 1) {
        html.search.seachMessage.classList.add('list__message_show')
    } else {
        html.search.seachMessage.classList.remove('list__message_show')
    };

    html.view.mainHtml.innerHTML = '';
    const newItems = document.createDocumentFragment();

    createBookButton(newItems, result);

    html.view.mainHtml.appendChild(newItems)
    html.scroll.moreButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1;

    createMoreButton(matches, page);

    window.scrollTo({top: 0, behavior: 'smooth'});
    html.search.searchOverlay.open = false
});

html.scroll.moreButton.addEventListener('click', () => {
    const fragment = document.createDocumentFragment();

    createBookButton(fragment, matches);
    createMoreButton(matches, page);

    html.view.mainHtml.appendChild(fragment);
    page += 1;
});

html.view.mainHtml.addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active = null

    for (const node of pathArray) {
        if (active) break;

        if (node?.dataset?.preview) {
            let result = null;
    
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook
            };
        
            active = result;
        };
    };
    
    if (active) {
        html.preview.summaryOverlay.open = true
        html.preview.summaryBlur.src = active.image
        html.preview.summaryImage.src = active.image
        html.preview.summaryTitle.innerText = active.title
        html.preview.summarySubTitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        html.preview.summaryDescription.innerText = active.description
    };
});