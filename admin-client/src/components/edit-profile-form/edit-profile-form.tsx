import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";

import styles from "./edit-profile-form.module.scss";
import { InputField as TextInput } from "components/controls";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { State } from "state/store";
import { ManagersController } from "lib/controllers";

interface EditProfileFormProps {
  modalOpener: () => void;
}

export const EditProfileForm: FC<EditProfileFormProps> = ({ modalOpener }) => {
  const router = useRouter();
  const user = useSelector((state: State) => state.auth.user);

  const { data: manager } = useQuery([`managers/${user?._id}`], async () => {
    if (!user) return;

    const manager = await ManagersController.getManagerById(user._id);
    return {
      _id: manager._id,
      firstname: manager.firstname,
      lastname: manager.lastname,
      phone: manager.phone,
    };
  });

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
      firstname: manager?.firstname,
      lastname: manager?.lastname,
      phone: manager?.phone,
    },
    validationSchema: yup.object(YupValidationObject),
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (!manager) return;
    formik.setValues({
      firstname: manager.firstname,
      lastname: manager.lastname,
      phone: manager.phone,
    });
  }, [manager]);

  async function handleSubmit() {
    if (!user) return;
    if (!manager) return;

    const updateObject: {
      firstname?: string;
      lastname?: string;
      phone?: string;
    } = {};

    if (manager.firstname !== formik.values.firstname)
      updateObject.firstname = formik.values.firstname;
    if (manager.lastname !== formik.values.lastname)
      updateObject.lastname = formik.values.lastname;
    if (manager.phone !== formik.values.phone)
      updateObject.phone = formik.values.phone;

    try {
      await ManagersController.updateManager(user._id, updateObject);
      router.replace("/profile");
    } catch (error) {
      console.log(error);
    }
  }
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
              Update
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
