import { ReactElement } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "state/store";

import "../styles/globals.css";
import { PrimaryLayout } from "../layouts/primary-layout";

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
  let _myApp: JSX.Element;
  _myApp = !Component.disablePrimaryLayout ? (
    ApplyPrimaryLayout(<Component {...pageProps} />)
  ) : (
    <Component {...pageProps} />
  );

  return <Provider store={store}>{_myApp}</Provider>;
};

export default MyApp;
