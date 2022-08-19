import { Dispatch, FC, SetStateAction, useState } from "react";

import styles from "./login-modal.module.scss";
import { LogoText } from "components";

interface SignupProps {
  switcher: Dispatch<SetStateAction<boolean>>;
}

export const Signup: FC<SignupProps> = ({ switcher }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <LogoText />
      <h3>Create an account.</h3>

      <div className={styles.names}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" />
        </div>
      </div>

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
