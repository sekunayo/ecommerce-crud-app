import React from 'react'
import { styles } from './styles';

import { ButtonType, ButtonVariantType } from '../../types/component';

interface ButtonProps {
    type: ButtonType;
    label?: string;
    variant: ButtonVariantType;
    icon?: JSX.Element;
    disabled?: boolean;
    handleClick?: () => void;
}
export const Button = ({ type, label, icon, handleClick, disabled }: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={handleClick} type={type} className={styles.button} >
            {label}
            {icon && icon}
        </button>
    )
}

