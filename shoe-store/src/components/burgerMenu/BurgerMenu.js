import './burgerMenu.scss';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { isActive, isProductsListActive } from '../context/context';

const BurgerMenu = () => {

    const { active, handleClick } = useContext(isActive);
    const { productListActive } = useContext(isProductsListActive);

    let btn_class = 'standart';
    let menu_class = 'hidden';

    if (active) {
        btn_class = 'active';
        menu_class = 'visible';
    }

    return (
        <div className="burgerMenu">
            <div className={(productListActive) ? "burgerMenu_container blur" : 'burgerMenu_container'} onClick={() => {handleClick()}}>
                <div className={`burgerMenu_btn ${btn_class}`}></div>
            </div>
            <div className={`burgerMenu_list ${menu_class}`}>
                <ul className="burgerMenu_menu">
                    <li className="burgerMenu_menu__item"><NavLink to='/' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>Main</NavLink></li>
                    <li className="burgerMenu_menu__item"><NavLink to='/catalog' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>Catalog</NavLink></li>
                    <li className="burgerMenu_menu__item"><NavLink to='/contacts' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>Contacts</NavLink></li>
                    <li className="burgerMenu_menu__item"><NavLink to='/delivery' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>Delivery</NavLink></li>
                    <li className="burgerMenu_menu__item"><NavLink to='/about' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>About</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu;