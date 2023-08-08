import React from 'react'
import { styles } from './styles'

const CartItem = () => {
    return (
        <div className={styles.cartItem}>
            <div>x</div>
            <div className={styles.cartItemProduct}>
                <div className={styles.cartItemImage}>
                </div>
                <p>Eternal Sunset Collection Lip and Cheek</p>
            </div>
            <p>$12.00</p>
            <button className=''>
                1
            </button>
            <p>$12.00</p>
        </div>
    )
}

export default CartItem