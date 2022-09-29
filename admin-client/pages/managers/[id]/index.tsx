import { useRouter } from "next/router";

import { ManagerDetails, PageTitle } from "components";
import { ManagersController } from "lib/controllers";
import { useQuery } from "@tanstack/react-query";

const ManagerDetailsPage = () => {
  const router = useRouter();

  const { id: managerId } = router.query;
  const { data: manager } = useQuery([`managers/${managerId}`], async () => {
    return ManagersController.getManagerById(managerId as string);
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
