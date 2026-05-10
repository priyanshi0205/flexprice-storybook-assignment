import { create } from 'zustand';

type FilterState = Record<string, any>;

type Store = {
  filters: Record<string, FilterState>;
  setFilter: (page: string, key: string, value: any) => void;
  resetFilters: (page: string) => void;
  getFilters: (page: string) => FilterState;
};

export const useFilterStore = create<Store>((set, get) => ({
  filters: {},

  setFilter: (page, key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [page]: {
          ...state.filters[page],
          [key]: value,
        },
      },
    })),

  resetFilters: (page) =>
    set((state) => {
      const copy = { ...state.filters };
      delete copy[page];
      return { filters: copy };
    }),

  getFilters: (page) => get().filters[page] || {},
}));