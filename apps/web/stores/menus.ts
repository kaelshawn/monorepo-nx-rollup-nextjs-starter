import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MenusState {
  items: Array<{ id: string; name: string }>;
  testNumber: number;
  increase: (by: number) => void;
  increaseMenu: () => void;
}

const useMenusStore = create<MenusState>()(
  persist(
    (set) => ({
      items: [],
      testNumber: 0,
      increase: (by) =>
        set((state) => ({ ...state, testNumber: state.testNumber + by })),
      increaseMenu: () =>
        set((state) => ({ ...state, items: [{ id: "aaa", name: "aaa" }] })),
    }),
    { name: "menus" }
  )
);

export default useMenusStore;
