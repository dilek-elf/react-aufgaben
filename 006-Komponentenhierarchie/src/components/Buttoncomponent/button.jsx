// Button.jsx — it has own component
export default function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
    >
      Pick a name
    </button>
  );
}