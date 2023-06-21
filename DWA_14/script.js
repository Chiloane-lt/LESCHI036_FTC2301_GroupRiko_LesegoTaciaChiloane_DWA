import { LitElement, html } from 'lit';

class MyCounter extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'Name Your Tally';
  }

  render() {
    return html`
    <div>
      <h1>${this.name}</h1>
      <div>
        <h1>0</h1>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
    `;
  }
}

customElements.define('my-counter', MyCounter);
