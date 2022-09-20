import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import styles from "./custom-table.module.scss";

interface CustomTableProps<T> {
  columns: {
    name: string;
    prop: string;
  }[];
  data: T[];
  errMsg: string;
  rowLink?: string;
  linkProp?: string;
  keyProp: string;
}

type ModifiedObject = {
  [key: string]: string | object;
};

export const CustomTable = <T extends ModifiedObject>({
  columns,
  data,
  errMsg,
  rowLink,
  linkProp,
  keyProp,
}: PropsWithChildren<CustomTableProps<T>>) => {
  return (
    <table className={styles.table}>
      <tr>
        {columns.map((col) => (
          <th key={col.name}>{col.name}</th>
        ))}
      </tr>
      {data.map((item) => {
        return (
          <Link
            href={rowLink && linkProp ? rowLink + "/" + item[linkProp] : ""}
            key={item[keyProp] as string}
          >
            <tr>
              {columns.map((col) => {
                return (
                  <td key={JSON.stringify(item[col.prop])}>{item[col.prop]}</td>
                );
              })}
            </tr>
          </Link>
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
