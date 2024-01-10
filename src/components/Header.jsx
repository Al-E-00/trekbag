import Counter from "./headerComponents/Counter";
import Logo from "./headerComponents/Logo";
import { useItemsContext } from "../lib/hooks";

export default function Header() {
  const { items } = useItemsContext();

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
