import { useState } from "react";
import { initialItems } from "../lib/constants";

export default function ItemList() {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          text={item.name}
          packed={item.packed}
          setItems={setItems}
        />
      ))}
    </ul>
  );
}

function Item({ id, text, packed, setItems }) {
  const clickHandle = () => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      })
    );
  };

  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={packed} onChange={clickHandle} />
        {text}
      </label>

      <button>❌</button>
    </li>
  );
}
