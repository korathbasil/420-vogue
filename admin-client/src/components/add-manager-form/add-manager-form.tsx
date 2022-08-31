import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import { ManagersController } from "lib/controllers";

import styles from "./add-manager-form.module.scss";

export const AddManagerForm = () => {
  const router = useRouter();
  const YupValidationObject = {
    firstname: yup
      .string()
      .min(1, "Please enter your First Name")
      .max(20, "Maximum 20 characters allowed"),
    lastname: yup
      .string()
      .min(1, "Please enter your First Name")
      .max(20, "Maximum 20 characters allowed"),
    email: yup
      .string()
      .email("Please provide a valid email")
      .min(7, "Minimum 7 characters required")
      .max(30, "Maximum 30 characters allowed"),
    phone: yup.number().min(10, "Please provide a valid phone number"),
    password: yup
      .string()
      .min(8, "Minimum 8 characters required")
      .max(16, "Maximum 16 characters allowed"),
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: yup.object(YupValidationObject),
    onSubmit: handleSubmit,
  });

  async function handleSubmit() {
    try {
      const { firstname, lastname, email, phone, password } = formik.values;
      await ManagersController.createManager(
        firstname,
        lastname,
        email,
        phone,
        password
      );
      router.push("/managers");
    } catch (error: any) {
      console.log(error.messages);
    }
  }

  return (
    <div className={styles.AddManager}>
      <h3>Please fill the form below.</h3>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
          required
        />
        <div className={styles.err}>
          {formik.touched.firstname && formik.errors.firstname && (
            <p>{formik.errors.firstname}</p>
          )}
        </div>

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
          required
        />
        <div className={styles.err}>
          {formik.touched.lastname && formik.errors.lastname && (
            <p>{formik.errors.lastname}</p>
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
          type="text"
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
