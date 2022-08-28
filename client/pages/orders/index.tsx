import { CHeader, Orders } from "components";

const OrdersPage = () => {
  return (
    <section>
      <CHeader />
      <div className="container page-start">
        <Orders />
      </div>
    </section>
  );
};

export default OrdersPage;
