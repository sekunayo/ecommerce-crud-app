import React from 'react'
import Header from '../../components/Header'
import useMap from '../../hooks/useMap';
import { styles } from './styles'

const Contact = () => {
    useMap();

    return (
        <div className={styles.contact}>
            <Header />
            <h4 className={styles.contactHeading}>Contact</h4>
            <div id="map" className={styles.contactMap}></div>

            <div className={styles.contactFooter}>
                <div className={styles.contactFooterSocial}>
                    <div className={styles.contactFooterSocialRow}>
                        <p>+44 7984-991-790</p>
                        <p>graceokereke22@gmail.com</p>
                        <p>London, United Kingdom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact