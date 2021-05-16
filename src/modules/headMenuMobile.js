export default function headMenuMobile() {
  const menuWrapper = document.querySelector('.top-menu'),
    menuWrapperOffset = menuWrapper.offsetTop,
    headSlider = document.querySelector('.head-slider');

  if (screen.availWidth <= 768) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;

      if (scrolled > menuWrapperOffset) {
        menuWrapper.classList.add('top-menu_fixed');
        headSlider.classList.add('head-slider_menu-fixed');
      } else if (scrolled < menuWrapperOffset) {
        menuWrapper.classList.remove('top-menu_fixed');
        headSlider.classList.remove('head-slider_menu-fixed');
      }
    });
    // burgerMenu.style.position = 'sticky';
  }
}
