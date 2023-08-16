import React from "react";
import { useSelector } from "react-redux";
import { styles } from "./styles";

import CartViewTotal from "../CartViewTotal";

import { Button } from "../../components/Button";
import CartItem from "../../components/CartItem";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

const CartView = () => {
  const cartValue = useSelector((state: RootState) => state.cart.value);
  const navigate = useNavigate();

  const handleReturnToShop = () => {
    navigate("/shop");
  };

  return (
    <div className={styles.cartViewItem}>
      <div className={styles.cartViewItemList}>
        <div className={styles.cartViewHeader}>
          <h4>product</h4>
          <h4>Price</h4>
          <h4>quantity</h4>
          <h4>subtotal</h4>
        </div>
        {cartValue?.map?.((element, index) => {
          return <CartItem key={index + 1} element={element} />;
        })}
      </div>
      <div className={styles.cartViewButton}>
        <Button
          handleClick={handleReturnToShop}
          type="button"
          variant="primary"
          label="update cart"
        />
      </div>
      <div className={styles.cartView}>
        <CartViewTotal />
      </div>
    </div>
  );
};

export default CartView;
