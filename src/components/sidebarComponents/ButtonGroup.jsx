import Button from "../reusableComponents/Button";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const secondaryButtonActions = useItemsStore(
    (state) => state.secondaryButtonActions
  );

  const {
    removeAllItems,
    resetToInitial,
    markAllComplete,
    markAllAsIncomplete,
  } = secondaryButtonActions;

  const secondaryButtons = [
    {
      buttonText: "Remove All Items",
      onClick: removeAllItems,
    },
    {
      buttonText: "Reset to Initial",
      onClick: resetToInitial,
    },
    {
      buttonText: "Mark All Complete",
      onClick: markAllComplete,
    },
    {
      buttonText: "Mark All Incomplete",
      onClick: markAllAsIncomplete,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ buttonText, onClick }) => (
        <Button buttonText={buttonText} key={buttonText} onClick={onClick} />
      ))}
    </section>
  );
}
