import { useEffect, useState } from "react";
import { Product } from "lib/interfaces";

import styles from "./featured-products.module.scss";
import { ProductCard } from "../product-card/product-card";
import { ProductController } from "lib/controller";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadAllProducts();
  }, []);

  async function loadAllProducts() {
    try {
      const products = await ProductController.getProducts();
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }
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
