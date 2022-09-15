import { Product } from "lib/interfaces";
import Link from "next/link";
import { FC } from "react";

import styles from "./product-card.module.scss";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product._id}`}>
      <div className={styles.card}>
        <img src={product.variants[0].images[0]} alt="" />
        <div className={styles.bottom}>
          <h4>{product.variants[0].price}</h4>
          <p>{product.style}</p>
        </div>
      </div>
    </Link>
  );
};
