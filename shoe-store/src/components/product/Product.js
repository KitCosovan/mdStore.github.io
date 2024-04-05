import './Product.scss';

import { useState } from 'react';

import Skeleton from '../skeleton/Skeleton';

import imgMain from '../../img/product-img-png/13048404_l.png';
import imgFirst from '../../img/product-img-png/13048404_l_a1.png';
import imgSecond from '../../img/product-img-png/13048404_l_a2.png';
import imgThird from '../../img/product-img-png/13048404_l_a3.png';
import imgFour from '../../img/product-img-png/13048404_l_a4.png';
import imgFive from '../../img/product-img-png/13048404_l_a5.png';

const Product = ({ product }) => {

    const [previewImg, setPreviewImg] = useState(imgMain);

    const images = [
        imgMain, imgFirst, imgSecond, imgThird, imgFour, imgFive
    ]

    const handleClickImg = (image) => {
        setPreviewImg(image);
    }

    if (!product) {
        return <Skeleton />;
    }

    return (
        <section className="product">
            <div className="product__circle"></div>
            <div className="product__main-img">
                <img src={previewImg} alt="product-img" className="product__main-img_img" />
            </div>
            <div className="product__img-slider">
                {images.map((image, index) => (
                    <div key={index} className="product__img-slide" onClick={() => handleClickImg(image)}>
                        <img src={image} alt="product-img" className="product__img-slide_img"/>
                    </div>
                ))}
            </div>
            <div className="product__about">
                <div className="product__title">{product.title}</div>
                <div className="product__descr">{product.text}</div>
                <div className="product__btns">
                    <button className="product__btn">Add to cart</button>
                    <button className="product__price">{product.price} MDL</button>
                </div>
            </div>
        </section>
    )
}

export default Product;