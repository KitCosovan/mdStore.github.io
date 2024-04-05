import './App.scss';
import '../../media-quaries.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/homePage/HomePage';
import CatalogPage from '../pages/catalogPage/CatalogPage';
import ContactsPage from '../pages/contactsPage/ContactsPage';
import DeliveryPage from '../pages/deliveryPage/DeliveryPage';
import AboutPage from '../pages/aboutPage/AboutPage';

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/delivery' element={<DeliveryPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
