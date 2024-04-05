import './aboutPage.scss';
import '../../../media-quaries.css';

import Header from '../../header/Header';
import SupButtons from '../../supButtons/SupButtons';
import Footer from '../../footer/Footer';

const AboutPage = () => {
    return (
        <div className="container on-intro__container">
            <SupButtons />
            <main className="main">
                <Header />
                <section class="about">
                <div class="about__title">Lorem Ipsum</div>
                <div class="about__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas numquam suscipit, amet enim temporibus animi velit modi, eveniet, deserunt maiores reiciendis corporis veniam ipsum? Vel pariatur natus nihil dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, velit qui, dolores, aliquid accusantium facilis natus minima ea dolorem aperiam fugiat id repudiandae obcaecati magni corporis. Ducimus laudantium minima dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos fuga ipsam in vel quia quas corrupti incidunt et quos animi, commodi, consectetur quasi ex tempore praesentium. Unde, fugit neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae, recusandae sequi suscipit quam quisquam deleniti nihil nesciunt quia cupiditate facilis voluptates! Ratione quasi labore neque velit ad modi expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut nam debitis, fugit tenetur commodi, velit non eaque impedit voluptatum ex qui hic quia rerum neque molestiae culpa, dolorum dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nihil dignissimos dolor blanditiis hic laborum praesentium dolorem. Nostrum ipsa vero laudantium quia ex quibusdam. Eum accusamus a quam placeat natus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae quaerat pariatur perferendis amet temporibus? Vitae quibusdam, et deserunt dolorem, consequatur deleniti soluta, voluptatum sit saepe laborum iure libero quisquam.</div>
            </section>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage;