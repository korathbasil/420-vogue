import { AddProductVariantForm, PageTitle } from "components";

const AddVariantPage = () => {
  return (
    <main>
      <PageTitle routes={["Products", "Variants", "Add"]} />
      <div className="spacer-X"></div>
      <AddProductVariantForm />
    </main>
  );
};

export default AddVariantPage;
