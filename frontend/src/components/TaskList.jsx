import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;