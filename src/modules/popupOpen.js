import inputCheck from './inputCheck';
import form from './form';
import formSend from './formSend';

export default function popupOpen(id) {
  document.querySelector('html').classList.add('js-no-scroll');
  document.getElementById(id).classList.add('popup_active');

  inputCheck(id);
  form(id);
  formSend(id);
}
