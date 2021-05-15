import sliderCreateArrows from './sliderCreateArrows';

export default function sliderServices() {
  const slider = document.querySelector('.services-slider'),
    wrapper = document.querySelector('.services-slider__wrapper'),
    slidesLength = slider.querySelectorAll('.slide').length,
    step = 225,
    maxTranslate = step * (slidesLength - 5);

  let currentPosition = 0;

  // Создаем управляющие стрелки в слайдере
  sliderCreateArrows(slider);

  const prev = slider.querySelector('#prev'),
    next = slider.querySelector('#next');

  prev.classList.add('slider-arrow_inactive');

  slider.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('#next') && currentPosition !== -maxTranslate) {
      prev.classList.remove('slider-arrow_inactive');
      wrapper.style.transform = `translateX(${currentPosition - step}px)`;
      currentPosition -= step;

      if (currentPosition === -maxTranslate) {
        next.classList.add('slider-arrow_inactive');
      }
    }

    if (target.closest('#prev') && currentPosition !== 0) {
      next.classList.remove('slider-arrow_inactive');
      wrapper.style.transform = `translateX(${currentPosition + step}px)`;
      currentPosition += step;

      if (currentPosition === 0) {
        prev.classList.add('slider-arrow_inactive');
      }
    }
  });

}
