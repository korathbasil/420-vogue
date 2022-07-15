import { ChangeEvent, useState } from "react";

import { categories, Category } from "sys";

import styles from "./add-product-form.module.scss";
import { ProductPreview } from "components/product-preview/product-preview";
import { FormInput, FormSelectInput } from "./form-inputs";

export const AddProductForm = () => {
  const [selectedCategory, setSelectdeCategory] = useState<Category | null>(
    null
  );

  function findAndSetSelectedCategory(e: ChangeEvent<HTMLSelectElement>) {
    const selectedCategory = categories.find(
      (cat) => cat.value === e.target.value
    );

    if (selectedCategory) setSelectdeCategory(selectedCategory);
    else setSelectdeCategory(null);
  }

  function makeSubcategoryItems(category: Category | null) {
    return category?.subCategories.map((cat) => {
      return {
        name: cat.name,
        value: cat.value,
      };
    });
  }
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
          onChangeHandler={findAndSetSelectedCategory}
        />

        {selectedCategory && (
          <FormSelectInput
            label="Sub Category"
            name="subCategory"
            options={makeSubcategoryItems(selectedCategory)}
          />
        )}

        <h5>Add base variant details.</h5>
        <div className={styles.compoundInput}>
          <div>
            <FormInput label="Color" name="color" />
          </div>
          <div>
            <FormInput label="Color Code" name="colorCode" />
          </div>
        </div>
        <div className={styles.compoundInput}>
          <div>
            <FormInput label="Price" name="price" />
          </div>
          <div>
            <button>Add more variants</button>
          </div>
        </div>
      </form>
      <div className="spacer-Y"></div>
      <ProductPreview />
    </section>
  );
};
