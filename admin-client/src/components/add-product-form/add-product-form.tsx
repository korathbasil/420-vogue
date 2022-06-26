import { FC, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import { categories, Category } from "sys";

import styles from "./add-product-form.module.scss";
import { ProductPreview } from "components/product-preview/product-preview";

export const AddProductForm = () => {
  const [selectedCategory, setSelectdeCategory] = useState<Category>(
    categories[0]
  );
  return (
    <section className={styles.addProduct}>
      <form>
        <h4>Please fill the form below.</h4>
        <FormInput label="Barand Name" name="brandName" />
        <FormInput label="Style Name" name="styleName" />

        <FormSelectInput
          label="Category"
          name="category"
          options={categories?.map((cat) => {
            return {
              name: cat.name,
              value: cat.value,
            };
          })}
          stateHandler={setSelectdeCategory}
        />

        <FormSelectInput
          label="Sub Category"
          name="subCategory"
          options={categories?.map((cat) => {
            return {
              name: cat.name,
              value: cat.value,
            };
          })}
          stateHandler={setSelectdeCategory}
        />

        <h5>Add base variant details.</h5>
        <div className={styles.compoundInput}>
          <div>
            <FormInput label="Color" name="color" />
          </div>
          <div>
            <FormInput label="Color Code" name="colorCode" />
          </div>
        </div>
        <FormInput label="Price" name="price" />
      </form>
      <div className="spacer-Y"></div>
      <ProductPreview />
    </section>
  );
};

function FormInput({
  label,
  type = "text",
  name,
}: {
  label: string;
  type?: string;
  name: string;
}) {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} />
    </div>
  );
}

interface FormSelectInputProps<T> {
  label: string;
  name: string;
  options: {
    name: string;
    value: string;
  }[];
  stateHandler: Dispatch<SetStateAction<T>>;
}

const FormSelectInput: FC<FormSelectInputProps<Category>> = ({
  label,
  name,
  options,
  stateHandler,
}) => {
  function findAndSetSelectedCategory(categoryValue: string) {
    const selectedCategory = categories.find(
      (cat) => cat.value === categoryValue
    );

    if (selectedCategory) stateHandler(selectedCategory);
  }
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <select
        onChange={(e) => findAndSetSelectedCategory(e.target.value)}
        name={name}
      >
        {options?.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
