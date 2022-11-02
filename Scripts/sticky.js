function Sticky() {
    if (window.screen.width >= 1280 && window.screen.height >= 768) {
        scroll.on("scroll", (position) => {
            position.scroll.y > 100 ? document.querySelector("#nav").classList.add("sticky") : document.querySelector("#nav").classList.remove("sticky");
        }),
            window.addEventListener("scroll", function () {
                var header;
                document.querySelector("header").classList.toggle("sticky", window.scrollY > 150);
            })
    }

};
