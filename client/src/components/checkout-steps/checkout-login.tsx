import styles from "./checkout-steps.module.scss";
import { LoginModal } from "components";

export const CheckoutLogin = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div>
          <h3>1</h3>
        </div>
        <h3>LOGIN / SIGNUP</h3>
      </div>
      <div className={styles.body}>
        <LoginModal closeModal={() => {}} minimal={true} />
      </div>
    </div>
  );
};
