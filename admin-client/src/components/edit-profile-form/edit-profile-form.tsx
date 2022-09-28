import { FC, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import styles from "./edit-profile-form.module.scss";
import { InputField as TextInput } from "components/controls";

interface EditProfileFormProps {
  modalOpener: () => void;
}

export const EditProfileForm: FC<EditProfileFormProps> = ({ modalOpener }) => {
  const [data, setData] = useState<{
    firstname: string;
    lastname: string;
    email: string;
  } | null>(null);

  const YupValidationObject = {
    firstname: yup
      .string()
      .min(1, "Please enter your First Name")
      .max(20, "Maximum 20 characters allowed"),
    lastname: yup
      .string()
      .min(1, "Please enter your First Name")
      .max(20, "Maximum 20 characters allowed"),
    phone: yup.number().min(10, "Please provide a valid phone number"),
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
    },
    validationSchema: yup.object(YupValidationObject),
    onSubmit: () => {},
  });
  return (
    <div style={{ width: "600px" }} className="content-card">
      <div className={styles.parent}>
        <h3>Please fill the form below.</h3>
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            label="First Name"
            name="firstname"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstname}
            error={formik.errors.firstname}
            required={true}
          />

          <TextInput
            label="Last Name"
            name="lastname"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastname}
            error={formik.errors.lastname}
            required={true}
          />

          <TextInput
            label="Phone"
            name="phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.errors.phone}
            required={true}
          />

          <div className={styles.actions}>
            <button className="primary-button" type="submit">
              Add Manager
            </button>
            <div onClick={modalOpener} className="primary-button">
              Change Password
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
