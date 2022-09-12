import type { Dispatch, FC, SetStateAction } from "react";

import { Category } from "lib/interfaces";

import styles from "./add-product-form.module.scss";

export function FormInput({
  label,
  type = "text",
  name,
  onChange,
  onBlur,
  value,
  required = false,
}: {
  label: string;
  type?: string;
  name: string;
  onChange?: any;
  onBlur?: any;
  value?: any;
  required?: boolean;
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
        required={required}
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
  required: boolean;
}

export const FormSelectInput: FC<FormSelectInputProps<Category | null>> = ({
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
