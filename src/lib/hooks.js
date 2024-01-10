import { useContext } from "react";
import { ItemsContext } from "../components/context/ItemsContextProvider";

export function useItemsContext() {
  const context = useContext(ItemsContext);
  return context;
}
