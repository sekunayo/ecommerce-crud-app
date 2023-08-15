import React from 'react'
import { useFormikContext } from 'formik';

import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'

import { formatMonth, splitByFours } from '../../../helpers';
import { styles } from './styles'

interface FrontCardProps {
    values: any;
}

const FrontCard = ({ values }: FrontCardProps) => {

    const cardNumberArray = splitByFours(values.cardNumber === "" ? "0000000000000000" : values.cardNumber.toString());
    return (
        <div className={styles.frontCard}>
            <div className={styles.frontCardLogoContainer}>
                <Logo />
                <p className={styles.frontCardLogo}>Grace's Shop</p>
            </div>
            <div className={styles.frontCardFooterContainer}>
                <div className={styles.frontCardNumber}>
                    {
                        cardNumberArray.map((element, index) => {
                            return <p key={index + 1}>{element}</p>
                        })
                    }
                </div>
                <div className={styles.frontCardFooter}>
                    <p className={styles.frontCardName}>{values.name === "" ? "cardholder name" : values.name}</p>
                    <p>{values.month === "" ? "00" : values.month} / {values.year === "" ? "0000" : values.year}</p>
                </div>
            </div>
        </div>
    )
}

export default FrontCard