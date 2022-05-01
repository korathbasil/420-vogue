import Link from "next/link";

import styles from "./products-table.module.scss";
import { CustomTable } from "../custom-table/custom-table";

export const ProductsTable = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.actions}>
          <Link href={"/products/add"}>
            <a>Add Product</a>
          </Link>
        </div>
      </div>
      <div className="spacer-X"></div>
      <div className={styles.table}>
        <CustomTable
          columns={[
            { name: "Style Name", prop: "styleName" },
            { name: "Brand Name", prop: "randName" },
            { name: "Category", prop: "category" },
            { name: "Sub-Category", prop: "subCategory" },
          ]}
          //   data={managers}
          data={[]}
        />
      </div>
    </div>
  );
};
