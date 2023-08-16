import { useFormikContext } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { RootState } from "../../store";
import { styles } from "./styles";

const OrderViewTotal = () => {
  const cartValue = useSelector((state: RootState) => state.cart.value);
  const cartTotal = useSelector((state: RootState) => state.cart.total);

  const { values, submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  return (
    <div>
      <div className={styles.orderViewTotalHeader}>
        <h4>Product</h4>
        <h4>Subtotal</h4>
      </div>
      <ul className={styles.orderViewTotalList}>
        {cartValue.map((element, index) => {
          return (
            <li key={index + 1} className={styles.orderViewTotalListItem}>
              <span>
                {element.category} {element.name} x {element.quantity}
              </span>
              <span>{element.price * element.quantity}</span>
            </li>
          );
        })}
      </ul>
      <hr />
      <p className={styles.orderViewTotalContent}>
        <span className={styles.orderViewTotalContentHeader}>Total</span>
        <span className={styles.orderViewTotalText}>{cartTotal}</span>
      </p>
      <div className={styles.orderViewTotalButton}>
        <Button
          variant="primary"
          type="submit"
          handleClick={handleSubmit}
          label="place order"
        />
      </div>
    </div>
  );
};

export default OrderViewTotal;
