/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle('-translate-x-full')
    hamburger.classList.toggle("ri-close-large-fill")
    
})
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle('-translate-x-full')
        hamburger.classList.toggle("ri-close-large-fill")
    })
})


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/