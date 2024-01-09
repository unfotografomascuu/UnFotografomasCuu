function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".first-block", { duration: 1.8, width: "100%", left: "0%", ease: "power4.inOut" }),
        tl.to(".transition", { duration: 0, opacity: 1, delay: -0.3 }),
        tl.to(".first-block", { duration: 1.4, width: "100%", left: "100%", ease: "power4.inOut", delay: 0.4 }),
        tl.to(".second-block", { duration: 1.4, width: "100%", left: "0%", ease: "power4.inOut" }),
        tl.to(".second-block", { duration: 1.1, width: "100%", left: "100%", ease: "power4.inOut", delay: 0.4 }),
        tl.to(".transition", { duration: 0, opacity: 0, delay: -1.2 }),
        tl.to(".contenido", { duration: 0.5, opacity: 1, delay: -0.5 }),
        tl.set(".second-block", { left: "-100%" });
}

function pageout() {
    var t = gsap.timeline();
    t.to(".contenido", { duration: 0.5, opacity: 0, delay: -0.2, stagger: .1 });
}

function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";
  
    applyTheme(savedTheme);
  
    for (const optionElement of document.querySelectorAll("#selTheme option")) {
      optionElement.selected = savedTheme === optionElement.value;
    }
  
  });
  
  function animNav() {

    const tl = gsap.timeline({ paused: true });

    function animateNav() {

        tl.to(".nav-container", 0.2, {
            autoAlpha: 1,
            delay: 0.1,
        });

        tl.to(".logo-text", 0.2, {

        },
            "-+0.1");

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
            position.scroll.y > 100 ? document.querySelector('.nav-bar').classList.add('sticky') : document.querySelector('.nav-bar').classList.remove('sticky');
        })
    }
};
