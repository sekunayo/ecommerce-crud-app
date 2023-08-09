import React from 'react'
import { useDispatch } from 'react-redux';
import { styles } from './styles'

import InputQuantity from '../InputQuantity';

import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { calculateTotal, removeFromCart } from '../../slices/cartSlice';


interface CartItemProps {
    element?: any;
}

const CartItem = ({ element }: CartItemProps) => {
    const dispatch = useDispatch();

    const handleRemoveCart = () => {
        dispatch(removeFromCart(element));
        dispatch(calculateTotal())
    };

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemProduct}>
                <button onClick={handleRemoveCart} className={styles.cartItemButton}>
                    <Close />
                </button>
                <div className={styles.cartItemImage}>
                    <img src={element?.image} alt="cartItem" />
                </div>
                <p>{element?.name}</p>
            </div>
            <p>${element?.price}</p>
            <InputQuantity initialValue={element?.quantity as number} />
            <p>${element?.price * element?.quantity}</p>
        </div>
    )
}

export default CartItem