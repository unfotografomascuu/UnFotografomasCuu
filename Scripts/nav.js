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

// Ni el Andres de comienzos de 2022(?) ni el de 2023 ni el de principios del 2024 saben como arreglarlos pero el de principios del 2024 le valió moverlo todo y lo dejo mucho mas funcional 2024/01/03 :D
