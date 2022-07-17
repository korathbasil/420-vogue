import { NextPage } from "next";

import { PageTitle, ProductsTable } from "components";

const ProductsPage: NextPage = () => {
  const columns = [
    {
      name: "Id",
      prop: "id",
    },
    {
      name: "Style Name",
      prop: "styleName",
    },
    {
      name: "Brand Name",
      prop: "brandName",
    },
    {
      name: "Price",
      prop: "price",
    },
  ];

  const data = [
    {
      id: "123",
      styleName: "Jordan Air",
      brandName: "Nike",
      price: "199",
    },
  ];
  return (
    <section>
      <PageTitle routes={["Products"]} />
      <div className="spacer-X"></div>
      <ProductsTable />
    </section>
  );
};
export default ProductsPage;
