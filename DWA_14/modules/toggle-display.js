/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { LitElement, html, css } from '../libs/lit-html.js';

export class DisplayToggle extends LitElement {
  static styles = css`
    :host {
    --main-light-color: #D3D4D9;
    --main-dark-color: #252627;
    --main-accent-color: #60af7e;
  }

  /* Hide checkbox by opacity and setting far off screen. Inteeract with
  it using the label which is linked using 'for' attribute */
  .switch__bg{
    opacity: 0;
    position: absolute;
    cursor: pointer;
    left: -9000px;
    top:  -9000px;
  }

  /* Targets label that comes after checkbox. Flex allows before to acale in size to label text/font size */
  .switch__label {
    display: flex;
    /* Below ensures label text is in line with toggle bar/bg */
    align-items: center;
    cursor: pointer;
  }

  .switch__label::before {
    /* Having both for before and after allows me to move tottgle
    all the way to the left of the bar. */
    position: relative;
    /* Move slighlty off left so toggle looks like it is
    inside the bar/bg */
    left: -2px;
    content: "";
    width: 55px;
    height: 25px;
    background-color: var(--main-light-color);
    border-radius: 1rem;
    margin-right: 10px;
    transition: background-color 200ms ease-in-out;
  }

  .switch__label::after {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "☾";
    font-size: 18px;
    color: var(--main-light-color);
    width: 22px;
    height: 22px;
    background-color: var(--main-dark-color);
    border-radius: 1rem;
    margin-right: 10px;
    transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;
  }

  /* Moving the toggle to the right when it is checked */
    .switch__bg:checked + .switch__label::after {    
      content: "☀";
      font-size: 18px;
      color: var(--main-dark-color);  
      transform: translateX(125%);
      background-color: var(--main-light-color);
  }

  .switch__bg:checked + .switch__label::before {      
      background-color: var(--main-dark-color);
  }

  /* Accesibility setting so that button responds to focus. i.e. highlits when in focus.*/
  .switch__bg:focus + .switch__label::before{
    outline: 1px solid var(--main-accent-color);
  }
  `;

  render() {
    return html`
    <div class="switch">
      <input type="checkbox" id="check" class="switch__bg">
      <label for="check" class="switch__label"></label>
    </div>
    `;
  }
}

customElements.define('display-toggle', DisplayToggle);
