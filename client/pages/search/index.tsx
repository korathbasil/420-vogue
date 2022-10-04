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
      <SearchResult products={products} />
    </main>
  );
};

export default SearchPage;
