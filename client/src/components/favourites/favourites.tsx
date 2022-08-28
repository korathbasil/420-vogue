import styles from "./favourites.module.scss";
import { ProductCard } from "components";

export const Favourite = () => {
  return (
    <div className={styles.fav}>
      <div className={styles.products}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
