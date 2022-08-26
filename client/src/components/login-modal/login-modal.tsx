import { FC, useCallback, useState } from "react";

import styles from "./login-modal.module.scss";
import { Google, Facebook, Close } from "assets/icons";
import { Login } from "./login";
import { Signup } from "./signup";

interface LoginModalProps {
  closeModal: () => void;
  minimal?: boolean;
}

export const LoginModal: FC<LoginModalProps> = ({
  closeModal,
  minimal = false,
}) => {
  const [showLogin, setShowLogin] = useState(true);

  const loginSignupSwitcher = useCallback(setShowLogin, []);

  return (
    <section
      style={{
        maxWidth: minimal ? "900px" : "600px",
        padding: minimal ? "0" : "2rem",
      }}
      className={styles.login}
    >
      {!minimal && (
        <div onClick={closeModal} className={styles.close}>
          <Close fill="var(--clr-grey-text)" />
        </div>
      )}
      {showLogin && (
        <Login
          switcher={loginSignupSwitcher}
          closeModal={closeModal}
          minimal={minimal}
        />
      )}
      {!showLogin && (
        <Signup switcher={loginSignupSwitcher} minimal={minimal} />
      )}
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
