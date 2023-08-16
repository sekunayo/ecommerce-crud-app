import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CheckoutScreenType } from "../../types/screens";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import { styles } from "./styles";

interface CheckoutFormProps {
  handleCheckoutScreen?: (newScreen: CheckoutScreenType) => void;
}

const CardDetails = ({ handleCheckoutScreen }: CheckoutFormProps) => {
  const cardValues = useSelector((state: RootState) => state.checkout.card);

  const handleProceedToShipping = () => {
    handleCheckoutScreen?.("shippingDetails");
  };

  return (
    <div className={styles.cardDetails}>
      <FrontCard values={cardValues} />
      <BackCard values={cardValues} />

      <button
        type="button"
        onClick={handleProceedToShipping}
        className={styles.cardDetailsText}
      >
        Proceed to shipping
      </button>
    </div>
  );
};

export default CardDetails;
