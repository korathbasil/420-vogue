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
import { useQuery } from "@tanstack/react-query";

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { id: productId } = router.query;
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);

  const { data: product } = useQuery([`products/${productId}`], () => {
    return ProductController.getProductById(productId as string);
  });

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      const inStockSize = product.variants[0].stock.find((s) => {
        if (s.quantity > 0) {
          return s;
        }
      });

      if (inStockSize) setSelectedSize(inStockSize.sizeName);
      else setSelectedSize(product.variants[0].stock[0].sizeName);
    }
  }, [productId, product]);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const variantSelector = useCallback(
    (v: ProductVariant) => {
      setSelectedVariant(v);
    },
    [product?.variants]
  );
  const sizeSelector = useCallback(
    (size: string) => {
      setSelectedSize(size);
    },
    [selectedVariant]
  );

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
            variantSelector={variantSelector}
            selectedSize={selectedSize}
            sizeSelector={sizeSelector}
            closeModal={() => setIsVariantModalOpen(false)}
          />
        </Modal>
      )}
    </section>
  );
};

export default ProductPage;
