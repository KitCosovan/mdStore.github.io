import './Header.scss';

import { useEffect } from 'react';

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
                <li className="nav-menu__item"><a href="#">Main</a></li>
                <li className="nav-menu__item nav-menu__item_active"><a href="#">Catalog</a></li>
                <li className="nav-menu__item"><a href="#">Contacts</a></li>
                <li className="nav-menu__item"><a href="#">Delivery</a></li>
                <li className="nav-menu__item"><a href="#">About</a></li>
            </ul>
        </header>
    )
}

export default Header;