import { FC, useEffect, useState } from "react";
import { Manager } from "lib/interfaces";

import styles from "./manager-details.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import { State } from "state/store";

interface ManagerDetailsProps {
  manager: Manager;
  ownProfile?: boolean;
}

export const ManagerDetails: FC<ManagerDetailsProps> = ({ manager }) => {
  const [ownProfile, setOwnProfile] = useState(false);

  const user = useSelector((st: State) => st.auth.user);

  useEffect(() => {
    if (!user) return;

    setOwnProfile(user._id === manager._id);
  });
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <table>
          <tr>
            <td className={styles.prop}>Id</td>
            <td>{manager._id}</td>
          </tr>
          <tr>
            <td className={styles.prop}>First Name</td>
            <td>{manager.firstname}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Last Name</td>
            <td>{manager.lastname}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Email</td>
            <td>{manager.email}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Phone</td>
            <td>{manager.phone}</td>
          </tr>
          <tr>
            <td className={styles.prop}>
              {manager.role === "ADMIN" ? "Manager" : "Super Admin"}
            </td>
            <td>{manager.role}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Created At</td>
            <td>{manager.createdAt}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Updated At</td>
            <td>{manager.updatedAt}</td>
          </tr>
        </table>
        <div className={styles.actions}>
          {user && user.role === "SUPERADMIN" && (
            <button className={styles.dangerButton}>Delete</button>
          )}
          {ownProfile && (
            <Link href="/profile/edit">
              <button>Edit</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
