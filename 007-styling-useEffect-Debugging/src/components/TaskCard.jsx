// TaskCard.jsx
import styles from "./TaskCard.module.css";

export default function TaskCard({ title, status, priority, onCycle }) {

  let statusClass;
  if (status === "open") {
    statusClass = styles.open;
  } else if (status === "in progress") {
    statusClass = styles.in_progress;
  } else {
    statusClass = styles.completed;
  }

  let priorityClass;
  if (priority === "high") {
    priorityClass = styles.high;
  } else if (priority === "medium") {
    priorityClass = styles.medium;
  } else {
    priorityClass = styles.low;
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={statusClass}>Status: {status}</p>
      <p className={priorityClass}>Priority: {priority}</p>
      <button onClick={onCycle}>Change Status</button>
    </div>
  );
}