import formValidate from './formValidate';
import form from './form';

export default function popupOpen(id) {
  document.querySelector('html').classList.add('js-no-scroll');
  document.getElementById(id).classList.add('popup_active');

  formValidate(id);
  form(id);
}
