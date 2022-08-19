import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./customHeader.module.scss";
import { BackArrow } from "assets/icons";

type LinkType = {
  url: string;
  Icon: FC;
};

interface CustomHeaderProps {
  title?: string;
  links: LinkType[];
}

export const CustomHeader: FC<CustomHeaderProps> = ({ title, links }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.child}>
          <div className={styles.left}>
            <div
              onClick={() => {
                router.back();
              }}
              className={styles.linkWrapper}
            >
              <BackArrow />
            </div>
            {title && <h2>{title}</h2>}
          </div>
          <div className={styles.right}>
            {links.map(({ url, Icon }) => (
              <div key={url} className={styles.linkWrapper}>
                <Link href={url}>
                  <a>
                    <Icon />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
