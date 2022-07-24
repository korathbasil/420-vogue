import type { Dispatch, FC, SetStateAction } from "react";

import { Category } from "sys";

import styles from "./add-product-form.module.scss";

export function FormInput({
  label,
  type = "text",
  name,
  onChange,
  onBlur,
  value,
}: {
  label: string;
  type?: string;
  name: string;
  onChange?: any;
  onBlur?: any;
  value?: any;
}) {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
}

interface FormSelectInputProps<T> {
  label: string;
  name: string;
  options:
    | {
        name: string;
        value: string;
      }[]
    | undefined;
  onChangeHandler?: any;
}

export const FormSelectInput: FC<FormSelectInputProps<Category | null>> = ({
  label,
  name,
  options,
  onChangeHandler,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <select onChange={onChangeHandler} name={name}>
        <option value="">--select--</option>

        {options?.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
