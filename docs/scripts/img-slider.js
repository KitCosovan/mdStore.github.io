document.addEventListener('DOMContentLoaded', function() {
    const mainImg = document.querySelector('.product__main-img_img');
    const slides = document.querySelectorAll('.product__img-slide');

    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const slideImgSrc = slide.querySelector('img').getAttribute('src');

            mainImg.setAttribute('src', slideImgSrc);
        });
    });
});