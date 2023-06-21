/* eslint-disable import/extensions */
import { LitElement, html, css } from '../libs/lit-html.js';

class MyCounter extends LitElement {
  static properties = {
    name: {},
    tally: {},
  };

  constructor() {
    super();
    this.tally = 0;
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
  }

  .tally {
    color: var(--main-light-color);
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

  dialog{
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
      <div class="tally">
        <h1 class="tally__title">Tally Counter</h1>
        <h1 class="tally__count">${this.tally}</h1>
      </div>

      <dialog>
        <div  class="reset__message">
          <div class="reset__message_header">
            <h3>Counter Reset</h3>
            <button class="reset__message_close">X</button>
          </div>
          <p>Your counter has been reset to 0.</p>
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
