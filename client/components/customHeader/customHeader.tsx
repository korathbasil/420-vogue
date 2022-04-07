import { FC } from "react";
import Link from "next/link";

import styles from "./customHeader.module.scss";
import { BackArrow } from "assets/icons";

type LinkType = {
  url: string;
  Icon: FC;
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
            {links.map(({ url, Icon }) => (
              <div key={url} className={styles.linkWrapper}>
                <Link href={url}>
                  <Icon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
