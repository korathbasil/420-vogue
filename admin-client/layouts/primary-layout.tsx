import { Header, Sidebar } from "components";

export const PrimaryLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", paddingTop: "85px" }}>
        <Sidebar />
        <aside style={{ width: "100%", padding: "10px" }}>{children}</aside>
      </div>
    </>
  );
};
