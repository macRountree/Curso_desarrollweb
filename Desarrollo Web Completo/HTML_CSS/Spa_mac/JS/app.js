window.swiper = new Swiper({
  el: ".slider__container", //contenedor del slider
  slideClass: "slider__slide", //cada uno de los sliders
  createElements: true, //genere el resto del HTML
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: true,
  navigation: true,
});
