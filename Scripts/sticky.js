function Sticky() {
    if (window.screen.width >= 1280 && window.screen.height >= 768) {
        scroll.on("scroll", (position) => {
            position.scroll.y > 100 ? document.querySelector(".nav-container").classList.add("sticky") : document.querySelector(".nav-container").classList.remove("sticky");
        })
    }
};
