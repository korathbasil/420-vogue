import type { NextPage } from "next";

import { ManagersTable, PageTitle } from "components";

const ManagersPage: NextPage = () => {
  return (
    <section>
      <PageTitle routes={["Managers"]} />
      <div className="spacer-X"></div>
      <ManagersTable />
    </section>
  );
};
export default ManagersPage;
