export default function Button({ buttonText, type = "primary" }) {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
      {buttonText}
    </button>
  );
}
