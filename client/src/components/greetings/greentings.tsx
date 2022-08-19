import Link from "next/link";

import { LogoText } from "components/logo-text/logo-text";
import styles from "./greentings.module.scss";

export const Greetings = () => {
  return (
    <div className="container">
      <div className={styles.greetings}>
        <div>
          <h4>Hey,</h4>
          <div>
            <h4>Welcome to</h4>
            <LogoText fontSize="18px" />
          </div>
        </div>
        <div>
          <Link href="/categories">
            <button>Go to Categories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
