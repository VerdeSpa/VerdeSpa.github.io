//Start Preloader
window.addEventListener('load', function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
});
//End Preloader

//Carousel
$(document).ready(function () {
    $("#carousel1").owlCarousel({
        loop: true,
        margin: 5,
        autoHeight: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1

            },
            1000: {
                items: 1                
            }
        }
    });

});
//End  Carousel