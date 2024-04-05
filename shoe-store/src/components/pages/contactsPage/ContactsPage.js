import './contactsPage.scss';
import '../../../media-quaries.css';

import Header from '../../header/Header';
import SupButtons from '../../supButtons/SupButtons';
import Footer from '../../footer/Footer';

import facebook from '../../../img/icons/facebook.svg';
import instagram from '../../../img/icons/instagram.svg';
import twitter from '../../../img/icons/twitter.svg';

const ContactsPage = () => {
    return (
        <div className="container on-intro__container">
            <SupButtons />
            <main className="main">
                <Header />
                <section className="contacts">
                    <div className="contacts__title">Lorem Ipsum</div>
                    <div className="contacts__info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi possimus non, accusamus distinctio magnam veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore quia in reprehenderit, architecto aut aliquid nisi facilis aspernatur assumenda praesentium voluptates vitae. Corrupti quidem blanditiis deleniti ipsam officiis. Pariatur.</div>
                    <div className="contacts__tels">
                        <div className="contacts__tel">+373 (79) 123 456</div>
                        <div className="contacts__tel">+373 (79) 456 123</div>
                    </div>
                    <div className="contacts__social">
                        <div className="contacts__social-item">
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className="contacts__social-item">
                            <img src={instagram} alt="instagram" />
                        </div>
                        <div className="contacts__social-item">
                            <img src={twitter} alt="twitter" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ContactsPage;