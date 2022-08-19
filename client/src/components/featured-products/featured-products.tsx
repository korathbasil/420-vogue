import styles from "./featured-products.module.scss";
import { ProductCard } from "../product-card/product-card";

export const FeaturedProducts = () => {
  return (
    <section className="container">
      <div className={styles.parent}>
        <h4>Featured Products</h4>
        <div className={styles.products}>
          <ProductCard />
        </div>
      </div>
    </section>
  );
};
