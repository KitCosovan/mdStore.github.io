import './Aside.scss';
import './AsideCard.scss';

import logo from '../../img/logo.png';
import imgMain from '../../img/product-img-png/13048404_l.png';

const Aside = ({ products, onProductSelect }) => {

    return (
        <aside className="nav-section">
            <div className="nav-section__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="product-cards">
                {products.map((product, index) => (
                    <div key={index} className="product-cards__card card" onClick={() => onProductSelect(product)}>
                        <div className="card__discount">{product.discount}</div>
                        <div className="card__img">
                            <img src={imgMain} alt="preview-product-img" />
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