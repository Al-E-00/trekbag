export default function Button({
  buttonText,
  buttonType = "primary",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {buttonText}
    </button>
  );
}
