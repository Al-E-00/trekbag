import AddItemForm from "./sidebarComponents/AddItemForm";
import ButtonGroup from "./sidebarComponents/ButtonGroup";
import { useItemsStore } from "./stores/itemsStore";

export default function Sidebar() {
  const handleAddItem = useItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
