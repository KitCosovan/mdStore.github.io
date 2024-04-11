import './SupButtons.scss';

import { NavLink } from 'react-router-dom';

import cart from '../../img/icons/cart.svg';
import { useContext } from 'react';
import { isActive } from '../context/context';

const SupButtons = ({ productsNum }) => {

    const { active } = useContext(isActive);

    return (
        <div className={(!active) ? ('sup-buttons') : ('sup-buttons blur')}>
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