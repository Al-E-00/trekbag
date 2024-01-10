import Counter from "./headerComponents/Counter";
import Logo from "./headerComponents/Logo";

export default function Header({ items }) {
  return (
    <header>
      <Logo />
      <Counter items={items} />
    </header>
  );
}
