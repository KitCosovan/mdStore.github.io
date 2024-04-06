import './SupButtons.scss';

import { NavLink } from 'react-router-dom';

import cart from '../../img/icons/cart.svg';

const SupButtons = () => {
    return (
        <div className="sup-buttons">
            <div className="sup-buttons__item cart">
                <NavLink to='/cart'>
                    <img src={cart} alt="cart-icon" />
                    <div className="cart__index">5</div>
                </NavLink>
            </div>
        </div>
        
    )
}

export default SupButtons;