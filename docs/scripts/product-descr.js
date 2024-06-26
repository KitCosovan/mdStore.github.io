export function displayProductDescription(product) {

    const container = document.querySelector('.product__img-slider');
    container.innerHTML = '';

    product.img.forEach(img => {
        const slide = document.createElement('div');
        slide.classList.add('product__img-slide');

        const imgTag = document.createElement('img');
        imgTag.classList.add('product__img-slide_img');
        imgTag.setAttribute('alt', 'product-img');
        imgTag.setAttribute('src', img);

        slide.appendChild(imgTag);

        container.appendChild(slide);
    })

    document.querySelector('.product__main-img_img').src = product.img[0];
    document.querySelector('.product__main-img_img').alt = 'product-img';
    document.querySelector('.product__title').innerText = `${product.title}`;
    document.querySelector('.product__descr').innerText = `${product.text}`;
    document.querySelector('.product__price').innerText = `Price : ${product.price} MDL`;

    const mainImg = document.querySelector('.product__main-img_img');
    const slides = document.querySelectorAll('.product__img-slide');

    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const slideImgSrc = slide.querySelector('img').getAttribute('src');

            mainImg.setAttribute('src', slideImgSrc);
        });
    });
}