import styles from "./favourites.module.scss";
import { ProductCard } from "components";
import { useEffect, useState } from "react";
import { Product } from "lib/interfaces";
import { ProductController } from "lib/controller";
import { useUserStore, useVFavStore } from "store";
import { isLocalURL } from "next/dist/shared/lib/router/router";
import { useQuery } from "@tanstack/react-query";

export const Favourite = () => {
  const user = useUserStore((s) => s.user);
  const vFav = useVFavStore((s) => s.vFav);

  const { data: products = [], isLoading } = useQuery(["fav"], async () => {
    if (user) {
      return ProductController.getProducts();
    } else {
      return vFav;
    }
  });

  return (
    <div className={styles.fav}>
      <h4>Favourites</h4>
      <div className={styles.products}>
        {products.map((p) => {
          return <ProductCard product={p} />;
        })}
      </div>
    </div>
  );
};
