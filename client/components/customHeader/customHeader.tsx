import { FC } from "react";
import Link from "next/link";

import styles from "./customHeader.module.scss";
import { BackArrow } from "assets/icons";

type LinkType = {
  url: string;
  icon: string;
};

interface CustomHeaderProps {
  links: LinkType[];
}

export const CustomHeader: FC<CustomHeaderProps> = ({ links }) => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.linkWrapper}>
              <BackArrow />
            </div>
          </div>
          <div className={styles.right}>
            {links.map((link) => (
              <div className={styles.linkWrapper}>
                <Link href={link.url}>
                  <link.icon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
