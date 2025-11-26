// Burger menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  const navAnchors = navLinks.querySelectorAll('a');

  burger.addEventListener('click', () => {
    // Toggle visibility of nav
    if (navLinks.style.display === 'flex' || navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
    }
  });

  // Close menu when clicking a link (on mobile)
  navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
      }
    });
  });

  // Smooth scrolling for anchor links
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      if (targetId) {
        const section = document.getElementById(targetId);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});