import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLogged: false,
  logIn: () => set({ isLogged: true }),
  logOut: () => set({ isLogged: false }),
}));
