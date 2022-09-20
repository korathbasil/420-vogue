import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Manager } from "lib/interfaces";

import styles from "../../../styles/manager-details-page.module.scss";
import { ManagerDetails, PageTitle } from "components";
import { ManagersController } from "lib/controllers";

const ManagerDetailsPage = () => {
  const router = useRouter();
  const [manager, setManager] = useState<Manager | null>(null);

  const { id: managerId } = router.query;

  useEffect(() => {
    loadManagerDetails();
  }, [router.query]);

  async function loadManagerDetails() {
    if (!managerId || Array.isArray(managerId)) return;
    try {
      const manager = await ManagersController.getManagerById(managerId);
      setManager(manager);
    } catch (error) {}
  }

  return (
    <main>
      <PageTitle routes={["Managers", "Details"]} />
      <div className="spacer-X"></div>
      {manager && <ManagerDetails manager={manager} />}
    </main>
  );
};

export default ManagerDetailsPage;
