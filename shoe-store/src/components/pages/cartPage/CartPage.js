import './cartPage.scss';
import '../../../media-quaries.css';

import { NavLink } from 'react-router-dom';

import Header from '../../header/Header';
import Footer from '../../footer/Footer';

const CartPage = ({ products, setProducts }) => {

    const sumOfPrices = () => {
        let sum = 0;
        products.map(product => (
            sum += parseInt(product.price)
        ))
        return sum;
    }

    const handleDeleteProduct = (index) => {
        const newProductsList = products.filter((_, i) => i !== index);
        setProducts(newProductsList);
    }

    return (
        <>
            <main className="main">
                <Header />
                <section className="cart-page">
                    <div className="cart-page__products">
                        {products.map((product, index) => (
                            <div className="cart-page__product" key={index}>
                                <div className="cart-page__product_img">
                                    <img src={`${process.env.PUBLIC_URL}/${product.images[0]}`} alt="product-img" />
                                </div>
                                <div className="cart-page__product_title">{product.title}</div>
                                <div className="cart-page__product_price">{product.price} MDL</div>
                                <div className="cart-page__product_delete-btn" onClick={() => handleDeleteProduct(index)}>&times;</div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-page__info">
                        <div className="cart-page__title">Total</div>
                        <div className="cart-page__final">
                            <div className="cart-page__final_products">{products.length} products in the amount</div>
                            <div className="cart-page__final_sum">{sumOfPrices()} MDL</div>
                        </div>
                        <div className="cart-page__delivery">
                            <div className="cart-page__delivery_text">Delivery</div>
                            <div className="cart-page__delivery_sum">--- MDL</div>
                        </div>
                        <div className="cart-page__divider"></div>
                        <div className="cart-page__total">
                            <div className="cart-page__total_text">TOTAL</div>
                            <div className="cart-page__total_sum">{sumOfPrices()} MDL</div>
                        </div>
                    </div>
                    <div className="cart-page__politic">
                        <input type="checkbox" className="cart-page__politic_check" />
                        <div className="cart-page__politic__text">By confirming your order you agree to the terms and conditions of the <NavLink to='/privacy'>privacy policy</NavLink></div>
                    </div>
                    <button className="cart-page__btn">NEXT</button>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CartPage;