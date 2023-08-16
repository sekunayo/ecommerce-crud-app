import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import { onlyNumberKey } from "../../helpers";
import { shippingValidationSchema } from "../../helpers/validationSchema";
import { CheckoutScreenType } from "../../types/screens";
import { styles } from "./styles";
import TextArea from "../../components/TextArea";
import useFetch from "../../hooks/useFetch";
import SelectDropdown from "../../components/SelectDropdown";
import { shippingFormInitialValues } from "../../helpers/initialValues";
import { RootState } from "../../store";
import OrderViewTotal from "../OrderViewTotal";

interface ShippingFormProps {
  handleCheckoutScreen?: (newScreen: CheckoutScreenType) => void;
}
const ShippingForm = ({ handleCheckoutScreen }: ShippingFormProps) => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const { result, error } = useFetch("https://restcountries.com/v3.1/all");
  const cartValue = useSelector((state: RootState) => state.cart.value);
  const cartTotal = useSelector((state: RootState) => state.cart.total);

  useEffect(() => {
    const newArray = result.map((element: any) => element?.name?.common);
    setCountries(newArray.sort());
  }, [result]);

  return (
    <Formik
      initialValues={shippingFormInitialValues}
      validationSchema={shippingValidationSchema}
      onSubmit={(values, action) => {
        console.log(values);
        action.resetForm();
      }}
    >
      {(props) => (
        <Form className={styles.shippingForm}>
          <div className={styles.shippingFormContainer}>
            <div className={styles.shippingFormInputContainer}>
              <>
                <h4 className={styles.shippingFormHeader}>Billing details</h4>
                <div className={styles.shippingFormGridRow("2", "20")}>
                  <Input
                    placeholder="e.g. Jane"
                    label="First Name"
                    name="firstName"
                    type="text"
                  />
                  <Input
                    placeholder="e.g. George"
                    label="Last Name"
                    name="lastName"
                    type="text"
                  />
                </div>
                <Input
                  label="Company name (optional)"
                  name="companyName"
                  type="text"
                />
                <SelectDropdown
                  name="country"
                  options={countries}
                  label="Country / Region"
                />
                <Input label="Address 1" name="address1" type="text" />
                <Input label="Address 2" name="address2" type="text" />
                <Input label="Town / City" name="city" type="text" />
                <Input label="State" name="state" type="text" />
                <Input label="Zip Code" name="zipCode" type="text" />
                <Input
                  onKeyDown={onlyNumberKey}
                  maxLength={11}
                  pattern="^\d+$"
                  label="Phone"
                  name="phoneNo"
                  type="text"
                />
                <Input label="Email address" name="emailAddress" type="email" />
              </>
              <>
                <h4 className={styles.shippingFormHeader}>
                  Additional information
                </h4>
                <div className={styles.shippingFormAdditionalInfo}>
                  <TextArea
                    label="order notes (optional)"
                    placeholder="Notes about this order e.g From Jane George"
                    name="additionalInfo"
                  />
                </div>
              </>
            </div>
            <div className={styles.shippingFormOrder}>
              <OrderViewTotal />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ShippingForm;
