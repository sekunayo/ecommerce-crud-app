import React from 'react'
import { styles } from "./styles"

interface BadgeProps {
    label: any;
    active: boolean;
}
const Badge = ({ label, active }: BadgeProps) => {
    return (
        <div data-active={active} className={styles.badge}>
            {label}
        </div>
    )
}

export default Badge