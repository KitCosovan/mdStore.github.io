import './App.scss';
import '../../media-quaries.css';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SupButtons from '../supButtons/SupButtons';
import CartPage from '../pages/cartPage/CartPage';
import HomePage from '../pages/homePage/HomePage';
import CatalogPage from '../pages/catalogPage/CatalogPage';
import ContactsPage from '../pages/contactsPage/ContactsPage';
import DeliveryPage from '../pages/deliveryPage/DeliveryPage';
import AboutPage from '../pages/aboutPage/AboutPage';

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

  useEffect(() => {
    setIsVisiblePage(location.pathname === '/catalog');
  }, [location]);

  return (
    <div className={`container ${!isVisiblePage ? 'on-intro__container' : ''}`}>
      <SupButtons />
      <Routes>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/delivery' element={<DeliveryPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
