function principalAnimation() {
    var tl = gsap.timeline();
    tl.to('.first-block', { duration: 1.8, width: "100%", left: "0%", ease: "Expo.easeInOut" });
    tl.to('.transition', { duration: 0, opacity: 1, delay: -.3 });
    tl.to('.first-block', { duration: 1.4, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4});
    tl.to('.second-block', { duration: 1.4, width: "100%", left: "0%", ease: "Expo.easeInOut" });
    tl.to('.second-block', { duration: 1.1, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4});
    tl.to('.transition', { duration: 0, opacity: 0, delay: -1.2 });
    tl.to('.contenido', { duration: .5, opacity: 1, delay: -.5});
    tl.set(".second-block", { left: "-100%" });
    tl.from('.anim-nav', { duration: .9, translateY: -50, opacity: 0, stagger: .1, delay: -.5 });
    tl.from('.controler-section', { duration: .9, translateX: 100, opacity: 0, delay: -.1 });
    tl.to('#txt-parallax-1', { duration: .9, translateY: -50, opacity: 1, delay: -.6 });
    tl.to('#txt-parallax-2', { duration: .9, translateY: -60, opacity: 1, delay: -.5 });
    tl.to('#txt-parallax-3', { duration: .9, translateY: -60, opacity: 1, delay: -.4 });
}

function secondaryAnimation() {
    var tl = gsap.timeline();
    tl.to('.first-block', { duration: 1.8, width: "100%", left: "0%", ease: "Expo.easeInOut" });
    tl.to('.transition', { duration: 0, opacity: 1, delay: -.3 });
    tl.to('.first-block', { duration: 1.4, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4});
    tl.to('.second-block', { duration: 1.4, width: "100%", left: "0%", ease: "Expo.easeInOut" });
    tl.to('.second-block', { duration: 1.1, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4});
    tl.to('.transition', { duration: 0, opacity: 0, delay: -1.2 });
    tl.to('.contenido', { duration: .5, opacity: 1, delay: -.5});
    tl.set(".second-block", { left: "-100%" });
    tl.from('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0, delay: -.4});
    tl.from('.NavBar-2', { duration: .9, translateY: -50, opacity: 0});
    tl.from('.anim-banner', { duration: .8, opacity: 0, delay: -.5});
    tl.from('.anim-gallery', { duration: 1, translateY: 50, opacity: 0, stagger: 0.1});
    tl.to('.imagen-galeria', { duration: 1, opacity: 1, stagger: 0.2,  delay: -1 });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to('.first-block', { duration: 1.8, width: "100%", left: "0%", ease: "Expo.easeInOut" });
    tl.to('.transition', { duration: 0, opacity: 1, delay: -.3 });
    tl.to('.first-block', { duration: 1.4, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4});
    tl.to('.second-block', { duration: 1.4, width: "100%", left: "0%", ease: "Expo.easeInOut" });
    tl.to('.second-block', { duration: 1.1, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.4});
    tl.to('.transition', { duration: 0, opacity: 0, delay: -1.2 });
    tl.to('.contenido', { duration: .5, opacity: 1, delay: -.5});
    tl.set(".second-block", { left: "-100%" });
}

function pageout() {
    var tl = gsap.timeline();
    tl.to('.text', { duration: .9, opacity: 0 })
    tl.to('.nav-links-close', { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    tl.to('.controler-section', { duration: .9, translateX: 100, opacity: 0, delay: -1 });
    tl.to("#logo", { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    tl.to(".NavBar", { duration: .9, translateY: -800, opacity: 0, delay: -1 });
    tl.to('.contenido', { duration: 0, opacity: 0, delay:.5});
}

function secondarypageout() {
    var tl = gsap.timeline();
    tl.to('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0 });
    tl.to('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.85 });
    tl.to('.anim-banner', { duration: .8, opacity: 0, delay: -.7});
    tl.to('.anim-gallery', { duration: 1, translateY: 50, opacity: 0, stagger: 0.2, delay: -.9 });
    tl.to('.imagen-galeria', { duration: .9, opacity: 0, delay: -1.4 });
    tl.to('.contenido', { duration: .5, opacity: 0});
}