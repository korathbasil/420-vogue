import { useEffect } from "react";
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

export const ManagersTable = () => {
  useEffect(() => {
    fetchManagers();
  });

  async function fetchManagers() {
    axios
      .get("/admin")
      .then((res) => console.log(res.data))
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
      <CustomTable
        columns={[
          { name: "Name", prop: "name" },
          { name: "Age", prop: "age" },
        ]}
        data={data}
      />
    </div>
  );
};
