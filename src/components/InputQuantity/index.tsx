import React, { ChangeEvent, useState } from 'react';
import { styles } from "./styles"


interface InputQuantityProps {
    initialValue: number;
}

const InputQuantity = ({ initialValue }: InputQuantityProps) => {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(parseInt(event.target.value));
    }

    return (
        <form className={styles.inputQuantity}>
            <button></button>
            <input type="number" onChange={handleInputChange} value={inputValue} className={styles.inputQuantityBox}></input>
            <button></button>
        </form>
    )
}

export default InputQuantity