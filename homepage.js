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
      const item = header.parentElement; 
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


