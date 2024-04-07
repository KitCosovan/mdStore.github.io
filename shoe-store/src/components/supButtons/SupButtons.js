import './SupButtons.scss';

import { NavLink } from 'react-router-dom';

import cart from '../../img/icons/cart.svg';

const SupButtons = ({ productsNum }) => {
    return (
        <div className="sup-buttons">
            <div className="sup-buttons__item cart">
                <NavLink to='/cart'>
                    <img src={cart} alt="cart-icon" />
                    <div className="cart__index">{productsNum}</div>
                </NavLink>
            </div>
        </div>
        
    )
}

export default SupButtons;