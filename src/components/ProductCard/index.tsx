import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styles } from "./styles"

import { Button } from '../Button';

import { addToCart, calculateTotal } from '../../slices/cartSlice';

interface ProductCardProps {
    element: any;
}
const ProductCard = ({ element }: ProductCardProps) => {
    const [quickView, setQuickView] = useState(false);
    const dispatch = useDispatch();

    const toggleView = () => {
        setQuickView(!quickView)
    }

    const handleAddToCart = () => {
        dispatch(addToCart(element))
        dispatch(calculateTotal())
    }

    return (
        <div className={styles.productCard}>
            <Link to={`/${element?.id}`}>
                <div onMouseEnter={toggleView} onMouseLeave={toggleView} className={styles.productCardImage}>
                    <img src={element?.image as string} alt="wristwatch" />

                    <div data-show={Boolean(quickView)} className={styles.productCardHoverButton}>
                        <Button variant='primary' type="button" label="QUICK VIEW" />
                    </div>
                </div>
            </Link>
            <h6 className={styles.productCardHeading}>{element?.name}</h6>
            <p className={styles.productCardPrice}>${element?.price}</p>
            <Button handleClick={handleAddToCart} variant='primary' type="button" label='ADD TO CART' />
        </div>
    )
}

export default ProductCard