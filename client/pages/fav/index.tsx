import { CHeader, Favourite } from "components";
import { ShoppingBag } from "assets/icons";

const FavouritesPage = () => {
  return (
    <section>
      <CHeader />
      <div className="container page-start">
        <Favourite />
      </div>
    </section>
  );
};

export default FavouritesPage;
