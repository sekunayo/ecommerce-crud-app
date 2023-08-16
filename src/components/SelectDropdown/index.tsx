import { Field, useField } from "formik";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";

interface SelectDropdownProps {
  label?: string;
  name: string;
  options?: any;
}

const SelectDropdown = ({ label, options, name }: SelectDropdownProps) => {
  const [field, meta, helpers] = useField(name);
  const isError = meta.touched && meta.error;

  return (
    <div className={styles.selectDropdownContainer}>
      {label && (
        <label htmlFor={name} className={styles.selectDropdownLabel}>
          {label}
        </label>
      )}
      <select
        disabled={options.length === 0}
        id={name}
        name={name}
        className={styles.selectDropdown}
      >
        {options?.map?.((element: any, index: any) => {
          return (
            <option value={element} key={index + 1}>
              {element}
            </option>
          );
        })}
      </select>
      {Boolean(isError) && <p className={styles.selectError}>{meta.error}</p>}
    </div>
  );
};

export default SelectDropdown;
