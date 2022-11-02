const pageTransition = (container) => {
    let tl = gsap.timeline();
    gsap.to('ul.transition li', { duration: .6, scaleY: 1, transformOrigin: "bottom left", stagger: .2 });
    gsap.to('.load-anim', { duration: .9 ,opacity: 1});
    gsap.to('.loading-bar', {  duration: .8, scaleX: 1, transformOrigin: "left"});
    gsap.to('.load-anim', { duration: .9, opacity: 0});
    gsap.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
    gsap.to('.loading-bar', {  duration: 0, scaleX: 0, transformOrigin: "left"});
    alert( 'Hello, world!' );
}

export default pageTransition;