import './Header.scss';

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    useEffect(() => {
        function handleTabClick(event) {
            const tabs = document.querySelectorAll('.nav-menu__item');

            tabs.forEach(tab => {
                tab.classList.remove('nav-menu__item_active');
            })

            const clickedTab = event.target.closest('.nav-menu__item');
            if (clickedTab) {
                clickedTab.classList.add('nav-menu__item_active');
            }
        }

        const navMenu = document.querySelector('.nav-menu');

        navMenu.addEventListener('click', handleTabClick);

        return () => {
            navMenu.removeEventListener('click', handleTabClick);
        }
    }, [])

    return (
        <header className="nav-menu">
            <ul className="nav-menu__list">
                <li className="nav-menu__item"><NavLink to='/' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>Main</NavLink></li>
                <li className="nav-menu__item"><NavLink to='/catalog' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>Catalog</NavLink></li>
                <li className="nav-menu__item"><NavLink to='/contacts' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>Contacts</NavLink></li>
                <li className="nav-menu__item"><NavLink to='/delivery' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>Delivery</NavLink></li>
                <li className="nav-menu__item"><NavLink to='/about' className={({isActive}) => isActive ? 'nav-menu__item_active' : ''}>About</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;