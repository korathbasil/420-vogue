import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { State } from "state/store";

import { Header, Sidebar } from "components";
import { ManagersController } from "lib/controllers";

export const PrimaryLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const router = useRouter();

  const user = useSelector((state: State) => state.auth.user);
  const dispatch = useDispatch();

  async function authenticateCurrentUser() {
    try {
      const manager = await ManagersController.getLoggedInManager();
      if (!manager) return;

      const { _id, firstname, lastname, email, role } = manager;
      dispatch({
        type: "auth/login",
        payload: {
          _id,
          firstname,
          lastname,
          email,
          role,
        },
      });
    } catch (e: any) {
      dispatch({
        type: "user/set",
        payload: {
          loggedIn: false,
          user: null,
        },
      });

      router.push("/login");

      console.log(e.messages);
    }
  }

  useEffect(() => {
    if (!user) authenticateCurrentUser();
  });
  return (
    <>
      {user && <Header />}
      {user && (
        <div style={{ display: "flex", paddingTop: "85px" }}>
          <Sidebar />
          <aside
            style={{ width: "100%", padding: "10px", paddingLeft: "255px" }}
          >
            {children}
          </aside>
        </div>
      )}
    </>
  );
};
