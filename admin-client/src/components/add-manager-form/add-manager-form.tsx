import { useFormik } from "formik";
import * as yup from "yup";

import styles from "./add-manager-form.module.scss";

export const AddManagerForm = () => {
  const YupValidationObject = {
    firstName: yup
      .string()
      .min(1, "Please enter your First Name")
      .max(20, "Maximum 20 characters allowed"),
    lastName: yup
      .string()
      .min(1, "Please enter your First Name")
      .max(20, "Maximum 20 characters allowed"),
    email: yup
      .string()
      .email("Please provide a valid email")
      .min(7, "Minimum 7 characters required")
      .max(30, "Maximum 30 characters allowed"),
    phone: yup
      .number()
      .min(10, "Please provide a valid phone number")
      .max(10, "Please provide a valid phone number"),
    password: yup
      .string()
      .min(8, "Minimum 8 characters required")
      .max(16, "Maximum 16 characters allowed"),
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: yup.object(YupValidationObject),
    onSubmit: () => {},
  });
  return (
    <div className={styles.AddManager}>
      <h3>Please fill the form below.</h3>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          required
        />
        <div className={styles.err}>
          {formik.touched.firstName && formik.errors.firstName && (
            <p>{formik.errors.firstName}</p>
          )}
        </div>

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          required
        />
        <div className={styles.err}>
          {formik.touched.lastName && formik.errors.lastName && (
            <p>{formik.errors.lastName}</p>
          )}
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        />
        <div className={styles.err}>
          {formik.touched.email && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>

        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          pattern="[0-9]+"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        <div className={styles.err}>
          {formik.touched.phone && formik.errors.phone && (
            <p>{formik.errors.phone}</p>
          )}
        </div>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
        />
        <div className={styles.err}>
          {formik.touched.password && formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>

        <button type="submit">Add Manager</button>
      </form>
    </div>
  );
};
