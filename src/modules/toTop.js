export default function toTop() {
  const button = document.getElementById('totop'),
    firstBlockHeight = document.querySelector('header').offsetHeight;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrolled > firstBlockHeight / 2) {
      button.classList.add('totop_active');
    } else if (scrolled < firstBlockHeight / 2) {
      button.classList.remove('totop_active');
    }
  });
}
