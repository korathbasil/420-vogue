import create from "zustand";
import { User } from "lib/interfaces";

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: User) => set(() => ({ user })),
  removeUser: () => set({ user: null }),
}));
