const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.toggle("hidden");
});
