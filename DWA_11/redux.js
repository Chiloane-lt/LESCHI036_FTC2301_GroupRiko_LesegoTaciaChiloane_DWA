// Set up store
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
  };
};

// Set up Reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return state + 1;
    case 'SUBTRACT_COUNTER':
      return state - 1;
    case 'RESET_COUNTER':
      return state = 0;
    default:
      return state;
  }
};

// Create Redux Store for counter
const store = createStore(reducer);

// Get HTML
const getHtml = {
  tally: document.querySelector('[data-tally]'),
  addButton: document.querySelector('[data-tally-add]'),
  subtractButton: document.querySelector('[data-tally-subtract]'),
  resetButton: document.querySelector('[data-tally-reset]'),
  resetMessage: document.querySelector('[data-tally-popup]'),
  resetMessageClose: document.querySelector('[data-popup-close]'),
};

// Update DOM
const updateCounter = () => {
  const counter = store.getState();
  getHtml.tally.innerHTML = counter;
};

// Subscribe to store update
const unsubscribe = store.subscribe(updateCounter);

// Event listeners for buttons
getHtml.addButton.addEventListener('click', () => {
  store.dispatch({ type: 'ADD_COUNTER' });
});

getHtml.subtractButton.addEventListener('click', () => {
  store.dispatch({ type: 'SUBTRACT_COUNTER' });
});

getHtml.resetButton.addEventListener('click', () => {
  store.dispatch({ type: 'RESET_COUNTER' });
  getHtml.resetMessage?.setAttribute('active', '');
  getHtml.resetMessageClose?.addEventListener('click', () => {
    getHtml.resetMessage?.removeAttribute('active');
  });
});
