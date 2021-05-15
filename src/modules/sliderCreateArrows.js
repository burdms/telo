export default function sliderCreateArrows(slider) {
  const arrowLeft = document.createElement('div'),
    arrowRight = document.createElement('div');

  // Кнопка "влево"
  arrowLeft.classList.add('slider-arrow', 'prev');
  arrowLeft.id = 'prev';
  arrowLeft.innerHTML = `
    <span>
      <i class="fa fa-angle-left"></i>
    </span>
    `;

  // Кнопка "вправо"
  arrowRight.classList.add('slider-arrow', 'next');
  arrowRight.id = 'next';
  arrowRight.innerHTML = `
    <span>
      <i class="fa fa-angle-right"></i>
    </span>
    `;

  slider.appendChild(arrowLeft);
  slider.appendChild(arrowRight);
}
