import { useField } from 'formik'
import React from 'react'
import { InputType } from '../../types/component';
import { styles } from './styles';

interface InputProps {
    label?: string;
    name: string;
    type: InputType;
    placeholder?: string;
    maxLength?: number;
    pattern?: string;
    onKeyDown?: (event: any) => void;
}

const Input = (props: InputProps) => {
    const [field, meta, helpers] = useField(props.name);

    const isError = meta.touched && meta.error;

    return (
        <div className={styles.inputContainer}>
            {props.label && <label className={styles.inputLabel} htmlFor={props.name}>{props.label}</label>}
            <input onKeyDown={(event) => props.onKeyDown?.(event)} id={props.name} className={styles.input} {...props}  {...field} />
            {Boolean(isError) && <p className={styles.inputError}>{meta.error}</p>}
        </div>
    )
}

export default Input