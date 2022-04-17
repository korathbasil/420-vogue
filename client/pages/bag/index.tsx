import { NextPage } from "next";

import { CustomHeader } from "components";
import { Heart } from "assets/icons";

const BagPage: NextPage = () => {
  return (
    <section>
      <CustomHeader links={[{ url: "/wishlist", Icon: Heart }]} />
    </section>
  );
};

export default BagPage;
