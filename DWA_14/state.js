/**
 * Denotes current display mode. Either set by user sustem settings
 * or changed using the display toggle button.
 * @typedef {'day' | 'night' } Mode
 */

/**
 * Information on user specififed limits and the status of the application
 * based on these limits.
 * @typedef {object} Limit
 * @property {Boolean} Set
 * @property {Number} Value
 * @property {Boolean} Status
 */

/**
 * Used to store, track and create new states for the tally app.
 * @typedef {object} State
 * @property {string} Name - The name set by the user.
 * `Tally Counter` is used as default if none is set.
 * @property {Mode} Display - The current display settings.
 * @property {number} Tally - The current tally amount. Default is 0.
 * @property {Object<Limit>} Limits
 */

/**
 * @type {State}
 */
const state = {
  name: 'Tally Counter',
  display: 'night',
  tally: 0,
  limits: {
    maximum: {
      set: false,
      value: Infinity,
      reached: false,
    },
    minimum: {
      set: false,
      value: Infinity,
      reached: false,
    },
  },
}
