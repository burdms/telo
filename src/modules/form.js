import popupClose from './popupClose';

export default function form(id) {
  const form = document.getElementById(id);

  form.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.close-form') || target.classList.contains('overlay')) {
      popupClose(form);
    }
  });
}
