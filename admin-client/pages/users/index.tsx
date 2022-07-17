import { UsersTable, PageTitle } from "components";

const UsersPage = () => {
  return (
    <section>
      <PageTitle routes={["Users"]} />
      <div className="spacer-X"></div>
      <UsersTable />
    </section>
  );
};
export default UsersPage;
