import { Dispatch, FC, FormEvent, SetStateAction } from "react";
import { useFormik } from "formik";
import { UsersController } from "lib/controller";

import styles from "./login-modal.module.scss";
import { LogoText } from "components";

interface SignupProps {
  switcher: Dispatch<SetStateAction<boolean>>;
}

export const Signup: FC<SignupProps> = ({ switcher }) => {
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
    <form onSubmit={formik.handleSubmit}>
      <LogoText />
      <h3>Create an account.</h3>

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
          <span onClick={() => switcher(true)}>LOGIN</span>
        </p>
      </div>
    </form>
  );
};
