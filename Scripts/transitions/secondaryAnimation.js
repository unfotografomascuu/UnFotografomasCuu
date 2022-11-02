const secondaryAnimation = (container) => {
    let tl = gsap.timeline();
    tl.from('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0, delay: 2.9 });
    tl.from('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.9 });
    tl.from('.anim-gallery', { duration: 1.1, translateY: 50, opacity: 0, stagger: 0.2 });
    tl.from('.imagen-completa', { duration: 1, opacity: 0, delay: -.7 });
}

export default secondaryAnimation;