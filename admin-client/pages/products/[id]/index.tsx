import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../../../styles/product-details-page.module.scss";
import { PageTitle, ProductDetails, ProductPreview } from "components";
import { Product } from "lib/interfaces";
import { ProductController } from "lib/controllers";

const ProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [enabled, setEnabled] = useState(false);
  const setEnabledHandler = async () => {
    await ProductController.setProductStatus(product?._id, !enabled);
    setEnabled(!enabled);
  };

  useEffect(() => {
    getProductDetails();
  }, [router.query, enabled]);

  async function getProductDetails() {
    const { id: productId } = router.query;
    if (!productId || Array.isArray(productId)) return;

    try {
      const product = await ProductController.getProductById(productId);
      setProduct(product);
      setEnabled(product.isActive === "ENABLED" ? true : false);
    } catch (error) {
      router.replace("/products");
    }
  }
  return (
    <main>
      <PageTitle routes={["Products", "Details"]} />
      <div className="spacer-X"></div>
      <div className={styles.leftRightPane}>
        <div>
          {product && (
            <ProductDetails
              product={product}
              enabled={enabled}
              setEnabled={setEnabledHandler}
            />
          )}
        </div>
        <div>
          <ProductPreview />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
