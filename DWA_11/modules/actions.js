/* eslint-disable import/extensions */
// @ts-check

/**
 * @param {state} prop
 * @returns state
 */
export const increment = (prop) => {
  const newState = prop;
  newState.counter += 1;

  return newState;
};

/**
 * @param {state} prop
 * @returns state
 */
export const decrease = (prop) => {
  const newState = prop;
  newState.counter -= 1;

  return newState;
};

/**
 * @param {state} prop
 * @returns state
 */
export const reset = (prop) => {
  const newState = prop;
  newState.counter = 0;

  return newState;
};
