import { NextPage } from "next";

import { PageTitle, ProductsTable } from "components";

const ProductsPage: NextPage = () => {
  return (
    <section>
      <PageTitle routes={["Products"]} />
      <div className="spacer-X"></div>
      <ProductsTable />
    </section>
  );
};
export default ProductsPage;
