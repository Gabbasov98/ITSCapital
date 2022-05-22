document.addEventListener("DOMContentLoaded", ready);

function ready() {
    burger()
    if (window.innerWidth > 992) {
        setMapWidth()
    }
}

const burger = () => {
    document.querySelector(".header__burger").onclick = () => {
        document.querySelector(".header__burger").classList.toggle("header__burger--active")
        document.querySelector(".nav").classList.toggle("nav--active")
        document.querySelector("body").classList.toggle("fixed-body")
    }
}

window.onresize = function(event) {
    if (window.innerWidth > 992) {
        setMapWidth()
    }
};

const setMapWidth = () => {
    let windowWidth = window.innerWidth
    let mapContainer = document.querySelector(".contacts__map")
    console.log(windowWidth);
    mapContainer.style.width = `${windowWidth / 2}px`
}