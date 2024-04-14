import './skeleton.scss';
import './media-quaries.scss';
import { useContext } from 'react';
import { isActive } from '../context/context';

const Skeleton = () => {

    const { active } = useContext(isActive);

    return (
        <section className={(!active) ? 'skeleton' : 'skeleton blur'}>
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