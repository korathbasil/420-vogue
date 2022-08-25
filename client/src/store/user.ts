import create from "zustand";
import { User } from "lib/interfaces";

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user: User) => set(() => ({ user })),
  removeUser: () => set({ user: null }),
}));
