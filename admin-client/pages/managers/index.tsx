import type { NextPage } from "next";

import { ManagersTable, PageTitle } from "components";

const ManagersPage: NextPage = () => {
  return (
    <section>
      <PageTitle routes={["Managers"]} />
      <ManagersTable />
    </section>
  );
};
export default ManagersPage;
