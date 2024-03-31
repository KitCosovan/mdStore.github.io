import { displayProductDescription } from './product-descr.js';

function displayData(product) {

    const container = document.querySelector('.product-cards');

    const card = document.createElement('div');
    card.setAttribute('data-key', product.key);
    card.classList.add('product-cards__card');
    card.classList.add('card')

    const discount = document.createElement('div');
    discount.classList.add('card__discount');
    discount.innerText = product.discount;

    const img = document.createElement('div');
    const imgTag = document.createElement('img');
    imgTag.setAttribute('alt', 'preview-product-img');
    imgTag.setAttribute('src', product.img);
    img.classList.add('card__img');
    img.appendChild(imgTag);

    const title = document.createElement('div');
    title.classList.add('card__title');
    title.innerText = product.title;

    const prices = document.createElement('div');
    prices.classList.add('card__prices');

    const price = document.createElement('div');
    prices.appendChild(price);
    price.classList.add('card__price');
    price.innerText = `${product.price} MDL`;

    const priceBefore = document.createElement('div');
    prices.appendChild(priceBefore);
    priceBefore.classList.add('card__price')
    priceBefore.classList.add('card__price_before')
    priceBefore.innerText = `${product.old} MDL`

    card.appendChild(discount);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(prices);

    container.appendChild(card);
}

export function initProductCard() {
    document.addEventListener('DOMContentLoaded', function() {

        const container = document.querySelector('.product-cards');
        container.innerHTML = '';

        fetch('db/example.json')
            .then(response => response.json())
            .then(data => {
                const productKeys = Object.keys(data);

                productKeys.forEach(key => {
                    const product = data[key];

                    const productData = {
                        discount: product.discount,
                        title: product.title,
                        text: product.text,
                        price: product.price,
                        old: product.oldPrice,
                        img: product.img[0],

                        key: key
                    }

                    displayData(productData);

                    const card = document.querySelector(`[data-key="${key}"]`);
                    card.addEventListener('click', function() {
                        displayProductDescription(product);
                    })
                })

            })
            .catch(error => console.error('Ошибка чтения файла: ', error));
    });
}