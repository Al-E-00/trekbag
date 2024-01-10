import EmptyView from "./reusableComponents/EmptyView";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          text={item.name}
          packed={item.packed}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ id, text, packed, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => onToggleItem(id)}
        />
        {text}
      </label>

      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
