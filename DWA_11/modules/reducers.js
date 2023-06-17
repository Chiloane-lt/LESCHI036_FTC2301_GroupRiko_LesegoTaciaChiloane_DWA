/* eslint-disable import/extensions */
// @ts-check

import { increment, decrease, reset } from './actions.js';

/**
 * @param {state} state
 * @param {Action} action
 * @returns state
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return increment(state);
    case 'DECREASE_COUNTER':
      return decrease(state);
    case 'RESET_COUNTER':
      return reset(state);
    default:
      return state;
  }
};
