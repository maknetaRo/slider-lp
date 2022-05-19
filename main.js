const swiper = new Swiper('.hero-swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 3000
  },

  // If we need pagination
  pagination: {
    el: '.slider-hero-pagination',
  },

 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// zbadać szerokość okna i użyć przy 640 i mniej (?)
const swiper2 = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    360: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },

});