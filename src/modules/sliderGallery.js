import sliderCreateArrows from "./sliderCreateArrows";

export default function sliderGallery() {
  const slider = document.querySelector('.gallery-slider'),
    slides = slider.querySelectorAll('.slide'),
    dots = [],
    dotsContainer = document.querySelector('.slider-dots');

  let currentSlide = 0, interval;

  sliderCreateArrows(slider);

  function createDots() {
    for (let i = 0; i < slides.length; i++) {
      const dotItem = document.createElement('div');
      dotItem.classList.add('slider-dots__item');

      if (i === 0) {
        dotItem.classList.add('slider-dots__item_active');
      }

      dots.push(dotItem);
      dotsContainer.append(dotItem);
    }
  }

  function changeSlide(currentSlide) {
    slides[currentSlide].classList.add('slide_active');
    dots[currentSlide].classList.add('slider-dots__item_active');
  }

  function clearActive() {
    slides.forEach(item => {
      item.classList.remove('slide_active');
    });
    dots.forEach(item => {
      item.classList.remove('slider-dots__item_active');
    });
  }

  function autoplay() {
    clearActive();

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    changeSlide(currentSlide);
  }

  function init() {
    interval = setInterval(autoplay, 5000);
  }

  function stop() {
    clearInterval(interval);
  }

  slider.addEventListener('click', event => {
    const target = event.target;

    clearActive();

    if (target.closest('#next')) {
      currentSlide++;

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
    }

    if (target.closest('#prev')) {
      currentSlide--;

      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
    }

    if (target.classList.contains('slider-dots__item')) {
      dots.forEach((item, index) => {
        if (item === target) {
          currentSlide = index;
        }
      });
    }

    changeSlide(currentSlide);
  });

  slider.addEventListener('mouseover', () => {
    stop();
  });

  slider.addEventListener('mouseout', () => {
    init();
  });

  createDots();
  init();
}
