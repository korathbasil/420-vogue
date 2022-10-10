import { FC, useState } from "react";
import { useUserStore } from "store";
import { UsersController } from "lib/controller";
import { useFormik } from "formik";

import styles from "./mini-login.module.scss";

export const MiniLogin = () => {
  const [opened, setOpened] = useState(1);

  function switcher(n: number) {
    setOpened(n);
  }

  return (
    <div className={styles.login}>
      {opened === 1 && <Login switcher={switcher} />}
      {opened === 2 && <Signup switcher={switcher} />}
    </div>
  );
};

interface LoginProps {
  switcher: (n: number) => void;
}

const Login: FC<LoginProps> = ({ switcher }) => {
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
    } catch (e) {}
  }
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
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
          <span onClick={() => switcher(2)}>SIGNUP</span>
        </p>
      </div>
    </form>
  );
};

interface SignupProps {
  switcher: (n: number) => void;
}

const Signup: FC<SignupProps> = ({ switcher }) => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
  });

  function submitHandler() {
    UsersController.signupUser(
      formik.values.firstname,
      formik.values.lastname,
      formik.values.email,
      formik.values.password
    );
  }
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.names}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
        </div>
      </div>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="joe@email.com"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <div>
        <button type="submit">Signup</button>
        <p>
          Already have an account?
          <span onClick={() => switcher(1)}>LOGIN</span>
        </p>
      </div>
    </form>
  );
};
