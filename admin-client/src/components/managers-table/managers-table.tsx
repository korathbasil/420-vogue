import { useState, useEffect } from "react";
import Link from "next/link";
import { Manager } from "lib/interfaces";

import styles from "./managers-table.module.scss";
import { CustomTable } from "../custom-table/custom-table";
import { ManagersController } from "lib/controllers";

const data = [
  {
    name: "James",
    age: "21",
  },
  {
    name: "Raphel",
    age: "33",
  },
];

export const ManagersTable = () => {
  const [managers, setManagers] = useState<Manager[]>([]);

  useEffect(() => {
    fetchManagers();
  });

  async function fetchManagers() {
    const managers = await ManagersController.getAllManagers();
    setManagers(managers);
  }
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.actions}>
          <Link href={"/managers/add"}>
            <a>Add Manager</a>
          </Link>
        </div>
      </div>
      <div className="spacer-X"></div>
      <div className={styles.table}>
        <CustomTable
          columns={[
            { name: "First Name", prop: "firstname" },
            { name: "Last Name", prop: "lastname" },
            { name: "Email", prop: "email" },
            { name: "Phone", prop: "phone" },
            { name: "Role", prop: "role" },
          ]}
          data={managers}
          errMsg="No managers added"
        />
      </div>
    </div>
  );
};
