import React from 'react'
import { Button } from '../../components/Button'
import { styles } from './styles'

const CartViewTotal = () => {
    return (
        <div className={styles.cartViewTotal}>
            <h4 className={styles.cartViewTotalHeading}>Cart Total</h4>
            <p className={styles.cartViewTotalParagraph}>Sub Total <span>$12.00</span></p>
            <hr />
            <p className={styles.cartViewTotalParagraph}>Total <span>$12.00</span></p>
            <div className={styles.cartViewTotalButton}>
                <Button variant='primary' type="button" label="PROCEED TO CHECKOUT" />
            </div>
        </div>
    )
}

export default CartViewTotal