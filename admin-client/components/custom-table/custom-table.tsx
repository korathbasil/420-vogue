import styles from "./custom-table.module.scss";

export const CustomTable = () => {
  return (
    <table className={styles.table}>
      <tr>
        <th>ID</th>
        <th>Style Name</th>
        <th>Brand Name</th>
        <th>Price</th>
        <th>Added Date</th>
        <th>Actions</th>
      </tr>
    </table>
  );
};
