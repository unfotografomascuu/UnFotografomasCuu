function delay(n) {
    n = n || 3000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({

    sync: true,

    transitions: [
        {

            async leave() {

                const done = this.async();

                pageout();

                setTimeout(function () {
                    pageTransition();
                }, 800);

                await delay(400);
                done();

            },

            async once() {
                pageTransition();
            }
        }
    ],

});

barba.hooks.beforeLeave(() => {
    scroll.destroy();
});

barba.hooks.after(() => {
    scroll.init();
    scroll.scrollTo('top');
    animNav();
});

setTimeout(function () { scroll.update(); console.log('update scroller') }, 5000);


