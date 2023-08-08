import React, { useState } from 'react';
import { Button } from '../Button';
import { styles } from "./styles"
import brownImage from "../../assets/images/brown_wristwatch.avif";
import { Link } from 'react-router-dom';

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    id?: string;
}
const ProductCard = ({ image, name, price, id }: ProductCardProps) => {
    const [quickView, setQuickView] = useState(false);

    const toggleView = () => {
        setQuickView(!quickView)
    }

    return (
        <div className={styles.productCard}>
            <Link to={`/${id}`}>
                <div onMouseEnter={toggleView} onMouseLeave={toggleView} className={styles.productCardImage}>
                    <img src={image} alt="wristwatch" />

                    <div data-show={Boolean(quickView)} className={styles.productCardHoverButton}>
                        <Button variant='primary' type="button" label="QUICK VIEW" />
                    </div>
                </div>
            </Link>
            <h6 className={styles.productCardHeading}>{name}</h6>
            <p className={styles.productCardPrice}>${price}</p>
            <Button variant='primary' type="button" label='ADD TO CART' />
        </div>
    )
}

export default ProductCard