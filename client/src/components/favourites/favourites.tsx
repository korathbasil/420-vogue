import styles from "./favourites.module.scss";
import { ProductCard } from "components";

export const Favourite = () => {
  return (
    <div className={styles.fav}>
      <div className={styles.products}></div>
    </div>
  );
};
