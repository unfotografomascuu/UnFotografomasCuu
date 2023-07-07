function SectionView1(){
    const photoSection1 = document.querySelector('#photo-section-1');
    const photoSection2= document.querySelector('#photo-section-2');
    const photoSection3 = document.querySelector('#photo-section-3');

    photoSection1.classList.toggle("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");

}

function SectionView2(){
    const photoSection1 = document.querySelector('#photo-section-1');
    const photoSection2= document.querySelector('#photo-section-2');
    const photoSection3 = document.querySelector('#photo-section-3');

    photoSection1.classList.remove("open-section");
    photoSection2.classList.toggle("open-section");
    photoSection3.classList.remove("open-section");

}

function SectionView3(){
    const photoSection1 = document.querySelector('#photo-section-1');
    const photoSection2= document.querySelector('#photo-section-2');
    const photoSection3 = document.querySelector('#photo-section-3');

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.toggle("open-section");

}
