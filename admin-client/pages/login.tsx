import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/login.module.scss";

const LoginPage: NextPage & {
  disablePrimaryLayout: boolean;
} = () => {
  const [emailErr, setEmailErr] = useState<string>("");
  const [passwordErr, setPAsswordErr] = useState<string>("");
  return (
    <section className={styles.parent}>
      <div className={styles.contents}>
        <div className={styles.left}>
          <h1>
            420VOGUE<span>.</span>
          </h1>
          <h3>
            Welcome to <span>M-Panel</span>
          </h3>
          <p>Please login to continue.</p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <div className={styles.err}>{emailErr && <p>{emailErr}</p>}</div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <div className={styles.err}>
              {passwordErr && <p>{passwordErr}</p>}
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className={styles.right}>
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
