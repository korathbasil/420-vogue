import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import {
  Header,
  Greetings,
  HomeBanner,
  RecentItems,
  Sidebar,
} from "../components";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        sidebarToggleHandler={sidebarToggleHandler}
      />
      <Header sidebarToggleHandler={sidebarToggleHandler} />
      <Greetings />
      <HomeBanner />
      <Greetings />
      <RecentItems />
    </div>
  );
};

export default HomePage;
