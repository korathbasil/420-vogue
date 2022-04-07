import { NextPage } from "next";

import styles from "./product.module.scss";
import { ProductCarousel } from "components";

const ProductPage: NextPage = () => {
  return (
    <section className={styles.parent}>
      <ProductCarousel />
    </section>
  );
};

export default ProductPage;
