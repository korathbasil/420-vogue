import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product } from "lib/interfaces";

import { CHeader, SearchResult } from "components";
import { ProductController } from "lib/controller";

const CategoriesQueryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, [router.query]);

  async function fetchProducts() {
    const { query } = router.query;
    const products = await ProductController.getProductsBySubCategory(
      query as string
    );
    setProducts(products);
  }
  return (
    <main>
      <CHeader />
      <div className="container page-start">
        <SearchResult products={products} />
      </div>
    </main>
  );
};

export default CategoriesQueryPage;
