import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import styles from "./managers-table.module.scss";
import { CustomTable } from "../custom-table/custom-table";
import { ManagersController } from "lib/controllers";
import { State } from "state/store";

export const ManagersTable = () => {
  const user = useSelector((st: State) => st.auth.user);

  const {
    data: managers = [],
    isLoading,
    error,
  } = useQuery(["managers"], async () => {
    return ManagersController.getAllManagers();
  });
  return (
    <div>
      {user?.role === "SUPERADMIN" && (
        <div className={styles.top}>
          <div className={styles.actions}>
            <Link href={"/managers/add"}>
              <a>Add Manager</a>
            </Link>
          </div>
        </div>
      )}
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
          rowLink="/managers"
          linkProp="_id"
          keyProp="_id"
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
