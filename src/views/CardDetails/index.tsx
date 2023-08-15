import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import BackCard from './BackCard';
import FrontCard from './FrontCard';
import { styles } from "./styles"

const CardDetails = () => {
    const cardValues = useSelector((state: RootState) => state.checkout.card)
    return (
        <div className={styles.cardDetails}>
            <FrontCard values={cardValues} />
            <BackCard values={cardValues} />

            <p className={styles.cardDetailsText}>Proceed to shipping</p>
        </div>
    )
}

export default CardDetails