import './SupButtons.scss';

import cart from '../../img/icons/cart.svg';

const SupButtons = () => {
    return (
        <div className="sup-buttons">
            <div className="sup-buttons__item cart">
                <img src={cart} alt="cart-icon" />
                <div className="cart__index">5</div>
            </div>
        </div>
    )
}

export default SupButtons;