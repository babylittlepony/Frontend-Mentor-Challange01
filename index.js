const navMenu = document.querySelector(".navbar-menu");
const navToggler = document.querySelector(".navbar-menu-toggle");

navToggler.addEventListener("click", () => {
  const visibility = navMenu.getAttribute("data-visible");
  if (visibility === "false") {
    navMenu.setAttribute("data-visible", true);
    navToggler.setAttribute("aria-expanded", true);
    document.body.style.backgroundColor = "var(--bg-opacity-low)";
  } else if (visibility === "true") {
    navMenu.setAttribute("data-visible", false);
    navToggler.setAttribute("aria-expanded", false);
    document.body.style.backgroundColor = "var(--Almost-White)";
  }
});
