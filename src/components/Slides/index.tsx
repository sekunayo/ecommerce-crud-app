import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

import { Button } from '../Button';

interface SlidesProps {
    image: string;
    title: string;
    description: string;
    titleEmphasis: string;
}
const Slides = ({ image, title, titleEmphasis, description }: SlidesProps) => {
    const navigate = useNavigate();

    const handleReturnToShop = () => {
        navigate("/shop")
    }
    return (
        <div className={styles.slides}>
            <div className={styles.slidesText}>
                <h2 className={styles.slidesTextHeading}>{title} <span>{titleEmphasis}</span></h2>
                <p>{description}</p>
                <Button handleClick={handleReturnToShop} variant='primary' type="button" label='Shop Now' />
            </div>
            <div className={styles.slidesImage} >
                <img src={image} alt="wristwatch" />
            </div>
        </div>
    )
}

export default Slides