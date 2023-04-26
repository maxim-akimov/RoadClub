import './styles/index.css';
/*
import Slider from "./components/slider";
import BlocksToggle from "./components/BlocksToggle";

new Slider({
  sliderSelector: '.slider',
  slideSelector: '.slider__slide',
  btnPrevClass: 'slider__btn_style_prev',
  btnNextClass: 'slider__btn_style_next'
}).start();
*/
const links = document.querySelector('a');

links.addEventListener('click', (event) => {
  // отменяем действие по умолчанию. Перехода по ссылке не будет
  event.preventDefault()
})
/*
new BlocksToggle({
  linkClass: 'links-list__link_type_card',
  activeLinkClass: 'links-list__link_active',
  blockClass: 'cards',
  openedBlockClass: 'cards_opened'
}).init();

 */