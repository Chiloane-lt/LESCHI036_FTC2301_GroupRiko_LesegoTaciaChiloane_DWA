import { state } from './modules/store.js';
import { reducer } from './modules/reducers.js'

const down = {
  type: 'DECREASE_COUNTER',
};
const up = {
  type: 'INCREMENT_COUNTER',
};

const reset = {
  type: 'RESET_COUNTER',
};

console.log(reducer(state, up));
console.log(reducer(state, up));
console.log(reducer(state, down));
console.log(reducer(state, reset));
