import { useEffect, useRef } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleController, UsersController } from "lib/controller";

import "../styles/globals.css";
import { useUserStore } from "store";
import { googleLogout } from "@react-oauth/google";
import { getPageStaticInfo } from "next/dist/build/analysis/get-page-static-info";

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
  function handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AnyComponent {...pageProps} /> */}
      <Auth Component={Component} {...pageProps} />
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      <div className="google-login-button" hidden></div>
    </QueryClientProvider>
  );
}

export default MyApp;
