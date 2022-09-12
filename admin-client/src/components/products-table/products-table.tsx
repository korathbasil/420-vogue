import Link from "next/link";
import useSwr from "swr";
import { ProductController } from "lib/controllers";

import styles from "./products-table.module.scss";
import { CustomTable } from "../custom-table/custom-table";

export const ProductsTable = () => {
  const { data: products = [], error } = useSwr(
    "products",
    ProductController.getProducts
  );
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
            { name: "Style", prop: "style" },
            { name: "Brand", prop: "brand" },
            { name: "Category", prop: "category" },
            { name: "Sub-Category", prop: "subCategory" },
            { name: "Active", prop: "isActive" },
          ]}
          data={products}
          errMsg="No products available!"
          rowLink="/products"
          linkProp="_id"
        />
      </div>
    </div>
  );
};
