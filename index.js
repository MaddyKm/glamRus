const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("navLinks");
const links = navMenu.querySelectorAll("a");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target)) {
    navMenu.classList.remove("open");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});
