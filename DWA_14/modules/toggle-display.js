/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { LitElement, html, css } from '../libs/lit-html.js';

export class DisplayToggle extends LitElement {
  static properties = {
    mode: {},
  };

  constructor() {
    super();
    this.mode = '☾';
  }

  static styles = css`
  .switch__bg {
  background-color: var(--main-light-color);
  height: 2rem;
  width: 4rem;
  border-style: none;
  border-radius: 2rem;
}

.switch__button {
  color: var(--main-light-color);
  font-size: large;
  background-color: var(--main-dark-color);
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--main-light-color);
  border-radius: 50%;}
  `;

  render() {
    return html`
    <div class="switch">
        <div class="switch__bg">
          <button class="switch__button">${this.mode}</button>
        </div>
      </div>
    `;
  }
}

customElements.define('display-toggle', DisplayToggle);
