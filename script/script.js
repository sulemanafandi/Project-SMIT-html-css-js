document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;

    // Close all other accordions
    document.querySelectorAll('.accordion-item').forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '+';
      }
    });

    // Toggle current accordion
    item.classList.toggle('active');

    // Update icon
    const icon = header.querySelector('.icon');
    icon.textContent = item.classList.contains('active') ? '−' : '+';
  });
});
