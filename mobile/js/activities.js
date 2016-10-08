

var dragdealerActivities;

$(function() {

dragdealerActivities = new Dragdealer('activities-carousel', {
  speed: 0.3,
  x:0,
  steps: 9,
  loose: true,
  requestAnimationFrame: true
});

});

$(window).load(function() {
    updateCarousel('activities');
    setTimeout(updateCarousel('activities'), 500);
});

window.onresize = function () {
    updateCarousel('activities');
};

var updateCarousel = function(carousel) {
    var carouselWidth = 0;

    $('#' + carousel + '-carousel > .handle > .page').children().each(function(){
         return carouselWidth = carouselWidth + 10 + $(this).outerWidth();
    });

    $('#' + carousel + '-carousel > .handle').width(carouselWidth + 150);

    dragdealerActivities.reflow();
};
