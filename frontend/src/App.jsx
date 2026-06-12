import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/statsCard";
import TaskBoard from "./components/TaskBoard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(true);

  const addTask = (title) => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const updateTask = (id, value) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: value } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen ${
        dark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
          : "bg-slate-100 text-black"
      }`}
    >
      <div className="flex">
        <Sidebar 
        />

        <main className="flex-1 p-6 md:p-10">
          <Header
            search={search}
            setSearch={setSearch}
            dark={dark}
            setDark={setDark}
            addTask={addTask}
          />

          <StatsCards tasks={tasks} />

          <TaskBoard
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            updateTask={updateTask}
          />
        </main>
      </div>
    </div>
  );
}

export default App;