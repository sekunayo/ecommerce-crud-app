import { Formik, Form, useFormikContext } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import Input from '../../components/Input'
import { onlyNumberKey } from '../../helpers'
import { checkoutFormInitialValues } from '../../helpers/initialValues'
import { checkoutValidationSchema } from '../../helpers/validationSchema'
import { CheckoutScreenType } from '../../types/screens'
import BackCard from '../CardDetails/BackCard'
import FrontCard from '../CardDetails/FrontCard'
import { styles } from './styles'
import { updateCardDetails } from '../../slices/checkoutSlice'

interface CheckoutFormProps {
    handleCheckoutScreen?: (newScreen: CheckoutScreenType) => void;
}
const CheckoutForm = ({ handleCheckoutScreen }: CheckoutFormProps) => {
    const dispatch = useDispatch();

    return (
        <Formik initialValues={checkoutFormInitialValues} validationSchema={checkoutValidationSchema} onSubmit={(values, action) => {
            dispatch(updateCardDetails(values))
            handleCheckoutScreen?.("cardDetails")
            action.resetForm()
        }}>
            {props => (

                <Form className={styles.checkoutForm}>

                    <div className={styles.checkoutFormCards}>

                        <FrontCard values={props.values} />
                        <div className={styles.checkoutFormBackCard}>
                            <BackCard values={props.values} />
                        </div>
                    </div>
                    <div className={styles.checkoutFormContainer}>

                        <Input placeholder='e.g. Jane Appleseed' label='Cardholder Name' name="name" type='text' />
                        <Input placeholder='e.g. 1234567891230000' onKeyDown={onlyNumberKey} maxLength={16} pattern="^\d+$" label='Card Number' name="cardNumber" type='text' />
                        <div className={styles.checkoutFormGridRow("2", "20")}>
                            <div className={styles.checkoutFormGridRow("2", "10")}>
                                <Input placeholder='MM' onKeyDown={onlyNumberKey} maxLength={2} pattern="^\d+$" label='Month' name="month" type='text' />
                                <Input placeholder="YY" onKeyDown={onlyNumberKey} maxLength={4} pattern="^\d+$" label="Year" name="year" type='text' />
                            </div>
                            <Input placeholder='e.g 123' onKeyDown={onlyNumberKey} maxLength={3} pattern="^\d+$" label='cvc' name="cvc" type='text' />
                        </div>

                        <Button type="submit" label="Confirm" variant='secondary' customClassName={styles.checkoutFormButton} />
                    </div>
                </Form>
            )}
        </Formik >

    )
}

export default CheckoutForm