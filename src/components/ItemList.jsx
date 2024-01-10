import { useState } from "react";
import EmptyView from "./reusableComponents/EmptyView";
import Select from "react-select";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "default") {
      return a.id - b.id;
    }

    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }

    if (sortBy === "packed") {
      return b.packed - a.packed;
    }
  });

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}
      {sortedItems.map((item) => (
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
