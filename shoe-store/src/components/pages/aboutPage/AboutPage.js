import './aboutPage.scss';

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
                    <div className="about__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas numquam suscipit, amet enim temporibus animi velit modi, eveniet, deserunt maiores reiciendis corporis veniam ipsum? Vel pariatur natus nihil dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, velit qui, dolores, aliquid accusantium facilis natus minima ea dolorem aperiam fugiat id repudiandae obcaecati magni corporis. Ducimus laudantium minima dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos fuga ipsam in vel quia quas corrupti incidunt et quos animi, commodi, consectetur quasi ex tempore praesentium. Unde, fugit neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae, recusandae sequi suscipit quam quisquam deleniti nihil nesciunt quia cupiditate facilis voluptates! Ratione quasi labore neque velit ad modi expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut nam debitis, fugit tenetur commodi, velit non eaque impedit voluptatum ex qui hic quia rerum neque molestiae culpa, dolorum dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nihil dignissimos dolor blanditiis hic laborum praesentium dolorem. Nostrum ipsa vero laudantium quia ex quibusdam. Eum accusamus a quam placeat natus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae quaerat pariatur perferendis amet temporibus? Vitae quibusdam, et deserunt dolorem, consequatur deleniti soluta, voluptatum sit saepe laborum iure libero quisquam.</div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage;