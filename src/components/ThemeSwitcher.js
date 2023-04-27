export default class ThemeSwitcher {
  constructor(switcherInputSelector, modifiedElementSelector, modifiedThemeClass) {
    this._switcherInputSelector = switcherInputSelector;
    this._modifiedElementSelector = modifiedElementSelector;
    this._modifiedThemeClass = modifiedThemeClass;
    this._inputEl = document.querySelector(this._switcherInputSelector);
    this._modifiedEl = document.querySelector(this._modifiedElementSelector);
  }


  init() {
    this._setEventListeners();
  }


  _setEventListeners() {
    this._inputEl.addEventListener('input', (evt) => {
      this._toggleTheme(evt);
    })
  }


  _toggleTheme() {
    if (!this._inputEl.checked) {
      this._modifiedEl.classList.remove(this._modifiedThemeClass);
    } else {
      this._modifiedEl.classList.add(this._modifiedThemeClass);
    }
  }
}