/* eslint-disable strict */
'use strict';

import head from './modules/head';
import headMenuMobile from './modules/headMenuMobile';
import getPresent from './modules/getPresent';
import sliderMain from './modules/sliderMain';
import formSend from './modules/formSend';
import inputCheck from './modules/inputCheck';
import sliderServices from './modules/sliderServices';
import sliderGallery from './modules/sliderGallery';
import calculator from './modules/calculator';
import toTop from './modules/toTop';

// Выбор клуба, бесплатный визит, заказать звонок
head();

// Бургер-меню на экранах меньше 768пх
headMenuMobile();

// Кнопка получить подарок
getPresent();

// Форма в баннере
inputCheck('banner-form');
formSend('banner-form');

// Слайдер со всеми услугами клубов
sliderServices();

// Слайдер с фотографиями
sliderGallery();

// Перезвонить из футера
inputCheck('footer_form');
formSend('footer_form');

// Кнопка "наверх"
toTop();

// Только главная страница
if (document.body.classList.contains('js-main-page')) {
  // Слайдер на первом экране главной страницы
  sliderMain();

  // Калькулятор на главной странице
  calculator();
  inputCheck('card_order');
  formSend('card_order', true);
}

// Только страницы клубов
if (document.body.classList.contains('js-club-page')) {
  // Заказ карты на странице клуба
  inputCheck('card_order');
  formSend('card_order');
}
