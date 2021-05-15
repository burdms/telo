import popupClose from "./popupClose";

export default function getPresent() {
  const openPresent = event => {
    const target = event.target;

    if (target.closest('.fixed-gift')) {
      document.removeEventListener('click', openPresent);

      document.querySelector('.fixed-gift').style.display = 'none';

      document.getElementById('gift').classList.add('popup_active');
      popupClose('gift');
    }
  };

  document.addEventListener('click', openPresent);
}
