
function LightboxBtnOC() {
    const containerLightbox = document.querySelector(".lightbox");
    const containerImage = document.querySelector(".img-show");
    const back = document.querySelector(".back");


    containerLightbox.classList.toggle("lightbox-move"), 
    containerImage.classList.toggle("lightbox-show");
    back.classList.toggle("lightbox-back");
}

function  GetImage() {
    const zoombtn = document.querySelectorAll(".img-btn");

    zoombtn.forEach((image) => {
            addImage(image.getAttribute("src"), image.getAttribute("alt"));
    });

    const addImage = (srcImage, altImage) => {
        (imgLightbox.src = srcImage), (copy.innerHTML = altImage);
    };

};

function CloseBtn() {
    const containerLightbox = document.querySelector(".lightbox");
    const containerImage = document.querySelector(".img-show");
    const back = document.querySelector(".back");

    containerLightbox.classList.toggle("lightbox-move"), 
    containerImage.classList.toggle("lightbox-show"), 
    back.classList.toggle("lightbox-back");
}

function ZoomBtn() {
    LightboxBtnOC();
    GetImage();
};