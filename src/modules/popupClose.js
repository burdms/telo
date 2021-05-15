export default function popupClose(id) {
  const popup = document.getElementById(id);

  popup.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.close-form') || target.classList.contains('overlay')) {
      // document.querySelector('html').classList.remove('js-no-scroll');
      popup.classList.remove('popup_active');
    }
  });
}
