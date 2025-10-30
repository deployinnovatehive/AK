// Simple contact form handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting Alaknanda Solutions! We'll get back to you soon.");
    this.reset();
  });
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Animation on scroll
function animateOnScroll(selector) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
}

animateOnScroll(".hero-text h1, .hero-text p, .primary-btn");
animateOnScroll(".hero-img img");
animateOnScroll(".about-card");
animateOnScroll(".card");
animateOnScroll(".service-card");

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", function() {
    const nav = document.querySelector(".navbar nav");
    if (nav) {
      nav.classList.toggle("active");
    }
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", function() {
    const nav = document.querySelector(".navbar nav");
    if (nav) {
      nav.classList.remove("active");
    }
  });
});

// Initialize Swiper for Mission & Vision - always initialize with breakpoints for responsive behavior
document.addEventListener('DOMContentLoaded', function() {
  const swiperElement = document.querySelector('.mission-vision-swiper');
  if (swiperElement) {
    const missionVisionSwiper = new Swiper('.mission-vision-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      initialSlide: 0,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 800,
      effect: 'slide',
      grabCursor: true,
      centeredSlides: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
          spaceBetween: 20,
          autoplay: {
            enabled: true,
          },
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 20,
          autoplay: {
            enabled: false, // Disable autoplay on desktop for static display
          },
          pagination: {
            enabled: false,
          },
        }
      },
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
    });
    console.log('Swiper initialized with breakpoints');
  }
});