import React from 'react'
import Banner from '../../components/Banner'
import { Button } from '../../components/Button'
import CartItem from '../../components/CartItem'
import Header from '../../components/Header'
import CartView from '../../views/CartView'
import { styles } from './styles'

const Cart = () => {
    return (
        <div className={styles.cart}>
            <Header />
            <h4 className={styles.cartHeading}>Cart</h4>
            <div className={styles.cartMain}>
                {/* <Banner label="Your cart is currently empty" /> */}
                {/* <div className={styles.cartMainReturnButton}>
                    <Button variant="primary" type='button' label="RETURN TO SHOP" />
                </div> */}
                <CartView />

            </div>

        </div>
    )
}

export default Cart