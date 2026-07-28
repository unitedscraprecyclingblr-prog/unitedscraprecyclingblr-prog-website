const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {

    if(window.innerWidth <= 992){
        dropdown.classList.toggle("open");
    }

});