const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Create backdrop
const backdrop = document.createElement('div');
backdrop.classList.add('nav-backdrop');
document.body.appendChild(backdrop);

function openNav() {
  navLinks.classList.add('active');
  hamburger.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navLinks.classList.remove('active');
  hamburger.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('active') ? closeNav() : openNav();
});

backdrop.addEventListener('click', closeNav);

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeNav();
});