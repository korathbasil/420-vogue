import { Dispatch, FC, SetStateAction } from "react";
import { ProductVariant } from "lib/interfaces";

import styles from "./variant-modal.module.scss";

interface VariantModalProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant | null;
  selector: Dispatch<SetStateAction<ProductVariant | null>>;
  closeModal: () => void;
}

export const VariantModal: FC<VariantModalProps> = ({
  variants,
  selectedVariant,
  selector,
  closeModal,
}) => {
  return (
    <div className={styles.modal}>
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
              onClick={() => selector(v)}
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
          <div className={styles.size}>
            <p>42EU</p>
          </div>
          <div className={styles.size}>
            <p>44EU</p>
          </div>
          <div className={styles.size}>
            <p>36US</p>
          </div>
        </div>
      </form>
    </div>
  );
};
