const ZoomBtn = () => {
    const zoombtn = document.querySelectorAll('.img-btn');
    const containerLightbox = document.querySelector('.lightbox');
    const containerImage = document.querySelector('.img-show');
    const copy = document.querySelector('.copy');
    const imgLightbox = document.querySelector('.img-lightbox');
    const back = document.querySelector('.back');


    zoombtn.forEach(image => {
        image.addEventListener('click', () => {
            containerLightbox.classList.toggle('lightbox-move');
            containerImage.classList.toggle('lightbox-show');
            back.classList.toggle('lightbox-back');
            addImage(image.getAttribute('src'), image.getAttribute('alt'))
        })
    })

    const addImage = (srcImage, altImage) => {

        imgLightbox.src = srcImage;
        copy.innerHTML = altImage;
    }

}

function CloseBtn() {
    const containerLightbox = document.querySelector(".lightbox");
    const containerImage = document.querySelector(".img-show");
    const back = document.querySelector(".back");

    containerLightbox.classList.toggle("lightbox-move"), 
    containerImage.classList.toggle("lightbox-show"), 
    back.classList.toggle("lightbox-back");
}