import React from 'react';
import Home from './pages/home';
import ProductCard from './components/ProductCard';
import './styles/app_styles';
import { styles } from './styles/app_styles';
import Product from './pages/product';
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import Cart from './pages/cart';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
