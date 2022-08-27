import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { axios } from "utils";

import styles from "./product.module.scss";
import { ProductCarousel, ProductDetails, ProductActions } from "components";
import { Product, ProductVariant } from "lib/interfaces";

const ProductPage: NextPage = () => {
  const router = useRouter();

  const [product, setProdcut] = useState<Product | null>(null);
  const [variants, setVariants] = useState<ProductVariant[]>([]);

  async function fetchProductDetails() {
    const { id: productId } = router.query;
    axios
      .get(`/products/${productId}`)
      .then((result) => {
        const product = {
          _id: result.data.id,
          brandName: result.data.brandName,
          styleName: result.data.styleName,
          category: result.data.category,
          subCategory: result.data.subCategory,
        };

        const { data } = result;

        const variants = data.variants;

        // const variant = {
        //   color: data.variants[0].color,
        //   colorCode: data.variants[0].colorCode,
        //   images: data.variants[0].images,
        //   price: data.variants[0].price,
        //   stock: [],
        // };

        setVariants(variants);
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
    <section className="container">
      {product && (
        <div className={styles.parent}>
          <ProductCarousel images={variants[0].images} />
          <ProductDetails product={product} variant={variants[0]} />
        </div>
      )}
      <ProductActions />
    </section>
  );
};

export default ProductPage;
