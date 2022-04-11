import type { NextPage } from "next";

import styles from "../styles/login.module.scss";

const LoginPage: NextPage & {
  disablePrimaryLayout: boolean;
} = () => {
  return <section className={styles.loginpage}>Login Page</section>;
};

LoginPage.disablePrimaryLayout = true;

export default LoginPage;
