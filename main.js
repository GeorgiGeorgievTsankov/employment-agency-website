// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Close navbar on link click
const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  });
});

// Form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Add form handling logic here
  alert('Благодарим за съобщението! Ще се свържем с вас скоро.');
});