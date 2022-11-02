const secondaryPageOut = (container) => {
    let tl = gsap.timeline();
    tl.to('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0 });
    tl.to('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.85 });
    tl.to('.anim-gallery', { duration: 1, translateY: 50, opacity: 0, stagger: 0.2, delay: -.8 });
    tl.to('.imagen-completa', { duration: .9, opacity: 0, delay: -1.4 });
}

export default secondaryPageOut;