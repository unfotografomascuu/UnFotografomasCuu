function firstVisit() {
    var tl = gsap.timeline();
    tl.to('ul.transition li', { duration: 0, scaleY: 1, transformOrigin: "bottom left" });
    tl.to('.contenido', { duration: 0, opacity: 1 });
    tl.to('.load-anim', { duration: .9, opacity: 1 });
    tl.to('.loading-bar', { duration: 1, scaleX: 1, transformOrigin: "left" });
    tl.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
    tl.to('.loading-bar', { duration: 0, scaleX: 0, transformOrigin: "left" });
    tl.from('.anim-nav', { duration: .9, translateY: -50, opacity: 0, stagger: .1, delay: -.5 });
    tl.from('.controler-section', { duration: .9, translateX: 100, opacity: 0, delay: -.1 });
    tl.to('#txt-parallax-1', { duration: .9, translateY: -50, opacity: 1, delay: -.6 });
    tl.to('#txt-parallax-2', { duration: .9, translateY: -60, opacity: 1, delay: -.5 });
    tl.to('#txt-parallax-3', { duration: .9, translateY: -60, opacity: 1, delay: -.4 });
}

function SecondaryfirstVisit() {
    var tl = gsap.timeline();
    tl.to('ul.transition li', { duration: 0, scaleY: 1, transformOrigin: "bottom left" });
    tl.to('.contenido', { duration: 0, opacity: 1 });
    tl.to('.load-anim', { duration: .9, opacity: 1 });
    tl.to('.loading-bar', { duration: 1, scaleX: 1, transformOrigin: "left" });
    tl.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
    tl.to('.loading-bar', { duration: 0, scaleX: 0, transformOrigin: "left" });
    tl.from('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0, delay: -.4});
    tl.from('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.9 });
    tl.from('.anim-banner', { duration: .8, opacity: 0, delay: -.7});
    tl.from('.anim-gallery', { duration: 1.1, translateY: 50, opacity: 0, stagger: 0.2 });
    tl.from('.imagen-galeria', { duration: 1, opacity: 0, delay: -.1 });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to('ul.transition li', { duration: .6, scaleY: 1, transformOrigin: "bottom left", stagger: .2 });
    tl.to('.load-anim', { duration: .9, opacity: 1 });
    tl.to('.loading-bar', { duration: .8, scaleX: 1, transformOrigin: "left" });
    tl.to('.load-anim', { duration: .9, opacity: 0 });
    tl.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
    tl.to('.loading-bar', { duration: 0, scaleX: 0, transformOrigin: "left" });
}

function principalAnimation() {
    var tl = gsap.timeline();
    tl.from('.anim-nav', { duration: .9, translateY: -50, opacity: 0, stagger: .1, delay: 2.9 });
    tl.from('.controler-section', { duration: .9, translateX: 100, opacity: 0, delay: -.1 });
    tl.to('#txt-parallax-1', { duration: .9, translateY: -50, opacity: 1, delay: -.6 });
    tl.to('#txt-parallax-2', { duration: .9, translateY: -60, opacity: 1, delay: -.5 });
    tl.to('#txt-parallax-3', { duration: .9, translateY: -60, opacity: 1, delay: -.4 });
}

function secondaryAnimation() {
    var tl = gsap.timeline();
    tl.from('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0, delay: 2.9 });
    tl.from('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.9 });
    tl.from('.anim-banner', { duration: .8, opacity: 0, delay: -.7});
    tl.from('.anim-gallery', { duration: 1.1, translateY: 50, opacity: 0, stagger: 0.2, delay: -1});
    tl.from('.imagen-galeria', { duration: 1, opacity: 0, delay: -1.1 });
}

function pageout() {
    var tl = gsap.timeline();
    tl.to('.text', { duration: .9, opacity: 0 })
    tl.to('.nav-links-close', { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    tl.to('.controler-section', { duration: .9, translateX: 100, opacity: 0, delay: -1 });
    tl.to("#logo", { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    tl.to(".NavBar", { duration: .9, translateY: -800, opacity: 0, delay: -1 });
}

function secondarypageout() {
    var tl = gsap.timeline();
    tl.to('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0 });
    tl.to('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.85 });
    tl.to('.anim-banner', { duration: .8, opacity: 0, delay: -.7});
    tl.to('.anim-gallery', { duration: 1, translateY: 50, opacity: 0, stagger: 0.2, delay: -.9 });
    tl.to('.imagen-galeria', { duration: .9, opacity: 0, delay: -1.4 });
}