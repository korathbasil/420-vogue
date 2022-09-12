import styles from "../../../styles/product-details-page.module.scss";
import { PageTitle, ProductDetails, ProductPreview } from "components";

const ProductPage = () => {
  return (
    <main>
      <PageTitle routes={["Products", "Details"]} />
      <div className="spacer-X"></div>
      <div className={styles.leftRightPane}>
        <div>
          <ProductDetails />
        </div>
        <div>
          <ProductPreview />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
