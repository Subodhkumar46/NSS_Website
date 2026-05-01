// Scroll reveal for media cards
document.addEventListener('DOMContentLoaded', function() {
    const mediaCards = document.querySelectorAll('.media-card');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const mediaObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add delay based on index for staggered animation
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        mediaCards.forEach(card => {
            mediaObserver.observe(card);
        });
    } else {
        mediaCards.forEach(card => {
            card.classList.add('visible');
        });
    }
});
