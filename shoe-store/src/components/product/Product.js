import './Product.scss';

const Product = ({ product }) => {

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <section className="product">
            <div className="product__circle"></div>
            <div className="product__main-img">
                <img src={product.img} alt="product-img" className="product__main-img_img" />
            </div>
            <div className="product__img-slider">
                {product.images && product.images.map((image, index) => (
                    <div key={index} className="product__img-slide">
                        <img src={image} alt="product-img" className="product__img-slide_img"/>
                    </div>
                ))}
            </div>
            <div className="product__about">
                <div className="product__title">{product.title}</div>
                <div className="product__descr">{product.text}</div>
                <div className="product__btns">
                    <button className="product__btn">Add to cart</button>
                    <button className="product__price">{product.price}</button>
                </div>
            </div>
        </section>
    )
}

export default Product;