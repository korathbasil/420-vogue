import { Header } from "components";

export const PrimaryLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
