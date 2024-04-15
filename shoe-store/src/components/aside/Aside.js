import './Aside.scss';
import './AsideCard.scss';

import logo from '../../img/logo.png';
import { useContext } from 'react';
import { isActive, isProductsListActive } from '../context/context';

const Aside = ({ products, onProductSelect }) => {

    const { active } = useContext(isActive);
    const { productListActive } = useContext(isProductsListActive);

    return (
        <aside className={(!active && !productListActive) ? ('nav-section') : ('nav-section blur')}>
            <div className="nav-section__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="product-cards">
                {products.map((product, index) => (
                    <div key={index} className="product-cards__card card" onClick={() => onProductSelect(product)}>
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
        </aside>
    )
}

export default Aside;