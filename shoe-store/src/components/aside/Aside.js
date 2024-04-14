import './Aside.scss';
import './AsideCard.scss';
import './media-quaries.scss';

import logo from '../../img/logo.png';
import arrow from '../../img/icons/circle-right.svg';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { isActive, isBtnClicked } from '../context/context';

const Aside = ({ products, onProductSelect }) => {

    const { btnClicked, handleClickBtn } = useContext(isBtnClicked);
    const { active } = useContext(isActive);
    const is992Max = useMediaQuery({ query: '(max-width: 992px)' });

    return (
        <>
            {(is992Max) ? 
            <>
                <div className={(!active) ? ('arrow-btn') : ('arrow-btn blur')}>
                    <img src={arrow} alt="" onClick={handleClickBtn}/>
                </div>
                <aside className={(!active) ? ('nav-section') : ('nav-section blur')} style={(btnClicked) ? {left: '0'} : {left: '-150%'}}>
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
            </> : 
                <aside className={(!active) ? ('nav-section') : ('nav-section blur')}>
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
                </aside>}
        </>
    )
}

export default Aside;