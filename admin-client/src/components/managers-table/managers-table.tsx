import { useState, useEffect } from "react";
import Link from "next/link";
import { Manager } from "lib/interfaces";

import styles from "./managers-table.module.scss";
import { CustomTable } from "../custom-table/custom-table";
import { ManagersController } from "lib/controllers";
import { useQuery } from "@tanstack/react-query";

export const ManagersTable = () => {
  const { data: managers = [] } = useQuery(["managers"], async () => {
    return ManagersController.getAllManagers();
  });
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
          rowLink="/managers"
          linkProp="_id"
          keyProp="_id"
        />
      </div>
    </div>
  );
};
