var multiCarousel = (function () {
  console.log('im running');
  var arrowLeft = $('.multi-carousel__arrow--left'),
      arrowRight = $('.multi-carousel__arrow--right');
  return {
    init: function () {
      console.log('initialize');
      console.log('this is arrows ',
        arrowLeft,
        arrowRight
      );
      arrowLeft.on('click', function () {
        console.log('you click left arrow');
      });
      arrowRight.on('click', function () {
        console.log('you click right arrow');
      });
    }
  }
})();