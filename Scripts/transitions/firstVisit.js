const firstVisit = (container) => {
    var tl = gsap.timeline();
    return gsap.to('ul.transition li', { duration: 0, scaleY: 1, transformOrigin: "bottom left" });
    return gsap.to('.load-anim', { duration: .9, opacity: 1 });
    return gsap.to('.loading-bar', { duration: 1, scaleX: 1, transformOrigin: "left" });
    return gsap.to('.load-anim', { duration: .9, opacity: 0 });
    return gsap.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
    return gsap.to('.loading-bar', { duration: 0, scaleX: 0, transformOrigin: "left" });
}

/*var tl = gsap.timeline();
tl.to('ul.transition li', { duration: 0, scaleY: 1, transformOrigin: "bottom left" });
tl.to('.load-anim', { duration: .9, opacity: 1 });
tl.to('.loading-bar', { duration: 1, scaleX: 1, transformOrigin: "left" });
tl.to('.load-anim', { duration: .9, opacity: 0 });
tl.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
tl.to('.loading-bar', { duration: 0, scaleX: 0, transformOrigin: "left" });*/

export default firstVisit;