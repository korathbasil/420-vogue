import { Dispatch, FC, SetStateAction } from "react";

import { LogoText } from "components";

interface LoginProps {
  switcher: Dispatch<SetStateAction<boolean>>;
}

export const Login: FC<LoginProps> = ({ switcher }) => {
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
