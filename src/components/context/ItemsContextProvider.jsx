import { createContext, useEffect, useState } from "react";
import { initialItems } from "../../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleMarkAllAsComplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: true }))
    );
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: false }))
    );
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const secondaryButtonActions = [
    {
      buttonText: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      buttonText: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      buttonText: "Remove all items",
      onClick: handleRemoveAllItems,
    },
    {
      buttonText: "Reset to initial",
      onClick: handleResetToInitial,
    },
  ];

  const handleToggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        secondaryButtonActions,
        handleToggleItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
