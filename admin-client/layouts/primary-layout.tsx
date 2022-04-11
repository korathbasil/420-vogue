import { Header, Sidebar } from "components";

export const PrimaryLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        {children}
      </div>
    </>
  );
};
