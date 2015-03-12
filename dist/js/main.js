var multiCarousel = (function () {
  console.log('im running');
  var arrowLeft = $('.multi-carousel__arrow--left'),
      arrowRight = $('.multi-carousel__arrow--right');
  return {
    init: function () {
      console.log('initialize');
      console.log(arrowLeft);
      arrowLeft.on('click', function () {
        console.log('you click left arrow');
      });
      arrowRight.on('click', function () {
        console.log('you click right arrow');
      });
    }
  }
})();
// initialize multi-carousel
multiCarousel.init();