import Link from "next/link";
import styles from "./account-menu.module.scss";

export const AccountMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.list}>
          <Link href={"/account/addresses"}>
            <p>Addresses</p>
          </Link>
        </li>
        <hr />
        <li className={styles.list}>
          <Link href={"/account/social"}>
            <p>Social</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
