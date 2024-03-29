import { ChangeEvent, useState, FC, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import { ProductController } from "lib/controllers";
import { categories } from "sys";

import styles from "./edit-product-form.module.scss";
import { InputField, SelectInputField } from "components/controls";
import { Category, Product } from "lib/interfaces";
import { findCategoryFromValue, findSubCategoryFromValue } from "utils";

interface EditProductFormProps {
  product: Product;
}

export const EditProductForm: FC<EditProductFormProps> = ({ product }) => {
  const router = useRouter();

  // Formik
  const YupValidationObject = {
    brand: yup
      .string()
      .min(1, "Please enter brand name")
      .max(20, "Maximum 20 characters allowed"),
    style: yup
      .string()
      .min(4, "Minimum 4 characters required")
      .max(20, "Maximum 20 characters allowed"),
    email: yup
      .string()
      .email("Please provide a valid email")
      .min(7, "Minimum 7 characters required")
      .max(30, "Maximum 30 characters allowed"),
    phone: yup.number().min(10, "Please provide a valid phone number"),
    password: yup
      .string()
      .min(8, "Minimum 8 characters required")
      .max(16, "Maximum 16 characters allowed"),
  };
  const formik = useFormik({
    initialValues: {
      brand: product.brand,
      style: product.style,
    },
    validationSchema: yup.object(YupValidationObject),
    onSubmit: handleSubmit,
  });
  // Form submit function
  async function handleSubmit() {
    try {
      await ProductController.createProduct(
        formik.values.brand,
        formik.values.style,
        selectedCategory?.name!,
        selectedSubCategory!
      );

      router.push("/products");
    } catch (error) {
      console.error(error);
    }
  }

  // Category logic state
  const [selectedCategory, setSelectdeCategory] = useState<Category | null>(
    null
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
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

  useEffect(() => {
    const category = findCategoryFromValue(product.category);
    if (!category) return;
    setSelectdeCategory(category);

    const subCategory = findSubCategoryFromValue(
      category.value,
      product.subCategory
    );
    if (!subCategory) return;
    setSelectedSubCategory(subCategory.value);
  }, []);

  return (
    <section className={styles.parent}>
      <form onSubmit={formik.handleSubmit}>
        <h4>Please fill the form below.</h4>
        <InputField
          label="Barand"
          name="brand"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand}
        />
        <InputField
          label="Style"
          name="style"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.style}
        />

        <SelectInputField
          label="Category"
          name="category"
          options={categories?.map((cat) => {
            return {
              name: cat.name,
              value: cat.value,
            };
          })}
          onChangeHandler={findAndSetSelectedCategory}
          required={true}
        />

        {selectedCategory && (
          <SelectInputField
            label="Sub Category"
            name="subCategory"
            options={makeSubcategoryItems(selectedCategory)}
            required={true}
            onChangeHandler={(e: ChangeEvent<HTMLSelectElement>) => {
              setSelectedSubCategory(e.target.value);
            }}
          />
        )}
        <button className="primary-button" type="submit">
          Add
        </button>
      </form>
    </section>
  );
};
