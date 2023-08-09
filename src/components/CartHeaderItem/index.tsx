import React from 'react'
import { styles } from './styles';

import { ReactComponent as Close } from '../../assets/icons/close.svg';

interface CartHeaderItemProps {
    element: any;
}

const CartHeaderItem = ({ element }: CartHeaderItemProps) => {
    return (
        <div className={styles.cartHeaderItem}>
            <div className={styles.cartHeaderItemImage}>
                <img src={element?.image as string} alt="cartHeaderItem" />
                <button type="button">
                    <Close />
                </button>
            </div>
            <div>
                <h4>{element?.name}</h4>
                <p>{element?.quantity} x {element?.price}</p>
            </div>
        </div>
    )
}

export default CartHeaderItem