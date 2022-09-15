import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ProductController } from "lib/controller";

import styles from "./product.module.scss";
import {
  ProductCarousel,
  ProductDetails,
  ProductActions,
  Modal,
  VariantModal,
} from "components";
import { Product, ProductVariant } from "lib/interfaces";

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { id: productId } = router.query;

  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);

  const [product, setProdcut] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );
  const [selectedSize, setSelectedSize] = useState(0);

  const variantSelector = useCallback(setSelectedVariant, [product?.variants]);

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  async function fetchProductDetails() {
    if (productId == undefined || Array.isArray(productId)) return;

    try {
      const product = await ProductController.getProductById(productId);
      setProdcut(product);
      setSelectedVariant(product.variants[0]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="container">
      {product && (
        <div className={styles.parent}>
          <ProductCarousel images={product.variants[0].images} />
          <ProductDetails
            product={product}
            variant={selectedVariant ? selectedVariant : product.variants[0]}
          />
        </div>
      )}
      {product && (
        <div
          onClick={() => setIsVariantModalOpen(true)}
          className={styles.selector}
        >
          <p>Color & Size</p>
        </div>
      )}
      {product && (
        <ProductActions
          product={product}
          variant={selectedVariant ? selectedVariant : product.variants[0]}
        />
      )}
      {product && isVariantModalOpen && (
        <Modal clickHandler={() => setIsVariantModalOpen(false)}>
          <VariantModal
            variants={product.variants}
            selectedVariant={selectedVariant}
            selector={variantSelector}
            closeModal={() => setIsVariantModalOpen(false)}
          />
        </Modal>
      )}
    </section>
  );
};

export default ProductPage;
