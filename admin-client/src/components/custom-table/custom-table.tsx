import { FC, PropsWithChildren } from "react";

import styles from "./custom-table.module.scss";

interface CustomTableProps<T> {
  columns: {
    name: string;
    prop: string;
  }[];
  data: T[];
  errMsg: string;
}

type ModifiedObject = {
  [key: string]: string | object;
};

export const CustomTable = <T extends ModifiedObject>({
  columns,
  data,
  errMsg,
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
      {data.length < 1 && errMsg && (
        <div className={styles.message}>
          <p>{errMsg}</p>
        </div>
      )}
    </table>
  );
};
