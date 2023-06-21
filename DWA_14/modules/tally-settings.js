/* eslint-disable import/extensions */
import { LitElement, html, css } from '../libs/lit-html.js';

class TallySettings extends LitElement {
  static properties = {
    status: {},
    max: {},
    min: {},
  };

  constructor() {
    super();
    this.max = undefined;
    this.min = undefined;
    this.status = 'open';
  }

  static styles = css`
  :host {
    --main-light-color: #D3D4D9;
    --main-dark-color: #252627;
    --main-accent-color: #60af7e;
  }

  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  dialog {
  border: 2px solid var(--main-light-color);
  border-radius: 8%;
  border-style: none;
  padding: 1rem;
  position: absolute;
  margin: auto;

  }

  .form {
    width: 200px;
    height: 180px;
  }

  .form__header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .form__content {
    display: flex;
    flex-direction: column;
  }

  .form__content_input{
    padding: 10px;
  }

  input {
    width: 120px;
    border-radius: 1rem;
  }

  .form__close {
    height: 25px;
    width: 25px;
    border: 1px solid var(--main-dark-color);
    border-radius: 50%;
  }

  .form__submit{
    margin: 10px;
    padding: .8rem 3rem .8rem 3rem;
    border: 1rem, solid, var(--main-dark-color);
    border-radius: 1.5rem;
    font-size: 1rem;
    color: var(--main-dark-color);
  }
  `;

  render() {
    return html`
    <dialog ${this.status} open>
    <div class="form">
      <div class="form__header">
        <h2>Tally Settings</h2>
        <button @click=${this.closeDialog} class="form__close">x</button>
      </div>

      <div class="form__content">
        <div class="form__content_input">
          <label for="max">Max.</label>
          <input type="number" id="max">
        </div>

        <div class="form__content_input">
          <label for="min">Min.</label>
          <input type="number" id="min">
        </div>

        <button class="form__submit">Save</button>
      </div>
    </div>
  </dialog>
    `;
  }

  // Doesn't work. Fix later.
  closeDialog() {
    this.status = 'closed';
  }
}

customElements.define('tally-settings', TallySettings);
