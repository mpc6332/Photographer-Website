const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav__links");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        //Adds the menu icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
    } else {
        menu.classList.add("active");

        // Adds the close icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);