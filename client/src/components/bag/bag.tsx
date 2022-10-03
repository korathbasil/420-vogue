import { Bolt } from "assets/icons";
import styles from "./bag.module.scss";
import { MiniProduct } from "components";
import { useUserStore, useVBagStore } from "store";

export const Bag = () => {
  const user = useUserStore((us) => us.user);
  const vBag = useVBagStore((vbs) => vbs.vBag);

  return (
    <div className={styles.bag}>
      <div className={styles.items}>
        <h3>Items in your bag</h3>
        <div className={styles.products}>
          {!user &&
            vBag.map((p) => {
              return <MiniProduct product={p} />;
            })}
        </div>
      </div>
      <div className={styles.summary}>
        <h3>
          ₹7899 <span>(2 ITEMS)</span>
        </h3>

        <div className={styles.button}>
          <Bolt size="20px" fill="var(--clr-white)" />
          <p>CHECKOUT</p>
        </div>
      </div>
    </div>
  );
};
