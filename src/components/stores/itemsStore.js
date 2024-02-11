import { create } from "zustand";
import { initialItems } from "../../lib/constants";

export const useItemsStore = create((set) => ({
  items: initialItems,
  addItem: (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };

    set((state) => ({ items: [...state.items, newItem] }));
  },
  deleteItem: (id) => {
    set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
  },
  toggleItem: (id) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      ),
    }));
  },
  secondaryButtonActions: {
    removeAllItems: () => {
      set(() => ({ items: [] }));
    },
    resetToInitial: () => {
      set(() => ({ items: initialItems }));
    },
    markAllComplete: () => {
      set((state) => ({
        items: state.items.map((item) => ({ ...item, packed: true })),
      }));
    },
    markAllAsIncomplete: () => {
      set((state) => ({
        items: state.items.map((item) => ({ ...item, packed: false })),
      }));
    },
  },
}));
