import { useField } from 'formik'
import React from 'react'
import { styles } from './styles';

interface TextAreaProps {
    label?: string;
    name: string;
    placeholder?: string;
}

const TextArea = (props: TextAreaProps) => {
    const [field, meta, helpers] = useField(props.name);

    const isError = meta.touched && meta.error;

    return (
        <div className={styles.textareaContainer}>
            {props.label && <label className={styles.textareaLabel} htmlFor={props.name}>{props.label}</label>}
            <textarea id={props.name} className={styles.textarea} {...props}  {...field} />
            {Boolean(isError) && <p className={styles.textareaError}>{meta.error}</p>}
        </div>
    )
}

export default TextArea