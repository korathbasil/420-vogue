import { NextPage } from "next";

import styles from "./product.module.scss";
import { ProductCarousel, ProductDetails } from "components";

const ProductPage: NextPage = () => {
  return (
    <section className={styles.parent}>
      <ProductCarousel />
      <ProductDetails />
    </section>
  );
};

export default ProductPage;
