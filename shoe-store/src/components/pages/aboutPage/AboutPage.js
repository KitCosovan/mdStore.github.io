import './aboutPage.scss';
import './media-quaries.scss';

import { useContext } from 'react';

import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { isActive } from '../../context/context';

const AboutPage = () => {

    const { active } = useContext(isActive);

    return (
        <>
            <main className="main">
                <Header />
                <section className={(!active) ? ('about') : ('about blur')}>
                    <div className="about__title">Lorem Ipsum</div>
                    <div className="about__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas numquam suscipit, amet enim temporibus animi velit modi, eveniet, deserunt maiores reiciendis corporis veniam ipsum? Vel pariatur natus nihil dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, velit qui, dolores, aliquid accusantium facilis natus minima ea dolorem aperiam fugiat id repudiandae obcaecati magni corporis. Ducimus laudantium minima dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos fuga ipsam in vel quia quas corrupti incidunt et quos animi, commodi, consectetur quasi ex tempore praesentium. Unde, fugit neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae, recusandae sequi suscipit quam quisquam deleniti nihil nesciunt quia cupiditate facilis voluptates!</div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage;