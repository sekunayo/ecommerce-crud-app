import React from "react";
import Home from "./pages/home";
import ProductCard from "./components/ProductCard";
import "./styles/app_styles";
import { styles } from "./styles/app_styles";
import Product from "./pages/product";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import ProtectedRoute from "./paritals/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const cartValue = useSelector((state: RootState) => state.cart.value);

  return (
    <div className={styles.app}>
      <Routes>
        <Route index element={<Home />} />
        <Route path=":id" element={<Product />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="checkout"
          element={
            <ProtectedRoute
              auth={cartValue.length <= 0}
              children={<Checkout />}
            />
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  );
}

export default App;
