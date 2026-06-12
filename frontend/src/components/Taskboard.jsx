import TaskItem from "./TaskItem";

function TaskBoard({ tasks, deleteTask, toggleTask, updateTask }) {
  return (
    <div className="mt-6 space-y-3">

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          updateTask={updateTask}
        />
      ))}

    </div>
  );
}

export default TaskBoard;