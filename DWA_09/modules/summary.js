/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

// @ts-check

const template = document.createElement('template');
template.innerHTML = `
  <style>
    * {
    box-sizing: border-box;
    }
    .overlay {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-width: 0;
      box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
      animation-name: enter;
      animation-duration: 0.6s;
      z-index: 10;
      background-color: rgba(var(--color-light), 1);
    }
    
    @media (min-width: 30rem) {
      .overlay {
        max-width: 30rem;
        left: 0%;
        top: 0;
        border-radius: 8px;;
      }
    }
    .overlay__row {
      display: flex;
      gap: 0.5rem;
      margin: 0 auto;
      justify-content: center;
    }
    
    .overlay__button {
      font-family: Roboto, sans-serif;
      background-color: rgba(var(--color-blue), 0.1);
      transition: background-color 0.1s;
      border-width: 0;
      border-radius: 6px;
      height: 2.75rem;
      cursor: pointer;
      width: 50%;
      color: rgba(var(--color-blue), 1);
      font-size: 1rem;
      border: 1px solid rgba(var(--color-blue), 1);
    }
    
    .overlay__button_primary {
      background-color: rgba(var(--color-blue), 1);
      color: rgba(var(--color-force-light), 1);
    }
    
    .overlay__button:hover {
      background-color: rgba(var((var(--color-blue))), 0.2);
    }
    
    .overlay__button_primary:hover {
      background-color: rgba(var(--color-blue), 0.8);
      color: rgba(var(--color-force-light), 1);
    }
    
    .overlay__title {
      padding: 1rem 0 0.25rem;
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1;
      letter-spacing: -0.1px;
      max-width: 25rem;
      margin: 0 auto;
      color: rgba(var(--color-dark), 0.8)
    }
    
    .overlay__blur {
      width: 100%;
      height: 200px;
      filter: blur(10px);
      opacity: 0.5;
      transform: scale(2);
    }
    
    .overlay__image {
      max-width: 10rem;
      position: absolute;
      top: 1.5m;
      left: calc(50% - 5rem);
      border-radius: 2px;
      box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    }
    
    .overlay__data {
      font-size: 0.9rem;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      color: rgba(var(--color-dark), 0.8)
    }
    
    .overlay__data_secondary {
      color: rgba(var(--color-dark), 0.6)
    }
    
    .overlay__content {
      padding: 2rem 1.5rem;
      text-align: center;
      padding-top: 3rem;
    }
    
    .overlay__preview {
      overflow: hidden;
      margin: -1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>

  <dialog class="overlay" data-list-active>
    <div class="overlay__preview"><img class="overlay__blur" data-list-blur src="" /><img class="overlay__image"
        data-list-image src="" /></div>
    <div class="overlay__content">
      <h3 class="overlay__title" data-list-title></h3>
      <div class="overlay__data" data-list-subtitle></div>
      <p class="overlay__data overlay__data_secondary" data-list-description></p>
    </div>

    <div class="overlay__row">
      <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
    </div>
</dialog>
  `;

export class BookCard extends HTMLElement {
  shadow = this.attachShadow({ mode: 'open' });

  constructor(book) {
    super();
    const { content } = template;

    const {
      author, image, title, description, published,
    } = book;

    this.shadow.appendChild(content.cloneNode(true));

    this.shadow.querySelector('[data-list-blur]').src = `${image}`;
    this.shadow.querySelector('[data-list-image]').src = `${image}`;
    this.shadow.querySelector('[data-list-title]').innerText = `${title}`;
    this.shadow.querySelector('[data-list-subtitle]').innerText = `${author} (${published})`;
    this.shadow.querySelector('[data-list-description]').innerText = `${description}`;
  }

  closeModal = () => {
    this.shadow.querySelector('[data-list-active]')?.close();
  };

  connectedCallback() {
    // Check if container has active attribute. Open modal if true. - check
    // Listen for close button. - check
    // If close is clicked close modal. - check
    // Delete entire buton. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Fix all ESLint errors. What are question marks?
    this.shadow.querySelector('[data-list-active]').showModal();
    this.shadow.querySelector('[data-list-close]')?.addEventListener('click', this.closeModal);
  }

  disconnectedCallback() {
    this.shadow.querySelector('[data-list-close]')?.removeEventListener('click', this.closeModal);
  }
}

customElements.define('book-summary', BookCard);
export default BookCard;
