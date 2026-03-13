import { create } from "zustand";

export const useFavStore = create((set, get) => ({
  // state
  favorites: [],

  addFavorite: (jobId) => {
    set((state) => ({
      favorites: state.favorites.includes(jobId)
        ? state.favorites
        : [...state.favorites, jobId],
    }));
  },
  removeFavorite: (jobId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== jobId),
    }));
  },

  isFavorite: (jobId) => {
    return get().favorites.includes(jobId);
  },

  toggleFavorite: (jobId) => {
    const { isFavorite, removeFavorite, addFavorite } = get();
    isFavorite(jobId) ? removeFavorite(jobId) : addFavorite(jobId);
  },
  numFavorites: () => get().favorites.length,
}));
