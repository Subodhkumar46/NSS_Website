function darkMode() {
      var element = document.body;
      var theme = document.getElementsByClassName("bg-light");
      var content = document.getElementById("DarkModetext");
      theme.className = "bg-dark";
      element.className = "dark-mode";
      content.innerText = "Dark Mode is ON";
    }
    function lightMode() {
      var element = document.body;
      var content = document.getElementById("DarkModetext");
      element.className = "light-mode";
      content.innerText = "Dark Mode is OFF";
    }

document.addEventListener("DOMContentLoaded", function () {
        const bgSlides = document.querySelectorAll("#hero-slider .hero-bg-slide");
        let currentBgIndex = 0;
        const bgIntervalTime = 5000; // 5 seconds for slow Ken Burns feel

        setInterval(function () {
          const prevIndex = currentBgIndex;
          currentBgIndex = (currentBgIndex + 1) % bgSlides.length;

          // Manage z-index so new image is always smoothly fading in on top 
          bgSlides[prevIndex].style.zIndex = "0";
          bgSlides[currentBgIndex].style.zIndex = "1";

          bgSlides[prevIndex].classList.remove("slide-active");
          bgSlides[currentBgIndex].classList.add("slide-active");
        }, bgIntervalTime);
      });

document.addEventListener("DOMContentLoaded", function () {
      const track = document.getElementById('nssSliderTrack');
      // Filter out text nodes safely (in case of empty spaces)
      const slides = Array.from(track.children).filter(child => child.classList.contains('custom-slide'));
      const nextBtn = document.getElementById('nssNextBtn');
      const prevBtn = document.getElementById('nssPrevBtn');
      const dotsContainer = document.getElementById('nssSliderDots');

      let currentIndex = 0;
      let slideInterval;
      const intervalTime = 3500; // Auto slide every 3.5 seconds

      // 1. Create navigation dots dynamically based on number of slides
      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('custom-dot');
        if (index === 0) dot.classList.add('active'); // First dot is active

        // Dot click event
        dot.addEventListener('click', () => {
          goToSlide(index);
          resetInterval();
        });
        dotsContainer.appendChild(dot);
      });

      const dots = Array.from(dotsContainer.children);

      // 2. Sliding Function
      function updateSlider() {
        // Apply CSS transform to move the track
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

        // Sync active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
      }

      // Move to the next slide (Loop back to 0 if at the end)
      function nextSlide() {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
      }

      // Move to previous slide (Loop to end if at 0)
      function prevSlide() {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSlider();
      }

      // Jump to a specific slide
      function goToSlide(index) {
        currentIndex = index;
        updateSlider();
      }

      // 3. Auto Play Logic
      function startInterval() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }

      function resetInterval() {
        clearInterval(slideInterval);
        startInterval(); // Restart the timer
      }

      // 4. Attach Event Listeners to Arrows
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          nextSlide();
          resetInterval();
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          prevSlide();
          resetInterval();
        });
      }

      // Pause auto-play on mouse hover
      track.addEventListener('mouseenter', () => clearInterval(slideInterval));
      track.addEventListener('mouseleave', startInterval);

      // Turn on auto play
      startInterval();
    });

// Show popup after 2s delay, only once per session
    (function () {
      const POPUP_KEY = 'nss_social_popup_shown';
      const overlay = document.getElementById('nss-popup-overlay');
      const closeBtns = [
        document.getElementById('popup-close-x-btn'),
        document.getElementById('popup-dismiss-btn')
      ];

      function closePopup() {
        overlay.classList.remove('popup-visible');
        sessionStorage.setItem(POPUP_KEY, '1');
        // Restore body scroll
        document.body.style.overflow = '';
      }

      // Only show if not already shown this session
      if (!sessionStorage.getItem(POPUP_KEY)) {
        setTimeout(function () {
          overlay.classList.add('popup-visible');
          // Prevent background scroll while popup open
          document.body.style.overflow = 'hidden';
        }, 2000); // 2 second delay
      }

      // Close on button clicks
      closeBtns.forEach(function (btn) {
        if (btn) btn.addEventListener('click', closePopup);
      });

      // Close on clicking the backdrop (outside card)
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closePopup();
      });

      // Close on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closePopup();
      });

      // Close popup when social link is clicked (user is connecting)
      ['popup-insta-btn', 'popup-linkedin-btn'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.addEventListener('click', function () {
          setTimeout(closePopup, 300);
        });
      });
    })();

$(document).ready(function () {
      if ($(".post-holder-carousel").length) {
        $(".post-holder-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          loop: true,
          margin: 30,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
          }
        });
      }
    });

    // Smooth scroll appearance logic
    document.addEventListener("DOMContentLoaded", function () {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('appear');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });

        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
      } else {
        // Fallback for extremely old browsers natively
        document.querySelectorAll('.fade-in-up').forEach(el => el.classList.add('appear'));
      }
    });