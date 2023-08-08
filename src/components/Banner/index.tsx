import React from 'react';
import { styles } from "./styles";

interface BannerProps {
    label: string;
}
const Banner = ({ label }: BannerProps) => {
    return (
        <div className={styles.banner}>{label}</div>
    )
}

export default Banner