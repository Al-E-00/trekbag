import { useContext, useMemo, useState } from "react";
import EmptyView from "./reusableComponents/EmptyView";
import Select from "react-select";
import { ItemsContext } from "./context/ItemsContextProvider";

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

export default function ItemList({}) {
  const [sortBy, setSortBy] = useState("default");
  const { items, handleDeleteItem, handleToggleItem } =
    useContext(ItemsContext);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "default") {
          return a.id - b.id;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
      }),
    [items, sortBy]
  );

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
