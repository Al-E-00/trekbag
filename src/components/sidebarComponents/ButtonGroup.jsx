import { buttonsText } from "../../lib/constants";
import Button from "../reusableComponents/Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {buttonsText.map((buttonText, index) => (
        <Button key={index} buttonText={buttonText} type="secondary" />
      ))}
    </section>
  );
}
