import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styles } from './styles'

import { RootState } from '../../store'
import CartView from '../../views/CartView'

import Banner from '../../components/Banner'
import { Button } from '../../components/Button'
import Header from '../../components/Header'


const Cart = () => {
    const cartValue = useSelector((state: RootState) => state.cart.value)
    const navigate = useNavigate();

    const handleReturnToShop = () => {
        navigate("/shop");
    };

    return (
        <div className={styles.cart}>
            <Header />
            <h4 className={styles.cartHeading}>Cart</h4>
            {cartValue.length <= 0 ? <div className={styles.cartMain}>
                <Banner label="Your cart is currently empty" />
                <div className={styles.cartMainReturnButton}>
                    <Button handleClick={handleReturnToShop} variant="primary" type='button' label="RETURN TO SHOP" />
                </div>
            </div> : <CartView />}
        </div>
    )
}

export default Cart