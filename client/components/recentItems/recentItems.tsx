import styles from "./recentItems.module.scss";
import { ProductCard } from "../productCard/productCard";

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
