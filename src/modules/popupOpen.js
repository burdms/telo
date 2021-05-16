import inputCheck from './inputCheck';
import formSend from './formSend';
import popupClose from './popupClose';

export default function popupOpen(popupID) {
  const popup = document.getElementById(popupID);

  // document.querySelector('html').classList.add('js-no-scroll');
  popup.classList.add('popup_active');

  if (popup.querySelector('form')) {
    const id = popup.querySelector('form').getAttribute('id');
    inputCheck(id);
    formSend(id);
  }

  popupClose(popupID);
}
