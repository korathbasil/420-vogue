import Link from "next/link";
import styles from "./product-details.module.scss";

export const VariantCard = () => {
  return (
    <div className={styles.variantCard}>
      <div>
        <table>
          <tr>
            <td>Color</td>
            <td>Red</td>
          </tr>
          <tr>
            <td>Color Code</td>
            <td>F33445</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>1900</td>
          </tr>
        </table>
        <div className={styles.actions}>
          <Link href="/products/123/variants/123/edit">
            <a className="primary-button">Edit</a>
          </Link>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className={styles.compoundInput}>
        <div>
          <InputField label="Color" name="color" />
        </div>
        <div>
          <InputField label="Color Code" name="colorCode" />
        </div>
      </div>
      <div className={styles.compoundInput}>
        <div>
          <InputField label="Price" name="price" />
        </div>
        <div className={styles.actions}>
          <button>Add more variants</button>
        </div>
      </div> */
}
