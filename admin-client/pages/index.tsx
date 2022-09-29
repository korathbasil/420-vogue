import type { NextPage } from "next";
import Head from "next/head";

import { PageTitle, BasicInsights } from "components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MPanel - 420 Vogue</title>
        <meta name="description" content="Management Panel for 420VOGUE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle routes={["Dashboard"]} />
      <div className="spacer-X"></div>
      <BasicInsights />
    </div>
  );
};

export default Home;
