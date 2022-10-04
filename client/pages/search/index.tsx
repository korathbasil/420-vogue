import { useState } from "react";
import { Product } from "lib/interfaces";

import { SearchHeader, SearchResult } from "components";

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const setProductsHandler = (products: Product[]) => {
    setProducts(products);
  };
  return (
    <main>
      <SearchHeader setProducts={setProductsHandler} />
      <section className="container page-start">
        <SearchResult products={products} />
      </section>
    </main>
  );
};

export default SearchPage;
