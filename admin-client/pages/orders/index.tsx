import { OrdersTable, PageTitle } from "components";

const OrdersPage = () => {
  return (
    <section>
      <PageTitle routes={["Orders"]} />
      <div className="spacer-X"></div>
      <OrdersTable />
    </section>
  );
};
export default OrdersPage;
