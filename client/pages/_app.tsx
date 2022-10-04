import { useEffect } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UsersController } from "lib/controller";

import "../styles/globals.css";
import { useUserStore } from "store";

const queryClient = new QueryClient();

function Auth({ Component, ...pageProps }: AppProps) {
  const AnyComponent = Component as any;

  const setUser = useUserStore((state) => state.setUser);
  const removeUser = useUserStore((state) => state.removeUser);

  useEffect(() => {
    async function authenticateCurrentUser() {
      try {
        const user = await UsersController.getCurrentUser();

        if (!user) return;

        setUser({
          _id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          role: user.role,
        });
      } catch (error) {
        removeUser();
      }
    }

    authenticateCurrentUser();
  }, []);

  return <AnyComponent {...pageProps} />;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AnyComponent {...pageProps} /> */}
      <Auth Component={Component} {...pageProps} />
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}

export default MyApp;
