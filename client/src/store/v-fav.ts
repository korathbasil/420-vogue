import create from "zustand";
import { Product } from "lib/interfaces";

interface VFavState {
  vFav: Product[];
  setVFav: (fav: Product[]) => void;
}

function getVFavItems() {
  if (typeof window !== "undefined") {
    const valJson = window.localStorage.getItem("fav");
    if (!valJson) return [] as Product[];

    return JSON.parse(valJson) as Product[];
  }
  return [];
}

function setVBagItems(b: Product[]) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("bag", JSON.stringify(b));
  }
}

export const useVFavStore = create<VFavState>((set) => ({
  vFav: getVFavItems(),
  setVFav: (f: Product[]) => {
    setVBagItems(f);
    return set(() => ({ vFav: f }));
  },
}));
