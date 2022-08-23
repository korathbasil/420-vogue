import { Dispatch, FC, SetStateAction } from "react";
import { useFormik } from "formik";
import { UsersController } from "lib/controller";

import { LogoText } from "components";

interface LoginProps {
  switcher: Dispatch<SetStateAction<boolean>>;
}

export const Login: FC<LoginProps> = ({ switcher }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
  });

  function submitHandler() {
    UsersController.loginUser(formik.values.email, formik.values.password);
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <LogoText />
      <h3>Login to your account.</h3>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="joe@email.com"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />

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
