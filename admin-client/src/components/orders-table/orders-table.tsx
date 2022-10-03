import { useState, useEffect } from "react";
import Link from "next/link";

import { axios } from "utils";

import styles from "./orders-table.module.scss";
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

type OrderMin = {
  _id: string;
  user: {
    _id: string;
    firstName: string;
    lastName: String;
    email: string;
  };
  adress: {
    country: string;
    state: string;
    city: string;
    pin: string;
  };
  createdAt: string;
  status: "PENDING" | "ACCEPTED" | "DISPATCHED" | "ON-TRANSIT" | "DELIVERED";
};

export const OrdersTable = () => {
  const [orders, setOrders] = useState<OrderMin[]>([]);

  //   useEffect(() => {
  //     fetchManagers();
  //   });

  //   async function fetchManagers() {
  //     axios
  //       .get("/admin")
  //       .then((res) => {
  //         const managers = res.data.map((manager: Manager) => {
  //           const { _id, firstName, lastName, email, phone, role } = manager;
  //           return {
  //             _id,
  //             firstName,
  //             lastName,
  //             email,
  //             phone,
  //             role,
  //           };
  //         });
  //         setManagers(managers);
  //       })
  //       .catch((e) => console.log(e.response));
  //   }
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
            { name: "ID", prop: "firstName" },
            { name: "Name", prop: "lastName" },
            { name: "Email", prop: "email" },
            { name: "Recieved Date", prop: "phone" },
            { name: "PIN", prop: "role" },
            { name: "STATUS", prop: "status" },
          ]}
          error={"Not FOund"}
          data={orders}
          keyProp="_id"
        />
      </div>
    </div>
  );
};
