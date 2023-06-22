/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import { LitElement, html, css } from '../libs/lit-html.js';

class MyCounter extends LitElement {
  get _inputMax() {
    return (this.___inputMax ??= this.renderRoot?.querySelector('.limit__max') ?? null);
  }

  get _inputMin() {
    return (this.___inputMin ??= this.renderRoot?.querySelector('.limit__min') ?? null);
  }

  static properties = {
    tally: { type: Number },
    maximum: { type: Number },
    minimum: { type: Number },
  };

  constructor() {
    super();
    this.tally = 0;
    this.maximum = '';
    this.minimum = '';
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

  .container{
    background-color: var(--main-dark-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-bottom: 10rem;
  }

  .tally {
    color: var(--main-light-color);
    width: 250px;
    border: 2px solid var(--main-light-color);
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .tally__title{
    margin: 5px 5px 10px 5px;
  }

  .tally__count {
    width: 100%;
    margin: auto;
    background-color: var(--main-accent-color);
    border-radius: 1rem;
    padding: 1.5rem;
    font-size: 4rem;
  }

  .tally__buttons_container {
    padding: 1rem;
  }

  .tally-settings {
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

  .limit {
    height: 30px;
    width: 80px;
    border-radius: 1rem;
  }

  .form__close {
    height: 25px;
    width: 25px;
    border: 1px solid var(--main-dark-color);
    border-radius: 50%;
  }

  .form__submit{
    height: 30px;
    width: 30px;
    border: 1px solid var(--main-dark-color);
    border-radius: 40%;
    margin-left: 15px;
  }

  .reset-dialog {
    position: absolute;
    margin: auto;
    border-style: none;
    background-color: #74747400;
  }
  .reset__message {
    background-color: var(--main-light-color);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid var(--main-light-color);
    border-radius: 8%;
    padding: 1rem;
    width: 200px;
    height: 130px;
  }

  .reset__message_header{
    display: flex;
    justify-content: space-between;
  }

  .reset__message_close{
    height: 25px;
    width: 25px;
    border: 1px solid var(--main-dark-color);
    border-radius: 50%;
  }

  .tally__buttons {
    font-size: 1rem;
    color: var(--main-dark-color);
    width: 2rem;
    height: 2rem;
    border: .2rem, solid, var(--main-dark-color);
    border-radius: 50%;
    margin: 10px;
  }

  .buttons__container {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }

  .buttons_tally {
    padding: .5rem 3rem .5rem 3rem;
    border: 1rem, solid, var(--main-dark-color);
    border-radius: 1.5rem;
    font-size: 2rem;
    color: var(--main-dark-color);
  }
  `;

  render() {
    return html`
      <div class="container">
        <div class="tally">
          <h1 class="tally__title">Counter:</h1>
          <h1 class="tally__count">${this.tally}</h1>
          <div class="tally__buttons_container">
          <button @click=${this.reset} class="tally__buttons">↻</button>
          <button @click=${this.showSettingsModal} class="tally__buttons">⚙️</button>
          </div>
      </div>

      <dialog class="tally-settings">
        <form class="form">
          <div class="form__header">
            <h2>Tally Settings</h2>
            <button @click=${this.closeSettingsDialog} class="form__close">x</button>
          </div>

          <div class="form__content">
            <div class="form__content_input">
              <label for="max">Max.</label>
              <input type="number" id="max" class="limit limit__max">
              <button @click=${this.submitMax} type="submit" class="form__submit">✔</button>
            </div>

            <div class="form__content_input">
              <label for="min">Min.</label>
              <input type="number" id="min" class="limit limit__min">
              <button @click=${this.submitMin} type="submit" class="form__submit">✔</button>
            </div>
          </div>
        </form>
      </dialog>

      <dialog class="reset-dialog">
        <div  class="reset__message">
          <div class="reset__message_header">
            <h3>Counter Reset</h3>
            <button @click=${this.closeResetDialog} class="reset__message_close">X</button>
          </div>
          <p>Your counter has been reset to 0. You can start a new tally.
          </p>
        </div>
      </dialog>

      <div class="buttons__container">
        <button @click=${this.add} class="tally__add buttons_tally">+</button>
        <button @click=${this.subtract} class="tally__subtract buttons_tally">-</button>
      </div>
    </div>
    `;
  }

// TODO
// Add error if max is less than min.
// Add functionality to display settings button.
// Reset counter whenever max or min is set.
// Change so that whenever above occurs, reset value is equal to min value if min is above 0;

  add() {
    if (this.maximum === '') {
      this.tally += 1;
    } else if (this.tally < this.maximum) {
      this.tally += 1;
    } else {
      // Disable button here
      this.renderRoot.querySelector('.tally__add').disabled
    }
  }

  subtract() {
    if (this.minimum === '') {
      this.tally -= 1;
    } else if (this.tally > this.minimum) {
      this.tally -= 1;
    } else {
      // Disable button here
      this.renderRoot.querySelector('.tally__subtract').disabled
    }
  }

  reset() {
    this.tally = 0;
    this.renderRoot.querySelector('.reset-dialog').showModal();
  }

  closeResetDialog() {
    this.renderRoot.querySelector('.reset-dialog').close();
  }

  showSettingsModal() {
    this.renderRoot.querySelector('.tally-settings').showModal();
  }

  closeSettingsDialog(e) {
    e.preventDefault();
    this.renderRoot.querySelector('.tally-settings').close();
  }

  submitMax(e) {
    e.preventDefault();
    this.maximum = this._inputMax.value.trim();
  }

  submitMin(e) {
    e.preventDefault();
    this.minimum = this._inputMin.value.trim();
  }
}

customElements.define('my-counter', MyCounter);
