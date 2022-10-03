import { Dispatch, FC, SetStateAction } from "react";
import { ProductVariant } from "lib/interfaces";

import styles from "./variant-modal.module.scss";

interface VariantModalProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant | null;
  variantSelector: (v: ProductVariant) => void;
  selectedSize: string | null;
  sizeSelector: (s: string) => void;
  closeModal: () => void;
}

export const VariantModal: FC<VariantModalProps> = ({
  variants,
  selectedVariant,
  variantSelector,
  selectedSize,
  sizeSelector,
  closeModal,
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
      <h4>Choose color and size</h4>
      <form className={styles.options}>
        <div className={styles.side}>
          <h6>Color</h6>
          {variants.map((v) => (
            <div
              key={v._id}
              style={{
                backgroundColor:
                  selectedVariant == v
                    ? "var(--clr-primary)"
                    : "var(--clr-white)",
                color:
                  selectedVariant == v
                    ? "var(--clr-white)"
                    : "var(--clr-primary)",
              }}
              onClick={() => variantSelector(v)}
              className={styles.color}
            >
              <div
                className={styles.colorCode}
                style={{
                  backgroundColor: "#" + v.colorCode,
                }}
              ></div>
              <p>{v.color}</p>
            </div>
          ))}
        </div>
        <div className={styles.side}>
          <h6>Size</h6>

          {selectedVariant?.stock.map((st) => {
            if (st.quantity > 0)
              return (
                <div
                  style={{
                    backgroundColor:
                      selectedSize == st.sizeName
                        ? "var(--clr-primary)"
                        : "var(--clr-white)",
                    color:
                      selectedSize == st.sizeName
                        ? "var(--clr-white)"
                        : "var(--clr-primary)",
                  }}
                  onClick={() => sizeSelector(st.sizeName)}
                  className={styles.size}
                >
                  <p>{st.sizeName.toUpperCase()}</p>
                </div>
              );
          })}
        </div>
      </form>
    </div>
  );
};
