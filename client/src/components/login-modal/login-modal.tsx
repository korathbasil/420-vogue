import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";

import styles from "./login-modal.module.scss";
import { LogoText } from "components";
import { Google, Facebook, Close } from "assets/icons";

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

interface CommonProps {
  switcher: Dispatch<SetStateAction<boolean>>;
}

const Login: FC<CommonProps> = ({ switcher }) => {
  return (
    <form>
      <LogoText />
      <h3>Login to your account.</h3>

      <label htmlFor="email">Email</label>
      <input type="email" placeholder="joe@email.com" id="email" name="email" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />

      <div>
        <button type="submit">Login</button>
        <p>
          Don't have an account?
          <span onClick={() => switcher(false)}>SIGNUP</span>
        </p>
      </div>
    </form>
  );
};

const Signup: FC<CommonProps> = ({ switcher }) => {
  return (
    <form>
      <LogoText />
      <h3>Create an account.</h3>

      <label htmlFor="email">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email</label>
      <input type="email" placeholder="joe@email.com" id="email" name="email" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />

      <div>
        <button type="submit">Signup</button>
        <p>
          Already have an account?
          <span onClick={() => switcher(true)}>LOGIN</span>
        </p>
      </div>
    </form>
  );
};
