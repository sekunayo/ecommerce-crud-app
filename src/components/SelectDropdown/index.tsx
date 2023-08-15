import { Field } from "formik";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";

interface SelectDropdownProps {
  label?: string;
  name: string;
  options?: any;
}

const SelectDropdown = ({ label, options, name }: SelectDropdownProps) => {
  return (
    <div className={styles.selectDropdownContainer}>
      {label && <p className={styles.selectDropdownLabel}>{label}</p>}
      <select name={name} className={styles.selectDropdown}>
        {options?.map?.((element: any, index: any) => {
          return (
            <option value={element} key={index + 1}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectDropdown;
