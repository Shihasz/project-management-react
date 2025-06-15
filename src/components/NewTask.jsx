import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const [emptyError, setEmptyError] = useState(false);

  function handleChange(event) {
    setEnteredTask(event.target.value);
    setEmptyError(false);
  }
  let cssClasses = "w-64 px-2 py-1 rounded-sm bg-stone-200";
  if (emptyError) {
    cssClasses += " border-2 animate-blink-border";
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      setEmptyError(true);
      return;
    }
    setEmptyError(false);
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className={cssClasses}
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
