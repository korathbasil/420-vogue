import styles from "./page-title.module.scss";
import { RightArrow } from "assets/icons";

export const PageTitle = ({ routes }: { routes: string[] }) => {
  return (
    <div className={styles.title}>
      {routes.map((route, n) => (
        <div key={n} className={styles.route}>
          <h3>{route}</h3>
          {routes.length != n + 1 && (
            <div className={styles.iconWrapper}>
              <RightArrow />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
