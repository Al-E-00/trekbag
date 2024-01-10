import { useContext } from "react";
import AddItemForm from "./sidebarComponents/AddItemForm";
import ButtonGroup from "./sidebarComponents/ButtonGroup";
import { ItemsContext } from "./context/ItemsContextProvider";

export default function Sidebar() {
  const { handleAddItem } = useContext(ItemsContext);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
