import { NextPage } from "next";

import { CustomTable } from "components";

const ProductsPage: NextPage = () => {
  return (
    <section>
      <h2>Products</h2>
      <CustomTable />
    </section>
  );
};
export default ProductsPage;
