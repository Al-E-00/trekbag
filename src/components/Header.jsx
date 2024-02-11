import Counter from "./headerComponents/Counter";
import Logo from "./headerComponents/Logo";
import { useItemsStore } from "./stores/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={items.length}
        numberOfPackedItems={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
