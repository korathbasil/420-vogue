import Link from "next/link";

import styles from "./product-card.module.scss";

export const ProductCard = () => {
  return (
    <Link href={"/product"}>
      <div className={styles.card}>
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
      </div>
    </Link>
  );
};
