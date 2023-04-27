export default class BlocksToggle {
  constructor({linkClass, activeLinkClass, blockClass, openedBlockClass}) {
    this._linkClass = linkClass;
    this._links = document.querySelectorAll(`.${this._linkClass}`);

    this._activeLinkClass = activeLinkClass;
    this._activeLinkEl = document.querySelector(`.${this._activeLinkClass}`);

    this._blockClass = blockClass
    this._blocks = document.querySelectorAll(`.${this._blockClass}`);

    this._openedBlockClass = openedBlockClass;

    this._handleClick = this._handleClick.bind(this);
  }


  init() {
    this._setEventListeners();
    this._openBlock();
  }


  _closeBlock() {
    if (this._openedBlock) {
      this._openedBlock.classList.remove(this._openedBlockClass)
    }
  }


  _handleClick(evt) {
    if (evt.target.classList.contains(this._linkClass)
      && ! evt.target.classList.contains(this._activeLinkClass)) {
      evt.preventDefault();

      this._closeBlock();
      this._resetActiveLink();
      this._setActiveLink(evt.target);

      this._openBlock();
    }
  }


  _openBlock() {
    if (this._activeLinkEl && this._activeLinkEl.dataset.rel && this._blocks) {
      const block = Array.from(this._blocks).find((block) => {
        return block.classList.contains(this._activeLinkEl.dataset.rel)
      })

      if (block) {
        block.classList.add(this._openedBlockClass);
        this._openedBlock = block;
      }
    }
  }


  _resetActiveLink() {
    if (this._activeLinkEl) {
      this._activeLinkEl.classList.remove(this._activeLinkClass);
    }
  }


  _setActiveLink(link) {
    link.classList.add(this._activeLinkClass);
    this._activeLinkEl = link;
  }


  _setEventListeners() {
    this._links.forEach((link) => {
      link.addEventListener('click', this._handleClick);
    })
  }
}