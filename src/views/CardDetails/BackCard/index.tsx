import React from 'react'
import { styles } from "./styles"
import { ReactComponent as CardFooterIcon } from "../../../assets/icons/card_footer.svg"
import { useFormikContext } from 'formik';


interface BackCardProps {
    values: any;
}
const BackCard = ({ values }: BackCardProps) => {

    return (
        <div className={styles.backCard}>
            <div className={styles.backCardBlackBox}></div>
            <div className={styles.backCardGreyBox}>
                <p>{values.cvc === "" ? "000" : values.cvc}</p>
            </div>

            <div className={styles.backCardIcon}>
                <CardFooterIcon />
            </div>
        </div>
    )
}

export default BackCard