(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button & Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }

        // Navbar Transparent to Solid Scroll Effect
        if ($(this).scrollTop() > 45) {
            $('.navbar-wrapper').removeClass('navbar-transparent').addClass('navbar-solid');
        } else {
            $('.navbar-wrapper').removeClass('navbar-solid').addClass('navbar-transparent');
        }
    });

    // Ensure initial navbar state is set on load
    if ($(window).scrollTop() > 45) {
        $('.navbar-wrapper').removeClass('navbar-transparent').addClass('navbar-solid');
    } else {
        $('.navbar-wrapper').removeClass('navbar-solid').addClass('navbar-transparent');
    }

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
    });
    
})(jQuery);


$(document).ready(function() {
  let el = $('.card .data .title');
  $.each(el, function(i, e) {
    console.log($(e));

    let fontSize = $(e).css('font-size');
    let lineHeight = parseInt(fontSize.replace('px', ''));
    console.log('lineHeight', lineHeight);

    let divHeight = parseInt(
      $(e)
        .css('height')
        .replace('px', '')
    );
    console.log('divHeight', divHeight);

    let lines = Math.floor(divHeight / lineHeight);
    $(e)
      .parent()
      .parent()
      .addClass('line' + lines);
  });
});


function setIntervalI(func, interval) {
    func();
    return setInterval(func, interval);
  }
  
  function flip() {
    setTimeout(() => {
      setIntervalI(function() {
        $('#js-flip-1 .card1').toggleClass('flipped');
      }, 5000);
    }, 10);
  
    setTimeout(() => {
      setIntervalI(function() {
        $('#js-flip-2 .card1').toggleClass('flipped');
      }, 5000);
    }, 2500);
  
    setTimeout(() => {
      setIntervalI(function() {
        $('#js-flip-3 .card1').toggleClass('flipped');
      }, 5000);
    }, 1500);
  
    // row 2
    setTimeout(() => {
      setIntervalI(function() {
        $('#js-flip-4 .card1').toggleClass('flipped');
      }, 5000);
    }, 500);
  
    setTimeout(() => {
      setIntervalI(function() {
        $('#js-flip-6 .card1').toggleClass('flipped');
      }, 5000);
    }, 3700);
  
    // row 3
    setTimeout(() => {
      setIntervalI(function() {
        $('#js-flip-7 .card1').toggleClass('flipped');
      }, 5000);
    }, 1200);
  
    setTimeout(() => {
      setIntervalI(function() {
        $('#js-flip-8 .card1').toggleClass('flipped');
      }, 5000);
    }, 4340);
  
    // setTimeout(() => {
    setIntervalI(function() {
      $('#js-flip-9 .card1').toggleClass('flipped');
    }, 5000);
    // }, 100);
  }
  
  $(document).ready(function() {
    flip();
  });

  imagemain();


const MAX_WIDTH = 320;
const MAX_HEIGHT = 180;
const MIME_TYPE = "image/jpeg";
const QUALITY = 0.7;

const input = document.getElementById("background_image_main");
function imagemain(ev) {
  const file = ev.target.files[0]; // get the file
  const blobURL = URL.createObjectURL(file);
  const img = new Image();
  img.src = blobURL;
  img.onerror = function () {
    URL.revokeObjectURL(this.src);
    // Handle the failure properly
    console.log("Cannot load image");
  };
  img.onload = function () {
    URL.revokeObjectURL(this.src);
    const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
    canvas.toBlob(
      (blob) => {
        // Handle the compressed image. es. upload or save in local state
        displayInfo('Original file', file);
        displayInfo('Compressed file', blob);
      },
      MIME_TYPE,
      QUALITY
    );
    document.getElementById("root").append(canvas);
  };
};

function calculateSize(img, maxWidth, maxHeight) {
  let width = img.width;
  let height = img.height;

  // calculate the width and height, constraining the proportions
  if (width > height) {
    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width = Math.round((width * maxHeight) / height);
      height = maxHeight;
    }
  }
  return [width, height];
}

// Utility functions for demo purpose

function displayInfo(label, file) {
  const p = document.createElement('p');
  p.innerText = `${label} - ${readableBytes(file.size)}`;
  document.getElementById('root').append(p);
}

function readableBytes(bytes) {
  const i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
}