import { ReactElement } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { PrimaryLayout } from "layouts/primary-layout";

type NextPageWithConditionedLayout = NextPage & {
  disablePrimaryLayout: boolean;
};

type AppPropsWithConditionedLayout = AppProps & {
  Component: NextPageWithConditionedLayout;
};

const ApplyPrimaryLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

const MyApp = ({ Component, pageProps }: AppPropsWithConditionedLayout) => {
  if (!Component.disablePrimaryLayout)
    return ApplyPrimaryLayout(<Component {...pageProps} />);
  return <Component {...pageProps} />;
};

export default MyApp;
