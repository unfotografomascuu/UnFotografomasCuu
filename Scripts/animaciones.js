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
