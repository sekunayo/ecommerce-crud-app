import { useState } from "react";
import Header from "../../components/Header";
import { CheckoutScreenType } from "../../types/screens";
import CardDetails from "../../views/CardDetails";
import CheckoutForm from "../../views/CheckoutForm";
import ShippingForm from "../../views/ShippingForm";
import { styles } from "./styles";

const Checkout = () => {
  const [activeScreen, setActiveScreen] =
    useState<CheckoutScreenType>("checkoutForm");

  const handleCheckoutScreen = (newScreen: CheckoutScreenType) => {
    setActiveScreen(newScreen);
  };

  const checkoutScreens: Record<CheckoutScreenType, JSX.Element> = {
    checkoutForm: <CheckoutForm handleCheckoutScreen={handleCheckoutScreen} />,
    cardDetails: <CardDetails handleCheckoutScreen={handleCheckoutScreen} />,
    shippingDetails: <ShippingForm />,
  };

  return (
    <div className={styles.checkout}>
      <Header />
      <h4 className={styles.checkoutHeading}>Checkout</h4>
      {checkoutScreens[activeScreen]}
    </div>
  );
};

export default Checkout;
