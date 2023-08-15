import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styles } from './styles'

import { Button } from '../../components/Button'
import { RootState } from '../../store'
import { useNavigate } from 'react-router-dom'

const CartViewTotal = () => {
    const cartTotalValue = useSelector((state: RootState) => state.cart.total);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/checkout")
    }
    return (
        <div className={styles.cartViewTotal}>
            <h4 className={styles.cartViewTotalHeading}>Cart Total</h4>
            <p className={styles.cartViewTotalParagraph}>Sub Total <span>${cartTotalValue}</span></p>
            <hr />
            <p className={styles.cartViewTotalParagraph}>Total <span>${cartTotalValue}</span></p>
            <div className={styles.cartViewTotalButton}>
                <Button handleClick={handleCheckout} variant='primary' type="button" label="PROCEED TO CHECKOUT" />
            </div>
        </div>
    )
}

export default CartViewTotal