import './skeleton.scss';

const Skeleton = () => {
    return (
        <section className="skeleton">
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