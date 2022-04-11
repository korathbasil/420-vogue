import { ProductPreview } from "components/product-preview/product-preview";
import styles from "./add-product-form.module.scss";

export const AddProductForm = () => {
  return (
    <section className={styles.addProduct}>
      <form>HEll</form>
      <div className="spacer-Y"></div>
      <ProductPreview />
    </section>
  );
};
