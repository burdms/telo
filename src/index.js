/* eslint-disable strict */
'use strict';

import head from './modules/head';
import getPresent from './modules/getPresent';
import sliderMain from './modules/sliderMain';
import formSend from './modules/formSend';
import inputCheck from './modules/inputCheck';
import sliderServices from './modules/sliderServices';
import sliderGallery from './modules/sliderGallery';
import calculator from './modules/calculator';

// Выбор клуба, бесплатный визит, заказать звонок
head();

// Кнопка получить подарок
getPresent();

// Форма в баннере
inputCheck('banner-form');
formSend('banner-form');

// Слайдер со всеми услугами клубов
sliderServices();

// Слайдер с фотографиями
sliderGallery();

// Только главная страница
if (document.body.classList.contains('js-main-page')) {
  // Слайдер на первом экране главной страницы
  sliderMain();

  // Калькулятор на главной странице
  calculator();
  inputCheck('card_order');
  formSend('card_order');
}
