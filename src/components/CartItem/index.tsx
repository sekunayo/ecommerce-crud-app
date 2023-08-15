import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { styles } from './styles'

import InputQuantity from '../InputQuantity';

import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { calculateTotal, decreaseQuantity, increaseQuantity, removeFromCart } from '../../slices/cartSlice';


interface CartItemProps {
    element?: any;
}

const CartItem = ({ element }: CartItemProps) => {
    const dispatch = useDispatch();

    const handleRemoveCart = () => {
        dispatch(removeFromCart(element));
    };

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(element))
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(element))
    }

    useEffect(() => {
        dispatch(calculateTotal())
    })

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
            <InputQuantity handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity} initialValue={element?.quantity as number} />
            <p>${element?.price * element?.quantity}</p>
        </div>
    )
}

export default CartItem