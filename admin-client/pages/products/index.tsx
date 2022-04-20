import { NextPage } from "next";

import { CustomTable } from "components";
import Link from "next/link";
import { stringify } from "querystring";

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
      <h2>Products</h2>
      <Link href={"/products/add"}>
        <a>Add product</a>
      </Link>
      <CustomTable columns={columns} data={data} />
    </section>
  );
};
export default ProductsPage;
