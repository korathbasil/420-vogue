import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import {
  Header,
  Greetings,
  HomeBanner,
  RecentItems,
  Sidebar,
  FeaturedProducts,
} from "../src/components";

const HomePage: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  function sidebarToggleHandler() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div>
      <Head>
        <title>420VOGUE - Mens fashion store</title>
        <meta
          name="description"
          content="420VOGUE is the best online shop for all mens fashion needs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        sidebarToggleHandler={sidebarToggleHandler}
      />
      <Header sidebarToggleHandler={sidebarToggleHandler} />
      <main style={{ paddingTop: "6rem" }}>
        <Greetings />
        <HomeBanner />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default HomePage;
