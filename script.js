window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active", window.scrollY > 50);

});
/* MENU MOBILE */

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{

    navMenu.classList.toggle("active");

});
