import { FC, FormEvent } from "react";

import styles from "./search-header.module.scss";
import { BackArrow, Filter } from "assets/icons";
import { useState } from "react";
import { Product } from "lib/interfaces";
import { ProductController } from "lib/controller";

interface SearchHeaderProps {
  setProducts: (p: Product[]) => void;
}

export const SearchHeader: FC<SearchHeaderProps> = ({ setProducts }) => {
  const [query, setQuery] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const products = await ProductController.getProductsFromQuery(query);
      console.log(products);
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit}>
        <BackArrow />
        <input
          type="text"
          name="seacrhQuery"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" hidden />
        <Filter />
      </form>
    </header>
  );
};
