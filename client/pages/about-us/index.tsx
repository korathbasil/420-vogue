import { About, CustomHeader } from "components";
import { NextPage } from "next";

const AboutUsPage: NextPage = () => {
  return (
    <section>
      <CustomHeader title="ABOUT" links={[]} />
      <About />
    </section>
  );
};

export default AboutUsPage;
