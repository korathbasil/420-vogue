import { useState } from "react";
import Link from "next/link";
import { categories } from "sys";

import styles from "./categories.module.scss";

export const Categories = () => {
  const [activeMenu, setACtiveMenu] = useState("");

  function handleMenuClick(v: string) {
    if (activeMenu === v) setACtiveMenu("");
    else setACtiveMenu(v);
  }

  return (
    <section className="container page-start">
      <div className={styles.parent}>
        <h4>Choose category</h4>
        <div className={styles.cats}>
          {categories.map((c) => {
            return (
              <div>
                <h5 onClick={() => handleMenuClick(c.value)}>{c.name}</h5>

                {activeMenu === c.value &&
                  c.subCategories.map((sc) => {
                    return (
                      <Link href={`/categories/${sc.value}`}>
                        <a>
                          <p>{sc.name}</p>
                        </a>
                      </Link>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
