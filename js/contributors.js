// Scroll reveal for contributor cards
document.addEventListener('DOMContentLoaded', function() {
    const contributorCards = document.querySelectorAll('.contributor-card');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const cardObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        contributorCards.forEach(card => {
            cardObserver.observe(card);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        contributorCards.forEach(card => {
            card.classList.add('visible');
        });
    }
});
