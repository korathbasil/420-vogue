import create from "zustand";
import { BagProduct, User } from "lib/interfaces";

interface TempBagProductState {
  product: BagProduct | null;
  setProduct: (p: BagProduct) => void;
  removeProduct: () => void;
}

export const useTempBagProductStore = create<TempBagProductState>((set) => ({
  product: null,
  setProduct: (p: BagProduct) => set(() => ({ product: p })),
  removeProduct: () => set({ product: null }),
}));
