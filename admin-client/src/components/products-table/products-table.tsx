import Link from "next/link";
import useSwr from "swr";

import styles from "./products-table.module.scss";
import { CustomTable } from "../custom-table/custom-table";
import { axios } from "utils";

export const ProductsTable = () => {
  const { data: products, error } = useSwr("products", async () => {
    const { data } = await axios.get("/products");
    const products = data.map((p: any) => ({
      _id: p._id,
      styleName: p.styleName,
      brandName: p.brandName,
      category: p.category,
      subCategory: p.subCategory,
      status: "ACTIVE",
    }));
    return products;
  });
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
            { name: "Brand Name", prop: "brandName" },
            { name: "Category", prop: "category" },
            { name: "Sub-Category", prop: "subCategory" },
            { name: "Status", prop: "status" },
          ]}
          data={products}
          errMsg="No products available!"
        />
      </div>
    </div>
  );
};
