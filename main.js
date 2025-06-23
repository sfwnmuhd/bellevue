// Mobile Navigation Toggle
const hamburger = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Change hamburger icon to X when menu is open
  if (navLinks.classList.contains('active')) {
    hamburger.classList.remove('fa-bars');
    hamburger.classList.add('fa-times');
  } else {
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
  }
});

// Close mobile menu on window resize (if screen becomes larger)
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
  }
});

// Hero Background Image Slider
const images = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg'
];

const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');

let current = 0;
let isBg1Active = true;

bg1.style.backgroundImage = `url('${images[current]}')`;

setInterval(() => {
  const next = (current + 1) % images.length;
  const nextImage = `url('${images[next]}')`;

  if (isBg1Active) {
    bg2.style.backgroundImage = nextImage;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = nextImage;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  isBg1Active = !isBg1Active;
  current = next;
}, 4000);

// Counting Animation
function countUp(element, target) {
  const speed = 200; // lower is faster
  const increment = target / speed;
  let count = 0;

  const update = () => {
    count += increment;
    if (count < target) {
      element.textContent = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      element.textContent = target + "+";
    }
  };

  update();
}

function startCountUp() {
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    if (!counter.classList.contains("counted")) {
      countUp(counter, target);
      counter.classList.add("counted");
    }
  });
}

// Trigger counting animation on scroll
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".stats-card");
  if (section && isInViewport(section)) {
    startCountUp();
  }
});

// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(el => {
  observer.observe(el);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.backgroundColor = 'white';
    navbar.style.backdropFilter = 'none';
  }
});