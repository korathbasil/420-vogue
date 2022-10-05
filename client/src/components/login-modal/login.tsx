import { Dispatch, FC, SetStateAction } from "react";
import { useFormik } from "formik";
import { UsersController } from "lib/controller";
import { useUserStore } from "store";

import { LogoText } from "components";

interface LoginProps {
  switcher: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
  minimal?: boolean;
}

export const Login: FC<LoginProps> = ({
  switcher,
  closeModal,
  minimal = false,
}) => {
  const setUser = useUserStore((state) => state.setUser);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
  });

  async function submitHandler() {
    try {
      const user = await UsersController.loginUser(
        formik.values.email,
        formik.values.password
      );

      setUser({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
      });

      closeModal();
    } catch (e) {}
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      {!minimal && <LogoText />}
      {!minimal && <h3>Login to your account.</h3>}

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
          Don&apos;t have an account?
          <span onClick={() => switcher(false)}>SIGNUP</span>
        </p>
      </div>
    </form>
  );
};
