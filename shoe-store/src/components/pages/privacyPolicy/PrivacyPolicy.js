import './privacyPolicy.scss';

import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { useContext } from 'react';
import { isActive } from '../../context/context';

const DeliveryPage = () => {

    const { active } = useContext(isActive);

    return (
        <>
            <main className="main">
                <Header />
                <section className={(!active) ? ('privacy') : ('privacy blur')}>  
                    <div className="privacy__title">Privacy Policy</div>
                    <div className="privacy__info">In accordance with the law no. 133/2011 on the protection of personal data, www.shoe-store.md is obliged to use the personal data you provide about yourself only with the necessary level of security and only for the purposes indicated. <br /><br />When purchasing products through the website, it is necessary to provide us with personal data in order to process the order. The sensitive information obtained will be used to provide the services provided by the site, to contact you when necessary, to provide you with new offers, services or notifications about products or the site. <br /><br />www.shoe-store.md we assure you that without your consent, we will not disclose the information received to third parties, except as required by law, when the transfer of this data is absolutely necessary. <br /><br />The website www.shoe-store.md does not have access to and therefore does not store confidential information that relates to customers' bank cards.</div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default DeliveryPage;