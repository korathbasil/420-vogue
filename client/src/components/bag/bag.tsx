import { Bolt } from "assets/icons";
import styles from "./bag.module.scss";
import { MiniProduct } from "components";
import { useUserStore, useVBagStore } from "store";

export const Bag = () => {
  const user = useUserStore((us) => us.user);
  const vBag = useVBagStore((vbs) => vbs.vBag);

  function calculateTotalAmount() {
    let amt = 0;
    vBag.forEach((p) => {
      amt = amt + p.variant.price;
    });
    return amt;
  }

  return (
    <div className={styles.bag}>
      <div className={styles.items}>
        <h3>Items in your bag</h3>
        <div className={styles.products}>
          {!user &&
            vBag.map((p) => {
              return <MiniProduct key={p._id} product={p} />;
            })}
        </div>
      </div>
      <div className={styles.summary}>
        {!user && (
          <h3>
            {calculateTotalAmount()}
            <span> ({vBag.length} ITEMS)</span>
          </h3>
        )}

        <div className={styles.button}>
          <Bolt size="20px" fill="var(--clr-white)" />
          <p>CHECKOUT</p>
        </div>
      </div>
    </div>
  );
};
