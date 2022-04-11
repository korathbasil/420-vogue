import { NextPage } from "next";

import { CustomHeader } from "components";
import { ShoppingBag } from "assets/icons";

const WishlistPage: NextPage = () => {
  return (
    <section>
      <CustomHeader links={[{ url: "/bag", Icon: ShoppingBag }]} />
    </section>
  );
};

export default WishlistPage;
