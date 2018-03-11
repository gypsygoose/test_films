;$(function() {
  // Require swiper.js
  require('../libs/swiper.js');
  // Init slider
  var mainSlider = new Swiper('.slider', {
    autoplay: 5000,
    nextButton: '.slider__navigator_next',
    prevButton: '.slider__navigator_prev'
  });
});