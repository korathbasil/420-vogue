import { ReactElement } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "state/store";

import "../styles/globals.css";
import { PrimaryLayout } from "../layouts/primary-layout";

type NextPageWithConditionedLayout = NextPage & {
  disablePrimaryLayout: boolean;
};

type AppPropsWithConditionedLayout = AppProps & {
  Component: NextPageWithConditionedLayout;
};

const queryClient = new QueryClient();

const ApplyPrimaryLayout = (Page: ReactElement) => {
  return <PrimaryLayout>{Page}</PrimaryLayout>;
};

const MyApp = ({ Component, pageProps }: AppPropsWithConditionedLayout) => {
  const AnyComponent = Component as any;
  let _myApp: JSX.Element;
  _myApp = !Component.disablePrimaryLayout ? (
    ApplyPrimaryLayout(<AnyComponent {...pageProps} />)
  ) : (
    <AnyComponent {...pageProps} />
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{_myApp}</Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
