export default function popupClose(form) {
  form.classList.remove('popup_active');
  document.querySelector('html').classList.remove('js-no-scroll');
}
