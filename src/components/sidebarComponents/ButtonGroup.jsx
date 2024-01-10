import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";
import Button from "../reusableComponents/Button";

export default function ButtonGroup() {
  const { secondaryButtonActions } = useContext(ItemsContext);
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
