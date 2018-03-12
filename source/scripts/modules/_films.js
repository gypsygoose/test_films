;$(function() {
  $('.poster').mousemove(function(e) {
    var poster = $(this).find('.poster__wrapper');
    var shine = $(this).find('.poster__shine');
    var offsetX = 0.5 - e.offsetX / $(this).width(); //cursor position X
    var offsetY = 0.5 - e.offsetY / $(this).height(); //cursor position Y
    var dx = e.offsetX - $(this).width() / 2; //@w/2 = center of poster
    var dy = e.offsetY - $(this).height() / 2; //@h/2 = center of poster
    var theta = Math.atan2(dy, dx); //angle between cursor and center of poster in RAD
    var angle = theta * 180 / Math.PI - 90; //convert rad in degrees
    var offsetPoster = 15;
    var transformPoster = 'translateY(' + -offsetX * 2 + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 3)) + 'deg) scale(1.1) translateZ(10px)'; //poster transform

    //get angle between 0-360
    if (angle < 0) {
      angle = angle + 360;
    }

    //gradient angle and opacity
    shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + e.offsetY / $(window).height() + ') 0%,rgba(255,255,255,0) 80%)');

    //poster transform
    poster.css('transform', transformPoster);

  });
  $('.poster').mouseenter(function() {
    var poster = $(this).find('.poster__wrapper');
    var shine = $(this).find('.poster__shine');
    poster.css('transition', 'transform 0.1s').css('transform', 'translateY(0) rotateX(0) rotateY(0) scale(1) translateZ(0)');
    setTimeout(() => {
      poster.css('transition', '');
    }, 100);
  });
  $('.poster').mouseleave(function() {
    var poster = $(this).find('.poster__wrapper');
    var shine = $(this).find('.poster__shine');
    poster.css('transition', 'transform 0.1s').css('transform', 'translateY(0) rotateX(0) rotateY(0) scale(1) translateZ(0)');
    shine.css('background', '');
  });
});