import { FC } from "react";
import { Category } from "lib/interfaces";

import styles from "./select-input-field.module.scss";

interface SelectInputFieldProps<T> {
  label: string;
  name: string;
  options:
    | {
        name: string;
        value: string;
      }[]
    | undefined;
  onChangeHandler?: any;
  required: boolean;
}

export const SelectInputField: FC<SelectInputFieldProps<Category | null>> = ({
  label,
  name,
  options,
  onChangeHandler,
  required = false,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <select onChange={onChangeHandler} name={name} required={required}>
        <option value="">--select--</option>

        {options?.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
