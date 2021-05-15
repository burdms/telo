export default function popupClose(id) {
  const form = document.getElementById(id);

  form.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.close-form') || target.classList.contains('overlay')) {
      // document.querySelector('html').classList.remove('js-no-scroll');
      form.classList.remove('popup_active');
    }
  });
}
