function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <div className="task-item">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />

        <span
          className={task.completed ? "completed" : ""}
        >
          {task.title}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;