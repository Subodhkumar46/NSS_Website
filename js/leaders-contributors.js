/* js/leaders-contributors.js */
/* Initializes NSS Leaders and Contributors Owl Carousels
   matching the exact same settings as the working po-carousel */

(function ($) {
    "use strict";

    $(document).ready(function () {

        // NSS Leaders Carousel — same pattern as po-carousel in main.js
        if ($('.leaders-carousel').length) {
            $('.leaders-carousel').owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 2500,
                autoplayHoverPause: false,
                smartSpeed: 1000,
                responsive: {
                    0:    { items: 1 },
                    576:  { items: 2 },
                    992:  { items: 3 }
                }
            });
        }

        // Contributors Carousel — same pattern, 1 item
        if ($('.contributors-carousel').length) {
            $('.contributors-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: false,
                smartSpeed: 1000,
                items: 1
            });
        }

        // Testimonial Carousel
        if ($('.testimonial-carousel').length) {
            $('.testimonial-carousel').owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                responsive: {
                    0:    { items: 1 },
                    768:  { items: 2 }
                }
            });
        }

    });

})(jQuery);
