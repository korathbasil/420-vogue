import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "./product-carousel.module.scss";
import { BackArrow, HeartOutlined } from "assets/icons";

interface ProductCarouselProps {
  images: string[];
}

export const ProductCarousel: FC<ProductCarouselProps> = ({ images }) => {
  const router = useRouter();

  const [scrollStep, setScrollStep] = useState(0);

  useEffect(() => {
    const carousel = document.getElementById(
      "product-carousel"
    ) as HTMLDivElement;

    function scrollHandler(e: Event) {
      const _SCROLL_JUMP_ = 358;
      const scrollValue = carousel.scrollLeft;

      if (scrollValue % _SCROLL_JUMP_ === 0) {
        setScrollStep(scrollValue / _SCROLL_JUMP_);
      }
    }
    carousel.addEventListener("scroll", scrollHandler);

    styleSelectedIndicator();

    return () => {
      carousel.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollStep]);

  function styleSelectedIndicator() {
    const indicator = document.getElementById("indicator") as HTMLDivElement;

    const children = indicator.children;

    for (let i = 0; i < children.length; i++) {
      children[i].className = "";
    }

    const selectedChild = children[scrollStep];

    if (selectedChild) {
      selectedChild.className = "selected";
    }
  }

  return (
    <div className={styles.parent}>
      <header className={styles.header}>
        <div onClick={router.back}>
          <BackArrow size="30px" />
        </div>

        <div>
          <div className={styles.iconWrapper}>
            <HeartOutlined fill="var(--clr-pink)" />
          </div>
        </div>
      </header>
      <div id="product-carousel" className={styles.carousel}>
        {images?.map((image) => (
          <img src={image} key={image} />
        ))}
      </div>
      <div id="indicator" className={styles.indicator}>
        {images?.map((img) => (
          <div key={img}></div>
        ))}
      </div>
    </div>
  );
};
