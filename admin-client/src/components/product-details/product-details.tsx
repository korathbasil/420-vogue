import Link from "next/link";
import styles from "./product-details.module.scss";
import { VariantCard } from "./variant-card";

export const ProductDetails = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <table>
          <tr>
            <td className={styles.prop}>Id</td>
            <td>64973492834928</td>
          </tr>
          <tr>
            <td className={styles.prop}>Brand</td>
            <td>Apple</td>
          </tr>
          <tr>
            <td className={styles.prop}>Style</td>
            <td>Series 8</td>
          </tr>
          <tr>
            <td className={styles.prop}>Category</td>
            <td>Wearables</td>
          </tr>
          <tr>
            <td className={styles.prop}>Sub Category</td>
            <td>Smart wathces</td>
          </tr>
          <tr>
            <td className={styles.prop}>Status</td>
            <td>DISABLED</td>
          </tr>
        </table>
      </div>
      <div className={styles.variants}>
        <h4>Variants</h4>
        <div className={styles.actions}>
          <p>No of variants : 0</p>
          <Link href={"/products/123/variants/add"}>
            <a className="primary-button">Add Variant</a>
          </Link>
        </div>
        <div className={styles.items}>
          <VariantCard />
        </div>
      </div>
    </div>
  );
};
