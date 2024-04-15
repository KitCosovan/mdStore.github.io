import './Product.scss';
import './media-quaries.scss';

import { useState, useEffect, useContext } from 'react';
import { isActive, isProductsListActive, productsData } from '../context/context.js';

import Skeleton from '../skeleton/Skeleton';
import Modal from '../modal/Modal';

const Product = ({ product, setProducts }) => {

    const [previewImg, setPreviewImg] = useState();

    const [isOpen, setIsOpen] = useState(false);

    const context = useContext(productsData);
    const { active } = useContext(isActive);
    const { productListActive } = useContext(isProductsListActive);

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

    const handleAddProduct = (product) => {
        const newProduct = product;
        const newProductList = [...context, newProduct];
        setProducts(newProductList);
    }

    if (!product) {
        return <Skeleton />;
    }

    return (
        <section className={(!active && !productListActive) ? ('product') : ('product blur')}>
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
                    <button className="product__btn" onClick={() => handleAddProduct(product)}>Add to cart</button>
                    <button className="product__price">{product.price} MDL</button>
                </div>
            </div>
        </section>
    )
}

export default Product;