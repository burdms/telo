import popupOpen from "./popupOpen";

export default function getPresent() {
  const openPresent = event => {
    const target = event.target;

    if (target.closest('.fixed-gift')) {
      document.removeEventListener('click', openPresent);

      document.querySelector('.fixed-gift').style.display = 'none';

      popupOpen('gift');
    }
  };

  document.addEventListener('click', openPresent);
}
