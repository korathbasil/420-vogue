import { FC, PropsWithChildren } from "react";

import styles from "./custom-table.module.scss";

interface CustomTableProps<T> {
  columns: {
    name: string;
    prop: string;
  }[];
  data: T[];
}

type ModifiedObject = {
  [key: string]: string;
};

export const CustomTable = <T extends ModifiedObject>({
  columns,
  data,
}: PropsWithChildren<CustomTableProps<T>>) => {
  return (
    <table className={styles.table}>
      <tr>
        {columns.map((col) => (
          <th>{col.name}</th>
        ))}
      </tr>
      {data.map((item) => {
        return (
          <tr>
            {columns.map((col) => {
              return <td>{item[col.prop]}</td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};
