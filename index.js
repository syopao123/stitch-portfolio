// Simple intersection observer for reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.classList.remove("opacity-0", "translate-y-10");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".project-card, .glass-effect").forEach((el) => {
  el.classList.add(
    "opacity-0",
    "translate-y-10",
    "transition-all",
    "duration-700",
  );
  observer.observe(el);
});

// Navbar dropdown button
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("mobile-menu-icon");
  const btn = document.getElementById("mobile-menu-btn");
  const isOpen = !menu.classList.contains("hidden");

  if (isOpen) {
    closeMobileMenu();
  } else {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    icon.textContent = "close";
    btn.setAttribute("aria-expanded", "true");
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("mobile-menu-icon");
  const btn = document.getElementById("mobile-menu-btn");

  menu.classList.add("hidden");
  menu.classList.remove("flex");
  icon.textContent = "menu";
  btn.setAttribute("aria-expanded", "false");
}