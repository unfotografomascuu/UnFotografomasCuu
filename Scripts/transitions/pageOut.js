const pageOut = (container) => {
    let tl = gsap.timeline();
    gsap.to('.text', { duration: .9, opacity: 0 });
    gsap.to('.nav-links-close', { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    gsap.to('#switch', { duration: .9, translateX: 100, opacity: 0, delay: -1 });
    gsap.to(".logo", { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    gsap.to(".NavBar", { duration: .9, translateY: -800, opacity: 0, delay: -1 });
}

export default pageOut;