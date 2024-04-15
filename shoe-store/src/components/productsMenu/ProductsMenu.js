import './productsMenu.scss';

import arrow from '../../img/icons/circle-right.svg';
import cross from '../../img/icons/cancel-circle.svg';
import { useState, useContext } from 'react';
import { isActive } from '../context/context';

const ProductsMenu = ({ products, onProductSelect }) => {

    const { active, handleClick } = useContext(isActive);
    const [menuClass, setMenuClass] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

    const handleMenuClick = () => {
        setMenuClass(!menuClass);
    }

    return (
        <div className="products-menu">
            <div className={(active && !isClicked) ? 'products-menu__btn blur' : 'products-menu__btn'} onClick={() => {handleMenuClick(); handleClick(); setIsClicked(!isClicked)}}>
                <div className="products-menu__btn_title">Products List</div>
                <img src={(isClicked) ? cross : arrow} alt="arrow" />
            </div>
            <div className={`products-menu__list ${(menuClass) ? 'visible' : 'hidden'}`}>
                {products.map((product, index) => (
                    <div key={index} className="product-menu__card card" onClick={() => onProductSelect(product)}>
                        <div className="card__discount">{product.discount}</div>
                        <div className="card__img">
                            <img src={`${process.env.PUBLIC_URL}/${product.images[0]}`} alt="preview-product-img" />
                        </div>
                        <div className="card__title">{product.title}</div>
                        <div className="card__prices">
                            <div className="card__price">{product.price} MDL</div>
                            <div className="card__price card__price_before">{product.old} MDL</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsMenu;