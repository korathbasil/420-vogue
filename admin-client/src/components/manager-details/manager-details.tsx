import { FC } from "react";
import { Manager } from "lib/interfaces";

import styles from "./manager-details.module.scss";

interface ManagerDetailsProps {
  manager: Manager;
}

export const ManagerDetails: FC<ManagerDetailsProps> = ({ manager }) => {
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
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};
