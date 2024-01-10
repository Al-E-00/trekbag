import Counter from "./headerComponents/Counter";
import Logo from "./headerComponents/Logo";

export default function Header({ totalNumberOfItems, numberOfPackedItems }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numberOfPackedItems={numberOfPackedItems}
      />
    </header>
  );
}
