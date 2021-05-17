export default function headMenuMobile() {
  const menuWrapper = document.querySelector('.top-menu'),
    menuWrapperOffset = menuWrapper.offsetTop,
    headSlider = document.querySelector('.head-slider'),
    menu = document.querySelector('.popup-menu'),
    menuClose = menu.querySelector('.close-menu-btn img');

  function fixedMenu() {
    const scrolled = window.scrollY;

    if (scrolled > menuWrapperOffset) {
      menuWrapper.classList.add('top-menu_fixed');
      headSlider.classList.add('head-slider_menu-fixed');
    } else if (scrolled < menuWrapperOffset) {
      menuWrapper.classList.remove('top-menu_fixed');
      headSlider.classList.remove('head-slider_menu-fixed');
    }
  }

  if (document.documentElement.clientWidth < 768) {
    window.addEventListener('scroll', fixedMenu);
  }

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 768) {
      window.addEventListener('scroll', fixedMenu);
    } else {
      window.removeEventListener('scroll', fixedMenu);
      menuWrapper.classList.remove('top-menu_fixed');
      headSlider.classList.remove('head-slider_menu-fixed');
    }
  });

  document.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.menu-button')) {
      menu.classList.add('popup-menu_active');
    }

    if (target === menuClose || target.closest('.scroll')) {
      menu.classList.remove('popup-menu_active');
    }
  });
}
