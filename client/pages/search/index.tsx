import { useState } from "react";
import { Product } from "lib/interfaces";

import { SearchHeader, SearchResults } from "components";

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const setProductsHandler = (products: Product[]) => {
    setProducts(products);
  };
  return (
    <main>
      <SearchHeader setProducts={setProductsHandler} />
      <SearchResults />
    </main>
  );
};

export default SearchPage;
