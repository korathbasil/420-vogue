import { NextPage } from "next";

import { PageTitle, AddProductForm } from "components";

const AddProductPage: NextPage = () => {
  return (
    <section>
      <PageTitle routes={["Products", "Add Product"]} />
      <div className="spacer-X"></div>
      <AddProductForm />
    </section>
  );
};

export default AddProductPage;
