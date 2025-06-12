export default function Accordion({
  title,
  goal,
  exercise,
  repeat,
  isOpen,
  onClick,
}) {
  return (
    <div id="workouts">
      <button
        className={`accordion ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        {title}
      </button>
      <div className="panel" style={{ display: isOpen ? "block" : "none" }}>
        <p className="small">{goal}</p>
        <p className="small">Exercises included : {exercise}</p>
        <p className="small">Repeat : {repeat}</p>
      </div>
    </div>
  );
}
