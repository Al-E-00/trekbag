import AddItemForm from "./sidebarComponents/AddItemForm";
import ButtonGroup from "./sidebarComponents/ButtonGroup";
import { useItemsContext } from "../lib/hooks";

export default function Sidebar() {
  const { handleAddItem } = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
