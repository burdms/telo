/* eslint-disable strict */
'use strict';

import head from './modules/head';
import getPresent from './modules/getPresent';
import sliderMain from './modules/sliderMain';
import formSend from './modules/formSend';
import inputCheck from './modules/inputCheck';

head();
getPresent();
sliderMain();
inputCheck('banner-form');
formSend('banner-form');
