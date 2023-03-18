const hamburger = document.querySelector(".header .hamburger");
const busqueda = document.querySelector(".header .busqueda");
const navLinks = document.querySelector(".header .nav-links");
const otherLinks = document.querySelector(".header .other-links");
hamburger.addEventListener("click", () => {     
    hamburger.classList.toggle("active");   
    busqueda.classList.toggle("active");
    navLinks.classList.toggle("active");
    otherLinks.classList.toggle("active");
})