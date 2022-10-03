import { NextPage } from "next";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { State } from "state/store";
import { ManagersController } from "lib/controllers";

import { ManagerDetails, PageTitle } from "components";

const ProfilePage: NextPage = () => {
  const user = useSelector((state: State) => state.auth.user);

  const { data: manager } = useQuery([`managers/${user?._id}`], () => {
    if (!user) return;

    return ManagersController.getManagerById(user._id);
  });

  return (
    <main>
      <PageTitle routes={["Profile"]} />
      <div className="spacer-X"></div>
      {manager && <ManagerDetails manager={manager} />}
    </main>
  );
};
export default ProfilePage;
