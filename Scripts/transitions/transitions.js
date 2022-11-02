
function firstVisit() {
    gsap.to('ul.transition li', { duration: 0, scaleY: 1, transformOrigin: "bottom left"});
    gsap.to('.load-anim', { duration: .9 ,opacity: 1});
    gsap.to('.loading-bar', {  duration: 1, scaleX: 1, transformOrigin: "left"});
    gsap.to('.load-anim', { duration: .9, opacity: 0});
    gsap.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
    gsap.to('.loading-bar', {  duration: 0, scaleX: 0, transformOrigin: "left"});
}

function pageTransition() {
    gsap.to('ul.transition li', { duration: .6, scaleY: 1, transformOrigin: "bottom left", stagger: .2 });
    gsap.to('.load-anim', { duration: .9 ,opacity: 1});
    gsap.to('.loading-bar', {  duration: .8, scaleX: 1, transformOrigin: "left"});
    gsap.to('.load-anim', { duration: .9, opacity: 0});
    gsap.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
    gsap.to('.loading-bar', {  duration: 0, scaleX: 0, transformOrigin: "left"});
}

function principalAnimation() {
    gsap.from('.anim-nav', { duration: .9, translateY: -50, opacity: 0, stagger: .1, delay: 2.9 });
    gsap.from('.switch', { duration: .9, translateX: 100, opacity: 0, delay: -.1});
    gsap.to('#txt-parallax-1', { duration: .9, translateY: -50, opacity: 1, delay: -.6 });
    gsap.to('#txt-parallax-2', { duration: .9, translateY: -60, opacity: 1, delay: -.5 });
}

function secondaryAnimation() {
    gsap.from('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0, delay: 2.9});
    gsap.from('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.9 });
    gsap.from('.anim-gallery', { duration: 1.1, translateY: 50, opacity: 0, stagger: 0.2 });
    gsap.from('.imagen-completa', { duration: 1, opacity: 0, delay: -.7});
}

function pageout() {
    gsap.to('.text', { duration: .9, opacity: 0 })
    gsap.to('.nav-links-close', { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    gsap.to('#switch', { duration: .9, translateX: 100, opacity: 0, delay: -1 });
    gsap.to(".logo", { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    gsap.to(".NavBar", { duration: .9, translateY: -800, opacity: 0, delay: -1 });
}

function secondarypageout() {
    gsap.to('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0});
    gsap.to('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.85 });
    gsap.to('.anim-gallery', { duration: 1, translateY: 50, opacity: 0, stagger: 0.2, delay: -.8 });
    gsap.to('.imagen-completa', { duration: .9, opacity: 0, delay: -1.4 });
}