import { useRouter } from "next/router";

import styles from "./product-carousel.module.scss";
import { BackArrow, HeartOutlined } from "assets/icons";

export const ProductCarousel = () => {
  const router = useRouter();

  return (
    <div className={styles.parent}>
      <header className={styles.header}>
        <div>
          <BackArrow onClickAction={router.back} size="25px" />
        </div>

        <div>
          <div className={styles.iconWrapper}>
            <HeartOutlined />
          </div>
        </div>
      </header>
      <div className={styles.carousel}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
