export default class Slider {
  constructor({sliderSelector,
              slideSelector,
              btnPrevClass,
              btnNextClass}) {

    this._sliderSelector = sliderSelector;
    this._slideSelector = slideSelector;
    this._btnPrevClass = btnPrevClass;
    this._btnNextClass = btnNextClass;

    this._sliderEl = document.querySelector(this._sliderSelector);
    this._slides = this._sliderEl.querySelectorAll(this._slideSelector);

    this._currentSlideIdx = 0;
    this._currentTransition = 0;
  }


  start() {
    this._setEventListeners();
  }


  _translateSlides(val) {
    this._slides.forEach((slide) => {
      slide.style.translate = this._currentTransition + val + 'px';
    })

    this._currentSlideIdx += (val > 0) ? -1 : 1;
    this._currentTransition += val;
  }


  _showNextSlide() {
    // Если следующий слайд существует
    if ((this._currentSlideIdx + 1) < this._slides.length) {
      //Получаем ширину текущего слайда
      const slideWidth = this._slides[this._currentSlideIdx].offsetWidth;

      this._translateSlides(-slideWidth);
    }
  }


  _showPrevSlide() {
    console.log(654)
    // Если предыдущий слайд существует
    if ((this._currentSlideIdx - 1) >= 0 && this._slides.length) {
      //Получаем ширину текущего слайда
      const slideWidth = this._slides[this._currentSlideIdx].offsetWidth;

      this._translateSlides(slideWidth);
    }
  }


  _setEventListeners() {
    document.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(this._btnNextClass)) {
        this._showNextSlide();
      }

      if (evt.target.classList.contains(this._btnPrevClass)) {
        this._showPrevSlide();
      }
    })
  }
}