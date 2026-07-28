//====================
// MOBILE MENU
//====================
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

//====================
// STICKY HEADER
//====================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});