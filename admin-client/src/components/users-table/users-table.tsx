import { useState } from "react";
import Link from "next/link";

import styles from "./users-table.module.scss";
import { CustomTable } from "../custom-table/custom-table";

type UsersMin = {
  _id: string;
  firstName: string;
  lastName: String;
  email: string;
};

export const UsersTable = () => {
  const [users, setUsers] = useState<UsersMin[]>([]);

  return (
    <div>
      {/* <div className={styles.top}>
        <div className={styles.actions}>
          <Link href={"/orders/add"}>
            <a>Add Manager</a>
          </Link>
        </div>
      </div> */}
      {/* <div className="spacer-X"></div> */}
      <div className={styles.table}>
        <CustomTable
          columns={[
            { name: "ID", prop: "_id" },
            { name: "First Name", prop: "firstName" },
            { name: "Last Name", prop: "lastName" },
            { name: "Email", prop: "email" },
          ]}
          data={users}
          errMsg="No users registred!"
        />
      </div>
    </div>
  );
};
