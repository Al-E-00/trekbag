import AddItemForm from "./sidebarComponents/AddItemForm";
import ButtonGroup from "./sidebarComponents/ButtonGroup";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <AddItemForm />
      <ButtonGroup />
    </div>
  );
}
