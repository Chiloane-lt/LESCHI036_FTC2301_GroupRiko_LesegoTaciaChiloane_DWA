// @ts-check

const getHtml = {
  tally: document.querySelector('[data-tally]'),
  addButton: document.querySelector('[data-tally-add]'),
  subtractButton: document.querySelector('[data-tally-subtract]'),
  resetButton: document.querySelector('[data-tally-reset]'),
  resetMessage: document.querySelector('[data-tally-popup]'),
  resetMessageClose: document.querySelector('[data-popup-close]'),
};

let count = 0;
// @ts-ignore
getHtml.tally.innerText = count;

// @ts-ignore
getHtml.addButton.addEventListener('click', () => {
  count += 1;
  // @ts-ignore
  getHtml.tally.innerText = count;
});

// @ts-ignore
getHtml.subtractButton.addEventListener('click', () => {
  count -= 1;
  // @ts-ignore
  getHtml.tally.innerText = count;
});

getHtml.resetButton?.addEventListener('click', () => {
  count = 0;
  // @ts-ignore
  getHtml.tally.innerText = count;
  getHtml.resetMessage?.setAttribute('active', '');
});

getHtml.resetMessageClose?.addEventListener('click', () => {
  getHtml.resetMessage?.removeAttribute('active');
});
