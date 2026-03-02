const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const icon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  icon.classList.toggle("rotate");
});

// Click outside to close menu
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
    icon.classList.remove("rotate");
  }
});
