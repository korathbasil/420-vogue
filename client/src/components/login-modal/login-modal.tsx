import { FC, useCallback, useState } from "react";
import { GOOGLE_OAUTH_CLIENT_LIBRARY_URL } from "utils";

import styles from "./login-modal.module.scss";
import { Google, Facebook, Close } from "assets/icons";
import { Login } from "./login";
import { Signup } from "./signup";
import { UsersController } from "lib/controller";

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

  async function googleAuthHandler() {
    const googleButton = document.getElementById(
      "google-login-button-wrapper"
    ) as HTMLDivElement;

    googleButton.focus();
    console.log("Hit");
  }

  return (
    <section className="login-wrapper">
      <div className={styles.login}>
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
          <div onClick={googleAuthHandler} className={styles.social}>
            <Google size="20px" />
            <h4>Google</h4>
          </div>
          <div className={styles.social}>
            <Facebook size="20px" />
            <h4>Facebook</h4>
          </div>
        </div>
        <style>
          {`
          @media only screen and (min-width: 480px) {
            .login-warpper {
              padding: ${minimal ? "0" : "1rem"};
            }
          }

          .login-wrapper {
            max-width: ${minimal ? "900px" : "600px"};
            padding: ${minimal ? "0" : "2rem"};
            width: 100%;
            background-color: var(--clr-white);
            border-radius: 7px;
            position: relative;
          }
        `}
        </style>
      </div>
    </section>
  );
};
