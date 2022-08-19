import styles from "./recentItems.module.scss";
import { ProductCard } from "../product-card/product-card";

export const RecentItems = () => {
  return (
    <section className={styles.recentItems}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};
