import { useEffect, useState } from "react";
import { NextPage } from "next";

import { axios } from "utils";

import styles from "./product.module.scss";
import { ProductCarousel, ProductDetails, ProductActions } from "components";
import { Product } from "types";

const ProductPage: NextPage = () => {
  const [product, setProdcut] = useState<Product | null>(null);
  const [variants, setVariants] = useState<Product[]>([]);

  async function fetchProductDetails() {
    axios
      .get("/products/62ddacacb44fe86c3753e11e")
      .then((result) => {
        const product = {
          _id: result.data.id,
          brandName: result.data.brandName,
          styleName: result.data.styleName,
          category: result.data.category,
          subCategory: result.data.subCategory,
        };

        setProdcut(product);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }

  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <section className={styles.parent}>
      <ProductCarousel />
      <ProductDetails product={product} />
      <ProductActions />
    </section>
  );
};

export default ProductPage;
