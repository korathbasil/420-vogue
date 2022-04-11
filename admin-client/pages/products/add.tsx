import { PageTitle } from "components";
import { NextPage } from "next";

const AddProductPage: NextPage = () => {
  return (
    <section>
      <PageTitle routes={["Products", "Add Product"]} />
    </section>
  );
};

export default AddProductPage;
