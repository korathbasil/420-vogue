import { useState, useEffect } from "react";
import Link from "next/link";

import { axios } from "utils";

import styles from "./managers-table.module.scss";
import { CustomTable } from "../custom-table/custom-table";

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

type Manager = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
};

export const ManagersTable = () => {
  const [managers, setManagers] = useState<Manager[]>([]);

  useEffect(() => {
    fetchManagers();
  });

  async function fetchManagers() {
    axios
      .get("/admin")
      .then((res) => {
        const managers = res.data.map((manager: Manager) => {
          const { _id, firstName, lastName, email, phone, role } = manager;
          return {
            _id,
            firstName,
            lastName,
            email,
            phone,
            role,
          };
        });
        setManagers(managers);
      })
      .catch((e) => console.log(e.response));
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
            { name: "First Name", prop: "firstName" },
            { name: "Last Name", prop: "lastName" },
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
