const principalAnimation = (container) => {
        var tl = gsap.timeline();
        gsap.from('.anim-nav', { duration: .9, translateY: -50, opacity: 0, stagger: .1, delay: 2.9 });
        gsap.from('.switch', { duration: .9, translateX: 100, opacity: 0, delay: -.1});
        gsap.to('#txt-parallax-1', { duration: .9, translateY: -50, opacity: 1, delay: -.6 });
        gsap.to('#txt-parallax-2', { duration: .9, translateY: -60, opacity: 1, delay: -.5 });
}

export default principalAnimation;