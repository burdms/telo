/* eslint-disable strict */
'use strict';

import head from './modules/head';
import getPresent from './modules/getPresent';
import sliderMain from './modules/sliderMain';
import formSend from './modules/formSend';
import inputCheck from './modules/inputCheck';
import sliderServices from './modules/sliderServices';

// Выбор клуба, бесплатный визит, заказать звонок
head();

// Кнопка получить подарок
getPresent();

// Только главная страница
if (document.body.classList.contains('js-main-page')) {
  // Слайдер на первом экране главной страницы
  sliderMain();

  // Форма в баннере на главной странице
  inputCheck('banner-form');
  formSend('banner-form');

  // Слайдер со всеми услугами клубов
  sliderServices();
}

