
function NavBtn() {
        const nav = document.querySelector(".nav-links");
        nav.classList.toggle('nav-active');

};

function NavSection() {
        const menuBtn = document.querySelector("#menu-btn");
        const nav = document.querySelector(".nav-links");
        const navtop = document.querySelector(".NavBar");

        nav.classList.toggle("nav-active");
        menuBtn.classList.toggle('open');
        navtop.classList.add("nav-blur");
};


function NavSocial() {
        const nav = document.querySelector(".nav-links");
        const menuBtn = document.querySelector("#menu-btn");
        const navtop = document.querySelector(".NavBar");

        nav.classList.toggle("nav-active");
        menuBtn.classList.toggle("open");
        navtop.classList.add("nav-blur");

};

function NavBlur() {
        const navtop = document.querySelector(".NavBar");
        navtop.classList.toggle("nav-blur");
}