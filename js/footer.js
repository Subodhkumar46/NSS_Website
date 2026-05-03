/* js/footer.js — Newsletter signup & Back-to-top for shared footer */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Newsletter Signup ---- */
  const signupBtn = document.getElementById('footer-signup-btn');
  const emailInput = document.getElementById('footer-email-input');

  if (signupBtn && emailInput) {
    signupBtn.addEventListener('click', function () {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        showFooterToast('Please enter your email address.', 'warning');
        return;
      }
      if (!emailRegex.test(email)) {
        showFooterToast('Please enter a valid email address.', 'error');
        return;
      }

      // Success feedback
      emailInput.value = '';
      showFooterToast('🎉 Thank you for subscribing!', 'success');
    });
  }

  /* ---- Back to Top ---- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });

    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Toast helper ---- */
  function showFooterToast(message, type) {
    const existing = document.getElementById('footer-toast');
    if (existing) existing.remove();

    const colors = {
      success: '#6366f1',
      warning: '#f59e0b',
      error:   '#ef4444'
    };

    const toast = document.createElement('div');
    toast.id = 'footer-toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: ${colors[type] || colors.success};
      color: #fff;
      padding: 14px 24px;
      border-radius: 10px;
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      box-shadow: 0 8px 30px rgba(0,0,0,0.3);
      z-index: 99999;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.4s ease;
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }
});
