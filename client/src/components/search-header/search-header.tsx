import { FC } from "react";

import styles from "./search-header.module.scss";
import { BackArrow, Filter } from "assets/icons";

interface SearchHeaderProps {
  query: string;
  setQuery: (q: string) => void;
}

export const SearchHeader: FC<SearchHeaderProps> = ({ query, setQuery }) => {
  return (
    <header className={styles.header}>
      <form>
        <BackArrow />
        <input
          type="text"
          name="seacrhQuery"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Filter />
      </form>
    </header>
  );
};
