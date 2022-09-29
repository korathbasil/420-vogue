import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/login.module.scss";
import { LogoText } from "components";
import { ManagersController } from "lib/controllers";
import { useEffect } from "react";
import { State } from "state/store";

const LoginPage: NextPage & {
  disablePrimaryLayout: boolean;
} = () => {
  const router = useRouter();

  const user = useSelector((st: State) => st.auth.user);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Please provide a valid email")
        .min(7, "Email should be atleast 7 characters")
        .max(30, "Email can't be more than 30 characters"),
      password: yup
        .string()
        .min(8, "Password should be atleast 8 characters")
        .max(16, "Password can't be more than 16 characters"),
    }),
  });

  async function handleLogin() {
    try {
      const manager = await ManagersController.loginManager(
        formik.values.email,
        formik.values.password
      );

      dispatch({
        type: "auth/login",
        payload: {
          _id: manager._id,
          firstname: manager.firstname,
          lastname: manager.lastname,
          email: manager.email,
          role: manager.role,
        },
      });

      router.replace("/");
    } catch (error: any) {
      console.log(error.messages);
    }
  }

  async function authenticateCurrentUser() {
    try {
      const manager = await ManagersController.getLoggedInManager();
      if (!manager) return;

      const { _id, firstname, lastname, email, role } = manager;
      dispatch({
        type: "auth/login",
        payload: {
          _id,
          firstname,
          lastname,
          email,
          role,
        },
      });
    } catch (e: any) {
      dispatch({
        type: "user/set",
        payload: {
          user: null,
        },
      });

      router.push("/login");

      console.log(e.messages);
    }
  }

  useEffect(() => {
    if (user) {
      router.replace("/");
    } else {
      authenticateCurrentUser();
    }
  }, [user]);

  return (
    <section className={styles.parent}>
      <div className={styles.contents}>
        <div className={styles.left}>
          <LogoText fontSize="40px" />
          <h3>
            Welcome to <span>M-Panel</span>
          </h3>
          <p>Please login to continue.</p>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={styles.err}>
              {formik.touched.email && formik.errors.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={styles.err}>
              {formik.touched.email && formik.errors.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.images}>
            <div>
              <Image
                src={"/images/co-working.png"}
                width={200}
                height={200}
                objectFit={"contain"}
              />
            </div>
            <div>
              <Image
                src={"/images/good-team.png"}
                width={200}
                height={200}
                objectFit={"contain"}
              />
            </div>
            <div>
              <Image
                src={"/images/organizer.png"}
                width={200}
                height={200}
                objectFit={"contain"}
              />
            </div>
            <div>
              <Image
                src={"/images/product-management.png"}
                width={200}
                height={200}
                objectFit={"contain"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LoginPage.disablePrimaryLayout = true;

export default LoginPage;
