import { LitElement, html, css } from './libs/lit-html.js';

class MyCounter extends LitElement {
  static properties = {
    name: {},
    tally: {},
  };

  constructor() {
    super();
    this.tally = 0;
    this.min = Infinity;
    this.max = Infinity;
    this.display = 'day';
  }

  static styles = css`
  :host {
    --backg-light-color: #D3D4D9;
    --main-dark-color: #252627;
    --main-accent-color: #BB0A21;
  }

  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    color: #D3D4D9
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
    border: 2px solid var(--backg-light-color);
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

  input{
    font-size: 1rem;
    color: var(--main-dark-color);
    width: 2rem;
    height: 2rem;
    margin: .2rem;
    border: .2rem, solid, var(--main-dark-color);
    border-radius: 40%;

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

          <div>
            <label for="max">Max.</label>
            <input type="number" id="max">
            <button @click=${this.setMax} class="header__button">Set</button>
          </div>

          <div>
            <label for="min">Min.</label>
            <input type="number" id="min">
            <button @click=${this.setMin} class="header__button">Set</button>
          </div>


        </div>
      </div>

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

  setMax(event) {
    const input = event.target;
    if (input !== '') {
      this.max = input.value;
    }
  }

  setMin(event) {
    const input = event.target;
    if (input !== '') {
      this.min = input.value;
    }
    
  }
}

customElements.define('my-counter', MyCounter);
