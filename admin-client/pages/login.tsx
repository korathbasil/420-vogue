import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/login.module.scss";

const LoginPage: NextPage & {
  disablePrimaryLayout: boolean;
} = () => {
  return (
    <section className={styles.parent}>
      <div className={styles.contents}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h1>420VOGUE</h1>
          <h2>M-Panel</h2>

          <div className={styles.images}>
            <div>
              <Image
                src={"/images/co-working.png"}
                width={200}
                height={200}
                objectFit={"contain"}
              />
            </div>
            <div>
              <Image
                src={"/images/good-team.png"}
                width={200}
                height={200}
                objectFit={"contain"}
              />
            </div>
            <div>
              <Image
                src={"/images/organizer.png"}
                width={200}
                height={200}
                objectFit={"contain"}
              />
            </div>
            <div>
              <Image
                src={"/images/product-management.png"}
                width={200}
                height={200}
                objectFit={"contain"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LoginPage.disablePrimaryLayout = true;

export default LoginPage;
