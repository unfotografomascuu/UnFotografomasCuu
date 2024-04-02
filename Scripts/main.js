function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".first-block", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "power4.inOut"
    });

    tl.to(".transition", {
        duration: 0,
        opacity: 1,
        delay: -0.1
    });

    tl.to(".first-block", {
        duration: 1.2,
        width: "100%",
        left: "100%",
        ease: "power4.inOut",
    });

    tl.to(".transition img", {
        left: 0,
        stagger: 0.3,
        ease: "power4.out",
        duration: 1.8,
        delay: -1.35
    });

    tl.to(".transition img", {
        left: "110%",
        stagger: -0.1,
        ease: "power4.inOut",
        duration: 1.5,
    });

    tl.to(".second-block", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "power4.inOut",
        delay: -1.45
    });
        
    tl.to(".transition-container", {
        duration: 0,
        backgroundColor:"#ffffff00",
        delay: 0
    });

    tl.to(".second-block", {
        duration: 0.8,
        width: "100%",
        left: "100%",
        ease: "power4.inOut",
    });

    tl.to(".transition", {
        duration: 0,
        opacity: 0,
        delay: -1.2
    });

    tl.to(".second-block", {
        duration: 0.8,
        left: "100%",
    });

    tl.to(".content", {
        duration: 0.8,
        opacity: 1,
        delay: -1.3
    });

    tl.to(".first-block, .second-block", {
        duration: 0,
        opacity: 0
    });

    tl.to(".first-block, .second-block", {
        duration: 0,
        width: "0%",
        left: "0",
    });

    tl.to(".transition img", {
        left: "-110%",
        duration: 0,
    });

    tl.to(".first-block, .second-block", {
        duration: 0,
        opacity: 1
    });
}

function pageout() {
    var t = gsap.timeline();
    t.to(".open", {
        duration: 0,
        className: "nav-bar"
    });

    t.to(".content", { 
        duration: 0.4, 
        opacity: 0
    });
}

function animNav() {

    const tl = gsap.timeline({ paused: true });

    function animateNav() {

        tl.to(".nav-container", 0.8, {
            autoAlpha: 1,
            delay: 0.1,
            left: "0%",
            ease: "power4.inOut"
        });

        tl.to(".nav-bar", 0.1, {

            className: "open"

        });

        tl.from(".social-links > div", 0.4, {
            opacity: 0,
            y: 10,
            stagger: {
                amount: 0.4,
            },
        });

        tl.from(".nav-section-link > a", 0.8, {
            opacity: 0,
            top: 60,
            stagger: {
                amount: 0.4,
            },
        },
            "-=0.4");

        tl.from(".nav-footer", 0.3, {
            opacity: 0
        }, "-=0.5").reverse();

    };

    const navBtn = document.getElementById("menu-toggle-btn");
    const navActivator1 = document.getElementById("nav-Activator-1");
    const navActivator2 = document.getElementById("nav-Activator-2");
    const navActivator3 = document.getElementById("nav-Activator-3");


    animateNav();

    navBtn.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };

    navActivator1.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };

    navActivator2.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };

    navActivator3.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };
};

animNav();

function SectionView1() { const e = document.querySelector("#photo-section-1"), o = document.querySelector("#photo-section-2"), t = document.querySelector("#photo-section-3"); e.classList.toggle("open-section"), o.classList.remove("open-section"), t.classList.remove("open-section") } function SectionView2() { const e = document.querySelector("#photo-section-1"), o = document.querySelector("#photo-section-2"), t = document.querySelector("#photo-section-3"); e.classList.remove("open-section"), o.classList.toggle("open-section"), t.classList.remove("open-section") } function SectionView3() { const e = document.querySelector("#photo-section-1"), o = document.querySelector("#photo-section-2"), t = document.querySelector("#photo-section-3"); e.classList.remove("open-section"), o.classList.remove("open-section"), t.classList.toggle("open-section") }

function Sticky() {
    if (window.screen.width >= 1280 && window.screen.height >= 768) {
        scroll.on("scroll", (position) => {
            position.scroll.y > 100 ? document.querySelector('.nav-bar, .open').classList.add('sticky') : document.querySelector('.nav-bar, .open').classList.remove('sticky');  
        })
    }
};
