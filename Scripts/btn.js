//Funciones relacionadas con el boton de menu de la navegacion movil al usar onclick para que barba no lo rompa.
function BtnAnim() {
    const menuBtn = document.querySelector("#menu-btn");
    menuBtn.classList.toggle('open');
};

function BtnOC() {
    BtnAnim();
    NavBtn();
    NavBlur();
};
