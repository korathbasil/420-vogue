import { useRouter } from "next/router";

import styles from "./product-carousel.module.scss";
import { BackArrow, HeartOutlined } from "assets/icons";
import { useEffect, useState } from "react";

export const ProductCarousel = () => {
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
        <div>
          <BackArrow onClickAction={router.back} size="25px" />
        </div>

        <div>
          <div className={styles.iconWrapper}>
            <HeartOutlined />
          </div>
        </div>
      </header>
      <div id="product-carousel" className={styles.carousel}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg"
          alt=""
        />
      </div>
      <div id="indicator" className={styles.indicator}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
