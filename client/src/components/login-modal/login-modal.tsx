import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";

import styles from "./login-modal.module.scss";
import { Google, Facebook, Close } from "assets/icons";
import { Login } from "./login";
import { Signup } from "./signup";

interface LoginModalProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal: FC<LoginModalProps> = ({ closeModal }) => {
  const [showLogin, setShowLogin] = useState(true);

  const loginSignupSwitcher = useCallback(setShowLogin, []);

  return (
    <section className={styles.login}>
      <div onClick={() => closeModal(false)} className={styles.close}>
        <Close fill="var(--clr-grey-text)" />
      </div>
      {showLogin && <Login switcher={loginSignupSwitcher} />}
      {!showLogin && <Signup switcher={loginSignupSwitcher} />}
      <hr />
      <div className={styles.socialLogin}>
        <div className={styles.social}>
          <Google size="20px" />
          <h4>Google</h4>
        </div>
        <div className={styles.social}>
          <Facebook size="20px" />
          <h4>Facebook</h4>
        </div>
      </div>
    </section>
  );
};
