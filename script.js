document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const icon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();

    navLinks.classList.toggle("active");
    icon.classList.toggle("rotate");
  });

  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      icon.classList.remove("rotate");
    }
  });

});
