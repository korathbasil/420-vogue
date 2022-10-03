import { useEffect, useState } from "react";
import { Product } from "lib/interfaces";

import styles from "./featured-products.module.scss";
import { ProductCard } from "../product-card/product-card";
import { ProductController } from "lib/controller";
import { useQuery } from "@tanstack/react-query";

export const FeaturedProducts = () => {
  const { data: products } = useQuery(["products"], () => {
    return ProductController.getProducts();
  });

  return (
    <section className="container">
      <div className={styles.parent}>
        <h4>Featured Products</h4>
        <div className={styles.products}>
          {products?.map(
            (product) =>
              product.variants.length > 0 && <ProductCard product={product} />
          )}
        </div>
      </div>
    </section>
  );
};
