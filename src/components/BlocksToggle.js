export default class BlocksToggle {
  constructor({
                linkClass,
                activeLinkClass,
                blockClass,
                openedBlockClass,
                selectClass = null
              }) {
    this._linkClass = linkClass;
    this._links = document.querySelectorAll(`.${this._linkClass}`);

    this._activeLinkClass = activeLinkClass;
    this._activeLinkEl = document.querySelector(`.${this._activeLinkClass}`);

    this._blockClass = blockClass
    this._blocks = document.querySelectorAll(`.${this._blockClass}`);

    this._selectClass = selectClass;
    this._selectEl = (this._selectClass) ? document.querySelector(`.${this._selectClass}`) : null;

    this._openedBlockClass = openedBlockClass;

    this._handleClick = this._handleClick.bind(this);
    this._handleInput = this._handleInput.bind(this);
  }


  init() {
    this._setEventListeners();
    this._openBlock(
      this._findBlock(this._activeLinkEl.dataset.rel || this._selectEl.value)
    );
  }


  _closeBlock() {
    if (this._openedBlock) {
      this._openedBlock.classList.remove(this._openedBlockClass)
    }
  }


  _findBlock(rel) {
    return Array.from(this._blocks).find((block) => {
      return block.classList.contains(rel);
    })
  }


  _handleClick(evt) {
    if (!evt.target.classList.contains(this._activeLinkClass)) {
      evt.preventDefault();

      this._closeBlock();
      this._resetActiveLink();
      this._setActiveLink(evt.target.dataset.rel);

      if (this._selectEl) {
        this._selectEl.value = evt.target.dataset.rel;
      }

      this._openBlock(
        this._findBlock(evt.target.dataset.rel)
      );
    }
  }


  _handleInput(evt) {
    this._closeBlock();
    this._resetActiveLink();

    this._setActiveLink(evt.target.value);
    console.log(evt.target.value)
    this._openBlock(
      this._findBlock(evt.target.value)
    );
  }


  _openBlock(block) {
    console.log(block)
    if (block) {
      block.classList.add(this._openedBlockClass);
      this._openedBlock = block;
    }
  }


  _resetActiveLink() {
    if (this._activeLinkEl) {
      this._activeLinkEl.classList.remove(this._activeLinkClass);
    }
  }


  _setActiveLink(rel) {
    const link = document.querySelector(`[data-rel="${rel}"]`);
    link.classList.add(this._activeLinkClass);
    this._activeLinkEl = link;
  }


  _setEventListeners() {
    this._links.forEach((link) => {
      link.addEventListener('click', this._handleClick);
    })

    if (this._selectEl) {
      this._selectEl.addEventListener('input', this._handleInput)
    }
  }
}