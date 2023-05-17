import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider() {
  if(document.querySelector('.mainSwiper')) {
    const mainSwiper = new Swiper('.mainSwiper', {
      slidesPerView: 1,
      loopedSlides: 1,
      // autoHeight: true,
      loop: true,
    });
  }
}