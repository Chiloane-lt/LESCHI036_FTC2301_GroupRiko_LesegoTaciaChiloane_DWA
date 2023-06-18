/* eslint-disable import/prefer-default-export */
// @ts-check

/**
 * Html elements accessed via queryselector.
 * @type {object} getHtml
 * @property {object} view
 * @property {object} scroll
 * @property {object} preview
 * @property {object} display
 * @property {object} search
 */
export const getHtml = {
  view: {
    mainHtml: document.querySelector('[data-list-items]'),
  },
  scroll: {
    moreButton: document.querySelector('[data-list-button]'),
  },
  preview: {
    summaryList: document.querySelectorAll('[data-preview]'),
    summaryOverlay: document.querySelector('[data-list-active]'),
    summaryBlur: document.querySelector('[data-list-blur]'),
    summaryImage: document.querySelector('[data-list-image]'),
    summaryTitle: document.querySelector('[data-list-title]'),
    summarySubTitle: document.querySelector('[data-list-subtitle]'),
    summaryDescription: document.querySelector('[data-list-description]'),
    summaryClose: document.querySelector('[data-list-close]'),
  },
  display: {
    settingsOverlay: document.querySelector('[data-settings-overlay]'),
    settingButton: document.querySelector('[data-header-settings]'),
    settingsTheme: document.querySelector('[data-settings-theme]'),
    settingsCancel: document.querySelector('[data-settings-cancel]'),
    settingsSubmit: document.querySelector('[data-settings-form]'),
  },
  search: {
    searchCancel: document.querySelector('[data-search-cancel]'),
    searchButton: document.querySelector('[data-header-search]'),
    searchOverlay: document.querySelector('[data-search-overlay]'),
    seacrhTitle: document.querySelector('[data-search-title]'),
    searchSubmit: document.querySelector('[data-search-form]'),
    searchAuthors: document.querySelector('[data-search-authors]'),
    searchGenres: document.querySelector('[data-search-genres]'),
    seachMessage: document.querySelector('[data-list-message]'),
  },
};
