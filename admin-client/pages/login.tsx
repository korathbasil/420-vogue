import type { NextPage } from "next";

import styles from "../styles/login.module.scss";

import ImageCoWorking from "assets/images/co-working.svg";
import imageGoodTeam from "assets/images/good-team.svg";
import imageOrganizer from "assets/images/organizer.svg";
import imageProductManagement from "assets/images/product-management.svg";

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
              <ImageCoWorking />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LoginPage.disablePrimaryLayout = true;

export default LoginPage;
