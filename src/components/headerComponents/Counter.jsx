export default function Counter({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  return (
    <p>
      <b>{packedItems}</b> / {totalItems} items packed
    </p>
  );
}
