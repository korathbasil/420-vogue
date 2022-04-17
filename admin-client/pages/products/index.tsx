import { NextPage } from "next";

import { CustomTable } from "components";
import Link from "next/link";

const ProductsPage: NextPage = () => {
  return (
    <section>
      <h2>Products</h2>
      <Link href={"/products/add"}>
        <a>Add product</a>
      </Link>
      <CustomTable />
    </section>
  );
};
export default ProductsPage;
