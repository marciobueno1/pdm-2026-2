import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useTaskFilter = create(
  persist(
    (set) => ({
      filtrarConcluidas: false,
      toggleFiltrarConcluidas: () =>
        set((state) => ({ filtrarConcluidas: !state.filtrarConcluidas })),
    }),
    {
      name: "taskFilter-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export const useUserStorage = create(
  persist(
    (set) => ({
      loggedUser: null,
      setLoggedUser: (loggedUser) => set({ loggedUser }),
    }),
    { name: "user-storage" },
  ),
);
