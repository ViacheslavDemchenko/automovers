import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function sliderReviews() {
  if(document.querySelector('.sliderReviews')) {
    const sliderReviews = new Swiper('.sliderReviews', {
      slidesPerView: 1,
      loopedSlides: 1,
      autoHeight: true,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '.arrow__left',
        prevEl: '.arrow__right',
      },
    });
  }
}