import './Footer.scss';
import './media-quaries.scss';

import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import facebook from '../../img/icons/facebook.svg';
import instagram from '../../img/icons/instagram.svg';
import twitter from '../../img/icons/twitter.svg';
import { isActive, isProductsListActive } from '../context/context';

const Footer = () => {

    const { active } = useContext(isActive);
    const { productListActive } = useContext(isProductsListActive);

    const is768Max = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <footer className={(!active && !productListActive) ? ('info') : ('info blur')}>
            <div className="info__tels">
                <div className="info__tel info__tel_first">+373 (79) 123 456</div>
                {(!is768Max) ? (<span>/</span>) : null}
                <div className="info__tel info__tel_second">+373 (79) 456 123</div>
            </div>
            <div className="info__social">
                <div className="info__social-item">
                    <img src={facebook} alt="facebook" />
                </div>
                <div className="info__social-item">
                    <img src={instagram} alt="instagram" />
                </div>
                <div className="info__social-item">
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;