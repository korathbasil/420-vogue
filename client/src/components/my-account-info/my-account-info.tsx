import styles from "./my-account-info.module.scss";
import { Edit } from "assets/icons";
import { useUserStore } from "store";
import { FC } from "react";

interface MyAccountInfoProps {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
}

export const MyAccountInfo: FC<MyAccountInfoProps> = ({
  firstname,
  lastname,
  email,
  phone,
}) => {
  return (
    <section className={styles.info}>
      <h2>
        {firstname} {lastname}
      </h2>
      <p>{email}</p>
      <p>{phone ? phone : "+91XXXXXXXXXX"}</p>

      <div className={styles.edit}>
        <Edit size="16px" fill="var(--clr-primary)" />
        <p>Edit</p>
      </div>
    </section>
  );
};
