import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../../../styles/product-details-page.module.scss";
import { PageTitle, ProductDetails, ProductPreview } from "components";
import { Product } from "lib/interfaces";
import { ProductController } from "lib/controllers";

const ProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductDetails();
  }, [router.query]);

  async function getProductDetails() {
    const { id: productId } = router.query;
    if (!productId) return;

    try {
      if (!Array.isArray(productId)) {
        const product = await ProductController.getProductById(productId);
        setProduct(product);
      } else {
        router.replace("/products");
      }
    } catch (error) {
      router.replace("/products");
    }
  }
  return (
    <main>
      <PageTitle routes={["Products", "Details"]} />
      <div className="spacer-X"></div>
      <div className={styles.leftRightPane}>
        <div>{product && <ProductDetails product={product} />}</div>
        <div>
          <ProductPreview />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
