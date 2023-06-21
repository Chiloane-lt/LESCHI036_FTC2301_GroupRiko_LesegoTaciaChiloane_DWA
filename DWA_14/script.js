import { LitElement, html, css } from './libs/lit-html.js';

class MyCounter extends LitElement {
  static properties = {
    name: {},
    tally: {},
  };

  constructor() {
    super();
    this.tally = 0;
    this.min = 2;
    this.max = 8;
    this.display = 'day';
  }

  static styles = css`
  :host {
    --main-light-color: #D3D4D9;
    --main-dark-color: #252627;
    --main-accent-color: #BB0A21;
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
  }

  .header {
    width: 15rem;
    border: 2px solid var(--main-light-color);
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .tally {
    width: 100%;
    margin: auto;
  }

  dialog {
  border: 2px solid var(--main-light-color);
  border-radius: 8%;
  padding: 1rem;
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

  .reset{
    font-size: 1rem;
    color: var(--main-dark-color);
    width: 2rem;
    height: 2rem;
    border: .2rem, solid, var(--main-dark-color);
    border-radius: 50%;
  }

  .buttons_tally {
    padding: .8rem 3rem .8rem 3rem;
    border: 1rem, solid, var(--main-dark-color);
    border-radius: 1.5rem;
    font-size: 1rem;
    color: var(--main-dark-color);
  }
  `;

  render() {
    return html`
    <div class="container">
      <div class="header">
        <h1>Tally Counter</h1>
        <h1 class="tally">${this.tally}</h1>
        <div class="header__settings">
        </div>
      </div>

      <dialog open>
        <div class="form">
          <div class="form__header">
            <h2>Tally Settings</h2>
            <button class="form__close">x</button>
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

      <div class="buttons">
        <button @click=${this.add} class="tally__add buttons_tally">+</button>
        <button @click=${this.reset} class="reset">⇔</button>
        <button @click=${this.subtract} class="tally__subtract buttons_tally">-</button>
      </div>
    </div>
    `;
  }

  add() {
    this.tally += 1;
  }

  subtract() {
    this.tally -= 1;
  }

  reset() {
    this.tally = 0;
  }
}

customElements.define('my-counter', MyCounter);
