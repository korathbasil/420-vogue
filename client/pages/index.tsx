import { useCallback, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/home.module.scss";
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

  const sidebarToggleHandler = useCallback(
    () => setIsSidebarOpen(!isSidebarOpen),
    [isSidebarOpen]
  );

  const loginModalToggleHandler = useCallback(setIsLoginModalOpen, []);
  return (
    <>
      <Head>
        <title>420VOGUE - Mens fashion store</title>
        <meta
          name="description"
          content="420VOGUE is the best online shop for all mens fashion needs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header
          sidebarToggleHandler={sidebarToggleHandler}
          loginModalToggleHandler={loginModalToggleHandler}
        />
        <main style={{ paddingTop: "5.5rem" }}>
          <Greetings />
          {/* <HomeBanner /> */}
          <FeaturedProducts />
        </main>
        {isLoginModalOpen && (
          <Modal>
            <LoginModal closeModal={() => loginModalToggleHandler(false)} />
          </Modal>
        )}
        <div className={styles.sidebarHolder}>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            sidebarToggleHandler={sidebarToggleHandler}
            loginModalToggleHandler={loginModalToggleHandler}
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
