import { useContext } from "react";
import { ItemsContext } from "./context/ItemsContextProvider";
import Counter from "./headerComponents/Counter";
import Logo from "./headerComponents/Logo";

export default function Header() {
  const { items } = useContext(ItemsContext);

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
