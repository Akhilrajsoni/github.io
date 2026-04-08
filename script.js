// ==================== Theme Toggle ==================== //
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
const themeIcon = themeToggle.querySelector(".theme-icon");

// Initialize theme
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

// ==================== Mobile Menu Toggle ==================== //
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// ==================== Scroll Animations ==================== //
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document
  .querySelectorAll(".project-card, .timeline-item, .skill-category")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });

// ==================== Scroll Indicator ==================== //
window.addEventListener("scroll", () => {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (window.scrollY > 100) {
    scrollIndicator.style.opacity = "0";
    scrollIndicator.style.pointerEvents = "none";
  } else {
    scrollIndicator.style.opacity = "1";
    scrollIndicator.style.pointerEvents = "auto";
  }
});

// ==================== Smooth Scroll Navigation ==================== //
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ==================== Active Navigation Link ==================== //
const sections = document.querySelectorAll("section[id]");
const allNavLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  allNavLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.style.color = "var(--primary-color)";
    } else {
      link.style.color = "inherit";
    }
  });
});

// ==================== Contact Form ==================== //
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!name || !email || !message) {
    showNotification("Please fill all fields", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email", "error");
    return;
  }

  // Simulate form submission
  const button = contactForm.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Sending...";
  button.disabled = true;

  setTimeout(() => {
    showNotification(
      "Message sent successfully! I'll get back to you soon.",
      "success",
    );
    contactForm.reset();
    button.textContent = originalText;
    button.disabled = false;
  }, 1500);
});

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === "success" ? "#10b981" : "#ef4444"};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ==================== Skill Progress Animation ==================== //
const skillProgressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll(".skill-progress");
        progressBars.forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = "0";
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
        skillProgressObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

document.querySelector(".skills") &&
  skillProgressObserver.observe(document.querySelector(".skills"));

// ==================== Parallax Effect ==================== //
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrollPosition = window.scrollY;
  hero.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
});

// ==================== Project Card Interactions ==================== //
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// ==================== Mobile Menu (if needed) ==================== //
// Add scroll spy for better UX on mobile
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    // Scrolling up
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== Loading Animation ==================== //
window.addEventListener("load", () => {
  // Add loaded class to body
  document.body.classList.add("loaded");
});

// ==================== Copy Email to Clipboard ==================== //
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const email = link.href.replace("mailto:", "");
    navigator.clipboard.writeText(email).then(() => {
      showNotification("Email copied to clipboard!", "success");
    });
  });
});

// ==================== Keyboard Navigation ==================== //
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close any open modals/dropdowns if needed
  }

  // Scroll to sections with keyboard shortcuts
  if (e.ctrlKey || e.metaKey) {
    const sectionMap = {
      1: "#home",
      2: "#projects",
      3: "#experience",
      4: "#skills",
      5: "#contact",
    };

    if (sectionMap[e.key]) {
      e.preventDefault();
      const target = document.querySelector(sectionMap[e.key]);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});

// ==================== Prevent FOUC (Flash of Unstyled Content) ==================== //
document.documentElement.style.visibility = "visible";
document.body.style.visibility = "visible";

// ==================== Performance Monitoring ==================== //
if (performance.timing) {
  window.addEventListener("load", () => {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log("Page load time: " + pageLoadTime + "ms");
  });
}

// ==================== Add Animation Delays to Form ==================== //
const formGroups = document.querySelectorAll(".form-group");
formGroups.forEach((group, index) => {
  group.style.animationDelay = `${index * 0.1}s`;
});

// ==================== Prevent Form Submission Flickering ==================== //
contactForm.addEventListener("submit", (e) => {
  const button = contactForm.querySelector("button");
  button.style.pointerEvents = "none";
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 1500);
});

// ==================== Add Focus Visible Styles ==================== //
document.querySelectorAll("a, button, input, textarea").forEach((element) => {
  element.addEventListener("focus", function () {
    this.style.outline = "none";
  });
});

// ==================== Initialize on DOM Ready ==================== //
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully!");

  // Add any additional initialization here
  // Example: Load additional content, initialize plugins, etc.
});
