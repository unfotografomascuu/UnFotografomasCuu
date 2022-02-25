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

            async leave(data) {

                const done = this.async();

                pageout();

                secondarypageout();


                setTimeout(function () {
                    pageTransition();
                }, 200);

                await delay(1700);
                done();

            },

            async once() {
                principalAnimation();
                secondaryAnimation();
            },
        }
    ],

});

barba.hooks.beforeLeave(() => { 
    scroll.destroy();
});

barba.hooks.after(() => {
    scroll.init();
});



