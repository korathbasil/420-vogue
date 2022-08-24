import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UsersController } from "lib/controller";

import "../styles/globals.css";

const queryClient = new QueryClient();

function Auth({ Component, ...pageProps }: AppProps) {
  const AnyComponent = Component as any;

  useQuery(["user"], UsersController.getCurrentUser, {
    cacheTime: 1000 * 50 * 60 * 24,
  });

  return <AnyComponent {...pageProps} />;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AnyComponent {...pageProps} /> */}
      <Auth Component={Component} {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
