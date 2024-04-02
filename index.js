const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    inertia: 0.9,
    smooth: true,
    getDirection: true,
    mobile: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
    },
    tablet: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
    },
});

// Scroll update all pages

document.addEventListener('DOMContentLoaded', function() {

    function ScrollUpdateDelay() {
        setTimeout(function(){ scroll.update(); }, 500);
   
    }

    ScrollUpdateDelay();
});
