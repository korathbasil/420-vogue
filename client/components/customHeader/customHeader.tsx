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
  links: LinkType[];
}

export const CustomHeader: FC<CustomHeaderProps> = ({ links }) => {
  const router = useRouter();

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div
              onClick={() => {
                router.back();
              }}
              className={styles.linkWrapper}
            >
              <BackArrow />
            </div>
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
