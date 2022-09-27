import { FC } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";

import styles from "./change-password-modal.module.scss";
import { InputField as TextInput } from "components/controls";
import { Close } from "assets/icons";
import { ManagersController } from "lib/controllers";

interface ChangePasswordModalProps {
  closeModal: () => void;
}

export const ChangePasswordModal: FC<ChangePasswordModalProps> = ({
  closeModal,
}) => {
  const router = useRouter();
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
    onSubmit: handleSubmit,
  });

  async function handleSubmit() {
    if (formik.values.new !== formik.values.new2) {
      formik.setErrors({
        new2: "Passwords mismatch",
      });
      return;
    }

    try {
      await ManagersController.ChangePassword(
        formik.values.old,
        formik.values.new
      );
      router.replace("/profile");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
      <form onSubmit={formik.handleSubmit}>
        <h3>Change your password.</h3>
        <TextInput
          label="Old Password"
          name="old"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.old}
          error={formik.errors.old}
          required={true}
        />
        <TextInput
          label="New Password"
          name="new"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.new}
          error={formik.errors.new}
          required={true}
        />
        <TextInput
          label="Retype New Password"
          name="new2"
          type="password"
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
      <div onClick={closeModal} className={styles.closeIcon}>
        <Close />
      </div>
    </div>
  );
};
