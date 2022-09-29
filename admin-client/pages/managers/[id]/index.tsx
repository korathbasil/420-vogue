import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Manager } from "lib/interfaces";

import styles from "../../../styles/manager-details-page.module.scss";
import { ManagerDetails, PageTitle } from "components";
import { ManagersController } from "lib/controllers";
import { useQuery } from "@tanstack/react-query";

const ManagerDetailsPage = () => {
  const router = useRouter();

  const { id: managerId } = router.query;
  const { data: manager } = useQuery([`managers/${managerId}`], async () => {
    if (!managerId || Array.isArray(managerId)) return;
    return ManagersController.getManagerById(managerId);
  });

  return (
    <main>
      <PageTitle routes={["Managers", "Details"]} />
      <div className="spacer-X"></div>
      {manager && <ManagerDetails manager={manager} />}
    </main>
  );
};

export default ManagerDetailsPage;
