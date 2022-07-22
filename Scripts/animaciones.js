function pageTransition() {
    var t = gsap.timeline();
    t.to(".first-block", { duration: 1.8, width: "100%", left: "0%", ease: "Expo.easeInOut" }),
        t.to(".transition", { duration: 0, opacity: 1, delay: -0.3 }),
        t.to(".first-block", { duration: 1.4, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4 }),
        t.to(".second-block", { duration: 1.4, width: "100%", left: "0%", ease: "Expo.easeInOut" }),
        t.to(".second-block", { duration: 1.1, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4 }),
        t.to(".transition", { duration: 0, opacity: 0, delay: -1.2 }),
        t.to(".contenido", { duration: 0.5, opacity: 1, delay: -0.5 }),
        t.set(".second-block", { left: "-100%" });
}
function principalAnimation() {
    var t = gsap.timeline();
    t.to(".first-block", { duration: 1.8, width: "100%", left: "0%", ease: "Expo.easeInOut" }),
        t.to(".transition", { duration: 0, opacity: 1, delay: -0.3 }),
        t.to(".first-block", { duration: 1.4, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4 }),
        t.to(".second-block", { duration: 1.4, width: "100%", left: "0%", ease: "Expo.easeInOut" }),
        t.to(".second-block", { duration: 1.1, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4 }),
        t.to(".transition", { duration: 0, opacity: 0, delay: -1.2 }),
        t.to(".contenido", { duration: 0.5, opacity: 1, delay: -0.5 }),
        t.set(".second-block", { left: "-100%" }),
        t.from(".anim-nav", { duration: 0.9, translateY: -50, opacity: 0, stagger: 0.1, delay: -0.5 }),
        t.from(".controler-section", { duration: 0.9, translateX: 100, opacity: 0, delay: -0.1 }),
        t.to("#txt-parallax-1", { duration: 0.9, translateY: -50, opacity: 1, delay: -0.6 }),
        t.to("#txt-parallax-2", { duration: 0.9, translateY: -60, opacity: 1, delay: -0.5 }),
        t.to("#txt-parallax-3", { duration: 0.9, translateY: -60, opacity: 1, delay: -0.4 });
}
function secondaryAnimation() {
    var t = gsap.timeline();
    t.to(".first-block", { duration: 1.8, width: "100%", left: "0%", ease: "Expo.easeInOut" }),
        t.to(".transition", { duration: 0, opacity: 1, delay: -0.3 }),
        t.to(".first-block", { duration: 1.4, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4 }),
        t.to(".second-block", { duration: 1.4, width: "100%", left: "0%", ease: "Expo.easeInOut" }),
        t.to(".second-block", { duration: 1.1, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4 }),
        t.to(".transition", { duration: 0, opacity: 0, delay: -1.2 }),
        t.to(".contenido", { duration: 0.5, opacity: 1, delay: -0.5 }),
        t.set(".second-block", { left: "-100%" }),
        t.from("#logo-2, #back", { duration: 0.9, translateY: -50, opacity: 0, delay: -0.4 }),
        t.from(".NavBar-2", { duration: 0.9, translateY: -50, opacity: 0 }),
        t.from(".anim-banner", { duration: 0.8, opacity: 0, delay: -0.5 }),
        t.from(".anim-gallery", { duration: 1, translateY: 50, opacity: 0, stagger: 0.1 }),
        t.to(".imagen-galeria", { duration: 1, opacity: 1, stagger: 0.2, delay: -1 });
}

function pageout() {
    var t = gsap.timeline();
    t.to(".text", { duration: 0.9, opacity: 0 }),
        t.to(".nav-links-close", { duration: 0.9, translateY: -50, opacity: 0, delay: -1 }),
        t.to(".controler-section", { duration: 0.9, translateX: 100, opacity: 0, delay: -1 }),
        t.to("#logo", { duration: 0.9, translateY: -50, opacity: 0, delay: -1 }),
        t.to(".NavBar", { duration: 0.9, translateY: -800, opacity: 0, delay: -1 }),
        t.to(".contenido", { duration: 0, opacity: 0, delay: 0.5 });
}
function secondarypageout() {
    var t = gsap.timeline();
    t.to("#logo-2, #back", { duration: 0.9, translateY: -50, opacity: 0 }),
        t.to(".NavBar-2", { duration: 0.9, translateY: -50, opacity: 0, delay: -0.85 }),
        t.to(".anim-banner", { duration: 0.8, opacity: 0, delay: -0.7 }),
        t.to(".anim-gallery", { duration: 1, translateY: 50, opacity: 0, stagger: 0.2, delay: -0.9 }),
        t.to(".imagen-galeria", { duration: 0.9, opacity: 0, delay: -1.4 });
}
