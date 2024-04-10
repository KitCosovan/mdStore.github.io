import './Footer.scss';

import { useContext } from 'react';

import facebook from '../../img/icons/facebook.svg';
import instagram from '../../img/icons/instagram.svg';
import twitter from '../../img/icons/twitter.svg';
import { isActive } from '../context/context';

const Footer = () => {

    const { active } = useContext(isActive);

    return (
        <footer className={(!active) ? ('info') : ('info blur')}>
            <div className="info__tels">
                <div className="info__tel info__tel_first">+373 (79) 123 456</div>
                <span>/</span>
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