$(document).ready(function () {
    $('.header__wrapper').on('click', function () {
        $('.header__wrapper, .header__nav').toggleClass('active')
    })
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        dots: false,
        loop: true,
      
    });

// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    //TravelPro


});