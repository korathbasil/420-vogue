import styles from "./add-product-form.module.scss";
import { ProductPreview } from "components/product-preview/product-preview";

export const AddProductForm = () => {
  return (
    <section className={styles.addProduct}>
      <form>
        <h4>Please fill the form below.</h4>
        <FormInput label="Barand Name" name="brandName" />
        <FormInput label="Style Name" name="styleName" />

        <h5>Add base variant details.</h5>
        <div className={styles.compoundInput}>
          <div>
            <FormInput label="Color" name="color" />
          </div>
          <div>
            <FormInput label="Color Code" name="colorCode" />
          </div>
        </div>
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
