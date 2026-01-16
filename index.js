const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuItems = document.querySelectorAll(".menu-item");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

const pageContainer = document.getElementById("page-container");
const pages = {
  "/": "home-page",
  "/coaches": "coaches-page",
  "/schedule": "schedule-page",
  "/pricing": "pricing-page",
  "/contact": "contact-page",
};

function showPage(pageId) {
  document.querySelectorAll(".page-section").forEach((page) => {
    page.classList.add("hidden");
  });

  const page = document.getElementById(pageId);
  if (page) {
    page.classList.remove("hidden");
    window.scrollTo(0, 0);
  }
}

function updateActiveNavLink(route) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  const sanitizedRoute = route.replace(/["'\\]/g, "");
  const activeLinks = document.querySelectorAll(
    `[data-route="${sanitizedRoute}"]`
  );
  activeLinks.forEach((link) => {
    link.classList.add("active");
  });
}

function handleRoute() {
  let hash = window.location.hash.slice(1) || "/";

  hash = hash.replace(/\/+/g, "/").trim();

  if (!/^[a-zA-Z0-9\/-]*$/.test(hash)) {
    window.location.hash = "/";
    return;
  }

  const pageId = pages[hash];

  if (pageId) {
    showPage(pageId);
    updateActiveNavLink(hash);
  } else {
    window.location.hash = "/";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    window.location.hash = "/";
  }
});

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);

handleRoute();
