import type { NextPage } from "next";

import { PageTitle, AddManagerForm } from "components";

const AddManagerPage: NextPage = () => {
  return (
    <section>
      <PageTitle routes={["Managers", "Add Manger"]} />
      <div>
        <AddManagerForm />
      </div>
    </section>
  );
};

export default AddManagerPage;
