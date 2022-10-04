import { FC } from "react";
import { Product } from "lib/interfaces";

import styles from "./search-result.module.scss";
import { ProductCard } from "components";

interface SearchResultProps {
  products: Product[];
}

export const SearchResult: FC<SearchResultProps> = ({ products }) => {
  return (
    <section className="container page-start">
      <div className={styles.parent}>
        <h4>
          {products.length} product{products.length > 1 ? "s" : ""} found.
        </h4>
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
