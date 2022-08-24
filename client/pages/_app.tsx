import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../styles/globals.css";
import { axios } from "utils";

const queryClient = new QueryClient();

function Auth({ Component, ...pageProps }: AppProps) {
  const AnyComponent = Component as any;

  const { data: user, error } = useQuery(["user"], async function () {
    const { data } = await axios.get("/auth/current-user");
    if (!data) throw new Error("Not authorozed");

    return data;
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
