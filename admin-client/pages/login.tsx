import type { NextPage } from "next";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";

import styles from "../styles/login.module.scss";
import { LogoText } from "components";

const LoginPage: NextPage & {
  disablePrimaryLayout: boolean;
} = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
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
