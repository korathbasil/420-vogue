import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { State } from "state/store";
import { Manager } from "lib/interfaces";

import { ManagerDetails, PageTitle } from "components";
import { ManagersController } from "lib/controllers";

const ProfilePage: NextPage = () => {
  const user = useSelector((state: State) => state.auth.user);

  const [manager, setManager] = useState<Manager | null>(null);

  useEffect(() => {
    loadManagerDetails();
  }, []);

  async function loadManagerDetails() {
    if (!user) return;
    try {
      const manager = await ManagersController.getManagerById(user._id);
      setManager(manager);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <PageTitle routes={["Profile"]} />
      <div className="spacer-X"></div>
      {manager && <ManagerDetails manager={manager} ownProfile={true} />}
    </main>
  );
};
export default ProfilePage;
