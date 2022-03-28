import { NextPage } from "next";

import styles from "./product.module.scss";

const ProductPage: NextPage = () => {
  return (
    <section className={styles.parent}>
      <div className={styles.header}>Go Back</div>
      <div className={styles.images}>
        <img
          src={
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
          }
        />
      </div>
      <div className={styles.actions}>
        <p>Add to Card</p>
      </div>
    </section>
  );
};

export default ProductPage;
