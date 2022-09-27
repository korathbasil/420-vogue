import styles from "./input-field.module.scss";

export function InputField({
  label,
  type = "text",
  name,
  onChange,
  onBlur,
  value,
  required = false,
  error,
}: {
  label: string;
  type?: string;
  name: string;
  onChange?: any;
  onBlur?: any;
  value?: any;
  required?: boolean;
  error?: string;
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
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
}
