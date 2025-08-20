// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Add a little bounce to cards on hover (for touch devices)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('touchstart', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 12px 36px rgba(44, 62, 80, 0.22)';
  });
  card.addEventListener('touchend', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

