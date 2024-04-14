import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

import Header from '../../header/Header';
import Product from '../../product/Product';
import Aside from '../../aside/Aside';
import Footer from '../../footer/Footer';

const CatalogPage = ({ setCartProducts }) => {

    const is992Max = useMediaQuery({ query: '(max-width: 992px' });

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axios.get('/db.json')
        .then(response => {
            const data = response.data;
            const productKeys = Object.keys(data);
            const productsData = productKeys.map(key => {
                const product = data[key];
                return {
                    key: key,
                    discount: product.discount,
                    title: product.title,
                    text: product.text,
                    price: product.price,
                    old: product.oldPrice,
                    images: product.images
                };
            });
            setProducts(productsData);
        })
        .catch(error => console.error('Ошибка чтения файла: ', error));
    }, []);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    }

    return (
        <>
            {(!is992Max) ? 
                <Aside products={products} onProductSelect={handleProductSelect}/>
            : null}
            <main className="main">
                <Header products={products} onProductSelect={handleProductSelect}/>
                <Product product={selectedProduct} setProducts={setCartProducts}/>
            </main>
            <Footer />
        </>
    )
}

export default CatalogPage;