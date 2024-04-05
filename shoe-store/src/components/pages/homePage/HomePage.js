import './homePage.scss';
import '../../../media-quaries.css';

import Header from '../../header/Header';
import SupButtons from '../../supButtons/SupButtons';
import Footer from '../../footer/Footer';

const HomePage = () => {
    return (
        <div className="container on-intro__container">
            <SupButtons />
            <main className="main">
                <Header />
                <section className="intro">
                    <h1 className="intro__title">Lorem Ipsum</h1>
                    <div className="intro__info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi possimus non, accusamus distinctio magnam veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore quia in reprehenderit, architecto aut aliquid nisi facilis aspernatur assumenda praesentium voluptates vitae. Corrupti quidem blanditiis deleniti ipsam officiis. Pariatur.</div>
                    <button className="intro__btn">Click me!</button>
                    <div className="intro__circle"></div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;