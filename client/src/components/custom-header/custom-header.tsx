import { useRouter } from "next/router";

import styles from "./custom-header.module.scss";
import { LogoText } from "components";
import { BackArrow } from "assets/icons";

export const CHeader = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.child}>
          <div className={styles.left}>
            <BackArrow onClickAction={router.back} size="25px" />
            <LogoText />
          </div>
        </div>
      </div>
    </header>
  );
};
