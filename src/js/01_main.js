document.addEventListener("DOMContentLoaded", ready);

function ready() {
    burger()
}

const burger = () => {
    document.querySelector(".header__burger").onclick = () => {
        document.querySelector(".header__burger").classList.toggle("header__burger--active")
        document.querySelector(".nav").classList.toggle("nav--active")
        document.querySelector("body").classList.toggle("fixed-body")
    }
}