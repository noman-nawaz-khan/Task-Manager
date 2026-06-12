import { useState } from "react";

function TaskItem({
  task,
  deleteTask,
  toggleTask,
  updateTask,
}) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(task.title);

  return (
    <div
      className="
      flex justify-between items-center
      p-5
      bg-slate-900/60
      backdrop-blur-lg
      border border-slate-700
      rounded-3xl
      shadow-xl
      hover:border-cyan-500
      transition-all
      duration-300
      "
    >
      <div className="flex items-center gap-4  flex-col sm:flex-row sm:items-center justify-between  p-4 dark:bg-gray-800 rounded-xl shadow w-full">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5"
        />

        {edit ? (
          <input
            value={value}
            onChange={(e) =>
              setValue(e.target.value)
            }
            className="
            bg-slate-800
            border border-slate-700
            rounded-xl
            px-3 py-2
            text-white
            w-full sm:w-auto flex-1 min-w-0 border p-1 rounded
            "
          />
        ) : (
          <span
            className={`font-medium text-lg ${
              task.completed
                ? "line-through text-slate-500"
                : "text-white"
            }`}
          >
            {task.title}
          </span>
        )}

      </div>

      <div className="flex gap-2">

        {edit ? (
          <button
            onClick={() => {
              updateTask(task.id, value);
              setEdit(false);
            }}
            className="
            px-4 py-2
            bg-emerald-500
            hover:bg-emerald-400
            text-black
            font-semibold
            rounded-xl
            sm:flex-nowrap
            "
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="
            px-4 py-2
            bg-cyan-500
            hover:bg-cyan-400
            text-black
            font-semibold
            rounded-xl
            "
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="
          px-4 py-2
          bg-red-500
          hover:bg-red-400
          text-white
          font-semibold
          rounded-xl
          "
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskItem;