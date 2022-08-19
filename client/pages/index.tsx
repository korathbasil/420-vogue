import { useCallback, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import {
  Header,
  Greetings,
  HomeBanner,
  RecentItems,
  Sidebar,
  FeaturedProducts,
  Modal,
  LoginModal,
} from "../src/components";

const HomePage: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  function sidebarToggleHandler() {
    setIsLoginModalOpen(!isSidebarOpen);
  }

  const loginModalToggleHandler = useCallback(setIsLoginModalOpen, []);
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
      <Header
        sidebarToggleHandler={sidebarToggleHandler}
        loginModalToggleHandler={loginModalToggleHandler}
      />
      <main style={{ paddingTop: "5.5rem" }}>
        <Greetings />
        <HomeBanner />
        <FeaturedProducts />
      </main>
      {isLoginModalOpen && (
        <Modal>
          <LoginModal closeModal={loginModalToggleHandler} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
