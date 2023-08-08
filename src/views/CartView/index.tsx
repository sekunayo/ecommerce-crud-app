import React from 'react'
import CartItem from '../../components/CartItem'
import CartViewTotal from '../CartViewTotal'
import { styles } from './styles'

const CartView = () => {
    return (
        <div>
            <div className={styles.cartViewItemList}>
                <CartItem />
            </div>
            <div className={styles.cartView}>

                <CartViewTotal />
            </div>
        </div>
    )
}

export default CartView