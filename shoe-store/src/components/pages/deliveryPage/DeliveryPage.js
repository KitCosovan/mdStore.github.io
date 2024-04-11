import './deliveryPage.scss';
import './media-quaries.scss';

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
                <section className={(!active) ? ('delivery') : ('delivery blur')}>
                    <div className="delivery__title">Lorem Ipsum</div>
                    <div className="delivery__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas numquam suscipit, amet enim temporibus animi velit modi, eveniet, deserunt maiores reiciendis corporis veniam ipsum? Vel pariatur natus nihil dicta voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, velit qui, dolores, aliquid accusantium facilis natus minima ea dolorem aperiam fugiat id repudiandae obcaecati magni corporis. Ducimus laudantium minima dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos fuga ipsam in vel quia quas corrupti incidunt et quos animi, commodi, consectetur quasi ex tempore praesentium. Unde, fugit neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae, recusandae sequi suscipit quam quisquam deleniti nihil nesciunt quia cupiditate facilis voluptates! Ratione quasi labore neque velit ad modi expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default DeliveryPage;