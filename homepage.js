document.addEventListener('DOMContentLoaded', function () {
  // Для кнопки CTA
  const button = document.querySelector('.cta-btn');
  if (button) {
    button.addEventListener('click', function () {
      const link = button.getAttribute('data-link');
      window.location.href = link;
    });
  }

  // Для FAQ
  document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement; // Батьківський .faq-static-item
      const content = item.querySelector('.faq-content');
      const toggle = header.querySelector('.faq-toggle');

      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        content.style.display = 'block';
        toggle.textContent = '-';
      } else {
        content.style.display = 'none';
        toggle.textContent = '+';
      }
    });
  });

  // Для кнопки "Повернутись нагору"
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'flex';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });

    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // Для кнопок копіювання (приклад)
  const buttons = document.querySelectorAll('.copy-btn'); // Замініть на актуальний селектор
  if (buttons.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('click', copyToClipboard);
    });
  }
});
