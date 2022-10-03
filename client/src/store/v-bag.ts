import create from "zustand";
import { BagProduct } from "lib/interfaces";

interface VBagState {
  vBag: BagProduct[];
  setVBag: (buser: BagProduct[]) => void;
}

function getVBagItems() {
  if (typeof window !== "undefined") {
    const valJson = window.localStorage.getItem("bag");
    if (!valJson) return [] as BagProduct[];

    return JSON.parse(valJson) as BagProduct[];
  }
  return [];
}

function setVBagItems(b: BagProduct[]) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("bag", JSON.stringify(b));
  }
}

export const useVBagStore = create<VBagState>((set) => ({
  vBag: getVBagItems(),
  setVBag: (b: BagProduct[]) => {
    setVBagItems(b);
    return set(() => ({ vBag: b }));
  },
}));
