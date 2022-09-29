import { Spinner } from "assets/loaders";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import styles from "./custom-table.module.scss";

interface CustomTableProps<T> {
  columns: {
    name: string;
    prop: string;
  }[];
  data: T[];
  rowLink?: string;
  linkProp?: string;
  keyProp: string;
  isLoading?: boolean;
  error?: string;
}

type ModifiedObject = {
  [key: string]: string | object;
};

export const CustomTable = <T extends ModifiedObject>({
  columns,
  data,
  rowLink,
  linkProp,
  keyProp,
  isLoading = false,
  error,
}: PropsWithChildren<CustomTableProps<T>>) => {
  return (
    <div className={styles.parent}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.name}>{col.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <Link
                href={rowLink && linkProp ? rowLink + "/" + item[linkProp] : ""}
                key={item[keyProp] as string}
              >
                <tr>
                  {columns.map((col) => {
                    return (
                      <td key={JSON.stringify(item[col.prop])}>
                        {item[col.prop]}
                      </td>
                    );
                  })}
                </tr>
              </Link>
            );
          })}
        </tbody>
      </table>
      {isLoading && (
        <div className={styles.loaderContainer}>
          <Spinner />
        </div>
      )}
      {error && (
        <div className={styles.message}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
