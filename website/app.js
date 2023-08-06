// Get the button and content elements
const RAT = document.getElementById("RAT");

// Function to simulate typing effect
function typeWriter(element, text, index, speed) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(element, text, index, speed), speed);
  }
}

// Typing effect on RAT text
const ratchanonText = "RATCHANON";
typeWriter(RAT, ratchanonText, 0, 100);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function setActiveLink() {
  const scrollY = window.scrollY;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    } else {
      navLinks[index].classList.remove('active');
    }
  });
}

function stickyNav() {
  const nav = document.querySelector('nav');
  const headerHeight = document.querySelector('header').offsetHeight;
  if (window.scrollY >= headerHeight) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

// Smooth Scroll

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

window.addEventListener('scroll', () => {
  setActiveLink();
  stickyNav();
});

const slider = document.querySelector('.slider');

let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex > 2) {
        slideIndex = 0;
    }
    updateSlide();
}

function updateSlide() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, 5000);

// Function to add 'sticky' class to the navbar initially
function setInitialSticky() {
    const nav = document.querySelector('nav');
    const headerHeight = document.querySelector('header').offsetHeight;
    if (window.scrollY >= headerHeight) {
      nav.classList.add('sticky');
    }
  }
  
  // Call the function on page load
  window.addEventListener('load', setInitialSticky);
  