const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeButton = document.getElementById("close-button");
const menuItems = document.querySelectorAll(".menu-item");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
