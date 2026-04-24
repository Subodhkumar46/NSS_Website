$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar-glass').addClass('scrolled');
        } else {
            $('.navbar-glass').removeClass('scrolled');
        }
    });
});
