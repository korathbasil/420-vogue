import { FC } from "react";
import { Manager } from "lib/interfaces";

import styles from "./manager-details.module.scss";
import Link from "next/link";

interface ManagerDetailsProps {
  manager: Manager;
  ownProfile?: boolean;
}

export const ManagerDetails: FC<ManagerDetailsProps> = ({
  manager,
  ownProfile = false,
}) => {
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
            <td className={styles.prop}>Role</td>
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
          {/* <Link href={`/products/${product._id}/edit`}>
            <a className="primary-button-link">Edit</a>
          </Link> */}
          {!ownProfile && (
            <button className={styles.dangerButton}>Delete</button>
          )}
          <Link href="/profile/edit">
            {ownProfile && <button>Edit</button>}
          </Link>
        </div>
      </div>
    </div>
  );
};
