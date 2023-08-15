import React, { ChangeEvent, useEffect, useState } from 'react';
import { styles } from "./styles"


interface InputQuantityProps {
    initialValue: number;
    handleIncreaseQuantity: () => void;
    handleDecreaseQuantity: () => void;
}

const InputQuantity = ({ initialValue, handleIncreaseQuantity, handleDecreaseQuantity }: InputQuantityProps) => {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(parseInt(event.target.value));
    }

    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue])


    return (
        <form className={styles.inputQuantity}>
            <button type='button' onClick={handleIncreaseQuantity}>+</button>
            <input type="number" onChange={handleInputChange} value={inputValue} className={styles.inputQuantityBox}></input>
            <button type='button' onClick={handleDecreaseQuantity}>-</button>
        </form>
    )
}

export default InputQuantity