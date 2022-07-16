import { OrdersTable, PageTitle } from "components";

const ManagersPage = () => {
  return (
    <section>
      <PageTitle routes={["Orders"]} />
      <div className="spacer-X"></div>
      <OrdersTable />
    </section>
  );
};
export default ManagersPage;
