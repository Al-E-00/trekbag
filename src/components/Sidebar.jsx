import AddItemForm from "./sidebarComponents/AddItemForm";
import ButtonGroup from "./sidebarComponents/ButtonGroup";

export default function Sidebar({ handleAddItem, secondaryButtonActions }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup secondaryButtonActions={secondaryButtonActions} />
    </div>
  );
}
