const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  icon.classList.toggle("rotate");
});
