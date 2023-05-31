// @ts-check

/**
 * @typedef {object} html
 */
const html = {
    form: document.querySelector("[data-form]"),
    result: document.querySelector("[data-result]"),
    body: document.querySelector('body')
};



html.form.addEventListener("submit", (event) => {
  event.preventDefault();

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  class customError extends Error {
    constructor(message) {
      super(message);
      this.name = 'InvalidInputError';
    }
  };

  if (!dividend || !divider) {
    html.result.innerHTML = 'Division not performed. Both values are required in inputs. Try again.';
  } else if (isNaN(dividend) || isNaN(divider)) {
    html.body.innerHTML = 'Something critical went wrong. Please reload the page.';
    throw new Error ('Something critical went wrong. Please reload the page.');
  } else {
    let quotient = Math.floor(dividend / divider);
    html.result.innerText = quotient;
  };

  try {
    if ((dividend < 0) || (divider < 0)) {
      html.result.innerHTML = 'Division not performed. Invalid number provided. Try again.';
      throw new InvalidInputError;    
    }
  } catch(e) {
    console.error(e)
  };
});

