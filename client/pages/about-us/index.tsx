import { About, CustomHeader } from "components";
import { NextPage } from "next";

const AboutUsPage: NextPage = () => {
  return (
    <section>
      <CustomHeader links={[]} />
      <About />
    </section>
  );
};

export default AboutUsPage;
