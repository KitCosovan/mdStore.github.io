import './Product.scss';

import { useState, useEffect } from 'react';

import Skeleton from '../skeleton/Skeleton';
import Modal from '../modal/Modal';

const Product = ({ product }) => {

    const [previewImg, setPreviewImg] = useState();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (product && product.images) {
            const imagePath = product.images[0];
    
            const imageUrl = `${process.env.PUBLIC_URL}/${imagePath}`;
    
            setPreviewImg(imageUrl);
        }
    }, [product])

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const getImageUrl = (image) => {
        return `${process.env.PUBLIC_URL}/${image}`;
    }

    const handleClickImg = (image) => {
        setPreviewImg(image);
    }

    if (!product) {
        return <Skeleton />;
    }

    return (
        <section className="product">
            <div className="product__circle"></div>
            {isOpen && <Modal isOpen={isOpen} closeModal={closeModal} previewImg={previewImg}/>}
            <div className="product__main-img">
                <img src={previewImg} alt="product-img" className="product__main-img_img" onClick={openModal} />
            </div>
            <div className="product__img-slider">
                {product.images.map((image, index) => (
                    <div
                        key={index}
                        className="product__img-slide"
                        onClick={() => handleClickImg(getImageUrl(image))}>
                        <img
                            src={getImageUrl(image)}
                            alt="product-img"
                            className="product__img-slide_img"/>
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