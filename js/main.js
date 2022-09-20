const $ = (selector) => document.querySelector(selector);

const buttonMenu = $("#button__menu");
const menu = $(".menu");

buttonMenu.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.add("flex");
    menu.classList.remove("hidden");
  } else {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }
});
