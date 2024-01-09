import AddItemForm from "./sidebarComponents/AddItemForm";
import ButtonGroup from "./sidebarComponents/ButtonGroup";

export default function Sidebar({ setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />
      <ButtonGroup />
    </div>
  );
}
