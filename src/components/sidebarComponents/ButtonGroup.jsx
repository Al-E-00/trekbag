import Button from "../reusableComponents/Button";

export default function ButtonGroup() {
  const buttonsText = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items",
  ];

  return (
    <section className="button-group">
      {buttonsText.map((buttonText, index) => (
        <Button key={index} buttonText={buttonText} type="secondary" />
      ))}
    </section>
  );
}
