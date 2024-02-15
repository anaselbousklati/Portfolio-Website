AOS.init();

const nav = document.querySelector("header nav");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});