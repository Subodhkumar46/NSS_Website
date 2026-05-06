(function ($) {
    "use strict";

    $(document).ready(function () {
        // Testimonials carousel
        if ($('.testimonial-carousel').length) {
            $(".testimonial-carousel").owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                autoplay: true,
                autoplayTimeout: 2500,
                autoplayHoverPause: false,
                smartSpeed: 1000,
                items: 1
            });
        }
    });
})(jQuery);
