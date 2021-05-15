export default function sliderMain() {
  const slider = document.querySelector('.main-slider'),
    slides = slider.querySelectorAll('.slide');

  let currentSlide = 0;

  function changeSlide() {
    slides.forEach(item => {
      item.style.display = 'none';
      slides[currentSlide].style.display = 'flex';
    });
  }

  setInterval(() => {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    changeSlide();
  }, 5000);

  changeSlide();
}
