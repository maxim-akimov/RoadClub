import './styles/index.css';

import Slider from "./components/Slider";
import BlocksToggle from "./components/BlocksToggle";
import ThemeSwitcher from "./components/ThemeSwitcher";


const menuBtnEl = document.querySelector('.btn_style_menu');
const menuListEl = document.querySelector('.menu-list');
const themeToggleSwitcherEl = document.querySelector('.theme-switcher');

const subscriptionForm = document.forms.subscriptionForm;


if (menuBtnEl) {
  menuBtnEl.addEventListener('mousedown', (evt) => {
    menuListEl.classList.toggle('menu-list_opened');
    menuBtnEl.classList.toggle('btn_style_menu-close');
    themeToggleSwitcherEl.classList.toggle('theme-switcher_visible');
  })
}


subscriptionForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  subscriptionForm.elements.emailInput.value = 'Круто!';
  evt.submitter.style.visibility = 'hidden';

  setTimeout(()=> {
    subscriptionForm.reset();
  }, 2000)
})


new Slider({
  sliderSelector: '.slider',
  slideSelector: '.slider__slide',
  btnPrevClass: 'slider-navbar__btn_style_prev',
  btnNextClass: 'slider-navbar__btn_style_next',
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

