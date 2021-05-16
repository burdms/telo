export default function smoothScroll() {
  const scrollLinks = document.querySelectorAll("a.js-scroll-link"),
    scrollToTop = document.getElementById('totop');

  scrollLinks.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();

      const id = item.getAttribute('href');

      console.log(id);

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  scrollToTop.addEventListener('click', event => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
