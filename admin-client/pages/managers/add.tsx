import type { NextPage } from "next";

import { PageTitle } from "components";

const AddManagerPage: NextPage = () => {
  return (
    <section>
      <PageTitle routes={["Managers", "Add Manger"]} />
    </section>
  );
};

export default AddManagerPage;
