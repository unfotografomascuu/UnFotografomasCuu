function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".first-block", { duration: 1.8, width: "100%", left: "0%", ease: "Expo.easeInOut" }),
    tl.to(".transition", { duration: 0, opacity: 1, delay: -0.3 }),
    tl.to(".first-block", { duration: 1.4, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4 }),
    tl.to(".second-block", { duration: 1.4, width: "100%", left: "0%", ease: "Expo.easeInOut" }),
    tl.to(".second-block", { duration: 1.1, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4 }),
    tl.to(".transition", { duration: 0, opacity: 0, delay: -1.2 }),
    tl.to(".contenido", { duration: 0.5, opacity: 1, delay: -0.5 }),
    tl.set(".second-block", { left: "-100%" });
}

function loaderText() {
    var tl = gsap.timeline();
    tl.to('ul.transition-l li', { duration: .6, translateX: '-10vw', opacity: 0, transformOrigin: "left", stagger: .2 }),
    tl.to('ul.transition-l li', { duration: .8, translateX: 0, opacity: 1, transformOrigin: "left", stagger: .1, delay: .1, }),
    tl.to('ul.transition-l li', { duration: .5, translateX: '10vh', opacity: 0, transformOrigin: "right", stagger: .1, delay: .2, });
}

function loadBar() {
    var tl = gsap.timeline();
    tl.to(".load-bar", { duration: 0, scaleX: 0, opacity: 0, transformOrigin: "left", }),
    tl.to(".load-bar", { duration: 1, scaleX: 1, opacity: 1, transformOrigin: "left", delay: 2 }),
    tl.to(".load-bar", { duration: .8, scaleX: 0, opacity: 0, transformOrigin: "right", delay: .8 });
}

function pageout() {
    var t = gsap.timeline();
        t.to(".contenido", { duration: 0.5, opacity: 0, delay: -0.2, stagger: .1 });
}
