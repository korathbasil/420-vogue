import type { NextPage } from "next";
import Head from "next/head";

import { PageTitle, BasicInsights } from "components";

const Home: NextPage = () => {
  return (
    <div>
      <PageTitle routes={["Dashboard"]} />
      <div className="spacer-X"></div>
      <BasicInsights />
    </div>
  );
};

export default Home;
