import { useFormik } from "formik";
import * as yup from "yup";

import styles from "./change-password-modal.module.scss";
import { InputField as TextInput } from "components/controls";

export const ChangePasswordModal = () => {
  const YupValidationObject = {
    old: yup
      .string()
      .min(8, "Minimum 8 characters required")
      .max(16, "Maximum 16 characters allowed"),
    new: yup
      .string()
      .min(8, "Minimum 8 characters required")
      .max(16, "Maximum 16 characters allowed"),
    new2: yup
      .string()
      .min(8, "Minimum 8 characters required")
      .max(16, "Maximum 16 characters allowed"),
  };

  const formik = useFormik({
    initialValues: {
      old: "",
      new: "",
      new2: "",
    },
    validationSchema: yup.object(YupValidationObject),
    onSubmit: () => {},
  });
  return (
    <div className={styles.modal}>
      <form>
        <h3>Change your password.</h3>
        <TextInput
          label="Old Password"
          name="old"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.old}
          error={formik.errors.old}
          required={true}
        />
        <TextInput
          label="New Password"
          name="new"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.new}
          error={formik.errors.new}
          required={true}
        />
        <TextInput
          label="Retype New Password"
          name="new2"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.new2}
          error={formik.errors.new2}
          required={true}
        />
        <div className={styles.actions}>
          <button className="primary-button">Submit</button>
        </div>
      </form>
    </div>
  );
};
