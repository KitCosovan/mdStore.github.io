import './App.scss';
import '../../media-quaries.css';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import productsData from '../context/context.js';
import SupButtons from '../supButtons/SupButtons';
import CartPage from '../pages/cartPage/CartPage';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy';
import HomePage from '../pages/homePage/HomePage';
import CatalogPage from '../pages/catalogPage/CatalogPage';
import ContactsPage from '../pages/contactsPage/ContactsPage';
import DeliveryPage from '../pages/deliveryPage/DeliveryPage';
import AboutPage from '../pages/aboutPage/AboutPage';

const { Provider } = productsData;

function App() {
  return (
    <BrowserRouter basename="mdStore.github.io">
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const [isVisiblePage, setIsVisiblePage] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    setIsVisiblePage(location.pathname === '/catalog');
  }, [location]);

  return (
    <Provider value={selectedProducts}>
      <div className={`container ${!isVisiblePage ? 'on-intro__container' : ''}`}>
        <SupButtons productsNum={selectedProducts.length}/>
        <Routes>
          <Route path='/cart' element={<CartPage products={selectedProducts} setProducts={setSelectedProducts}/>}/>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage setCartProducts={setSelectedProducts}/>} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/delivery' element={<DeliveryPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
