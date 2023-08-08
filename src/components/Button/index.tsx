import React from 'react'
import { ButtonType, ButtonVariantType } from '../../types/component';
import { styles } from './styles';

interface ButtonProps {
    type: ButtonType;
    label?: string;
    variant: ButtonVariantType;
    icon?: JSX.Element
}
export const Button = ({ type, label, icon }: ButtonProps) => {
    return (
        <button type={type} className={styles.button} >
            {label}
            {icon && icon}
        </button>
    )
}

