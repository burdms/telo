import popupOpen from './popupOpen';

export default function head() {
  const clubsList = document.querySelector('.clubs-list ul');

  document.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.club-select') && !target.closest('.clubs-list__ul_active')) {
      clubsList.classList.toggle('clubs-list__ul_active');
    } else if (!target.closest('.clubs-list__ul_active')) {
      clubsList.classList.remove('clubs-list__ul_active');
    }

    if (target.classList.contains('open-popup')) {
      event.preventDefault();

      popupOpen('free_visit_form');
    }

    if (target.getAttribute('data-popup') === '#callback_form') {
      popupOpen('callback_form');
    }
  });
}
