import { NextPage } from "next";

import styles from "../../styles/bag.module.scss";
import { CHeader, Bag } from "components";
import { FC } from "react";

const BagPage: NextPage = () => {
  return (
    <main>
      <CHeader />
      <div className="container page-start">
        <Bag />
      </div>
    </main>
  );
};

export default BagPage;
