import inputCheck from './inputCheck';
import formSend from './formSend';
import popupClose from './popupClose';

export default function popupOpen(popupID) {
  const popup = document.getElementById(popupID),
    id = popup.querySelector('form').getAttribute('id');

  // document.querySelector('html').classList.add('js-no-scroll');
  popup.classList.add('popup_active');

  inputCheck(id);
  popupClose(popupID);
  formSend(id);
}
