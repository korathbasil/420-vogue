import styles from "./basic-insights.module.scss";

export const BasicInsights = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <h4>Today's sale</h4>

        <h2>
          ₹7580 <span>4 Orders</span>
        </h2>
      </div>
      <div className={styles.card}>
        <h4>This month's sale</h4>

        <h2>
          ₹24567 <span>39 Odrers</span>
        </h2>
      </div>
      <div className={styles.card}>
        <h4>Action Pending Orders</h4>

        <h2>
          2 <span>On PENDING</span> 7 <span>On TRANSIT</span>
        </h2>
      </div>

      <div className={styles.card}>
        <h4>Inventory</h4>

        <h2>
          12 <span>Out of Stock</span> 19 <span>Disabled</span>
        </h2>
      </div>
      <div className={styles.card}>
        <h4>Active Users</h4>

        <h2>
          778 <span>Monthly</span> 14 <span>Daily</span>
        </h2>
      </div>
    </div>
  );
};
