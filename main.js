    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('navLinks');
    if (nav) nav.classList.remove('open');
  });
});
