import Button from "../reusableComponents/Button";
import { useItemsContext } from "../../lib/hooks";

export default function ButtonGroup() {
  const { secondaryButtonActions } = useItemsContext();
  return (
    <section className="button-group">
      {secondaryButtonActions.map(({ buttonText, onClick }) => {
        return (
          <Button
            key={buttonText + onClick.toString()}
            buttonText={buttonText}
            buttonType="secondary"
            onClick={onClick}
          />
        );
      })}
    </section>
  );
}
