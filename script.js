window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active", window.scrollY > 50);

});
