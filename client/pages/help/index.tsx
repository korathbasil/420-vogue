import { CustomHeader, Help } from "components";
import { NextPage } from "next";

const HelpPage: NextPage = () => {
  return (
    <section>
      <CustomHeader title="Help" links={[]} />
      <Help />
    </section>
  );
};

export default HelpPage;
