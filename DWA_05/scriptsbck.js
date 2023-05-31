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

  try {
    // Add all conditions and throw error.
  }
  catch {
    // Add all handlers by specific error.
  }

  if (!dividend || !divider) {
    html.result.innerHTML = 'Division not performed. Both values are required in inputs. Try again.';
  } else if (isNaN(dividend) || isNaN(divider)) {
    html.body.innerHTML = 'Something critical went wrong. Please reload the page.';
    throw 'Something critical went wrong. Please reload the page.';
  } else if ((dividend < 0) || (divider < 0)) {
    html.result.innerHTML = 'Division not performed. Invalid number provided. Try again.';
    throw 'Invalid input';    
  } else {
    let quotient = Math.floor(dividend / divider);
    html.result.innerText = quotient;
  };
});

