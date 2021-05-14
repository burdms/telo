export default function head() {
  const clubsList = document.querySelector('.clubs-list ul');

  document.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.club-select') && !target.closest('.clubs-list__ul_active')) {
      clubsList.classList.toggle('clubs-list__ul_active');
    } else if (!target.closest('.clubs-list__ul_active')) {
      clubsList.classList.remove('clubs-list__ul_active');
    }
  });
}
