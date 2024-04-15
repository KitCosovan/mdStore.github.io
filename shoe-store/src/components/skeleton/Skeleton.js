import './skeleton.scss';
import './media-quaries.scss';
import { useContext } from 'react';
import { isActive, isProductsListActive } from '../context/context';

const Skeleton = () => {

    const { active } = useContext(isActive);
    const { productListActive } = useContext(isProductsListActive);

    return (
        <section className={(!active && !productListActive) ? 'skeleton' : 'skeleton blur'}>
            <div className="skeleton__circle pulse"></div>
            <div className="skeleton__img-slider">
                <div className="skeleton__img-slide pulse"></div>
                <div className="skeleton__img-slide pulse"></div>
                <div className="skeleton__img-slide pulse"></div>
                <div className="skeleton__img-slide pulse"></div>
                <div className="skeleton__img-slide pulse"></div>
            </div>
            <div className="skeleton__about">
                <div className="skeleton__title pulse"></div>
                <div className="skeleton__descr pulse"></div>
                <div className="skeleton__btns">
                    <button className="skeleton__btn pulse"></button>
                    <button className="skeleton__price pulse"></button>
                </div>
            </div>
        </section>
    )
}

export default Skeleton;