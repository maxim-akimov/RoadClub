import './styles/index.css';

import Slider from "./components/Slider";
import BlocksToggle from "./components/BlocksToggle";
import ThemeSwitcher from "./components/ThemeSwitcher";


new Slider({
  sliderSelector: '.slider',
  slideSelector: '.slider__slide',
  btnPrevClass: 'slider__btn_style_prev',
  btnNextClass: 'slider__btn_style_next',
  duration: 500
}).start();


new BlocksToggle({
  linkClass: 'links-list__link_type_card',
  activeLinkClass: 'links-list__link_active',
  blockClass: 'cards',
  openedBlockClass: 'cards_opened',
  selectClass: 'links-select',
}).init();

new ThemeSwitcher(
  '.theme-switcher__input',
  '.layout',
  'layout_theme_dark'
).init();