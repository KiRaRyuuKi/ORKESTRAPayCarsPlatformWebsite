/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

if (navToggle) {
     navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu")
     })
}

if (navClose) {
     navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu")
     })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link")

const linkAction = () => {
     const navMenu =document.getElementById("nav-menu")
     navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
     const header = document.getElementById("header")
     this.scrollY >= 50 ? header.classList.add("scroll-header")
                        : header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
