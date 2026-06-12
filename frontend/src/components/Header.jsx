import { useState } from "react";

function Header({
  search,
  setSearch,
  dark,
  setDark,
  addTask,
}) {
  const [title, setTitle] = useState("");

  return (
    <div className="space-y-6">

      <div className="flex flex-col md:flex-row gap-4 justify-between">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="
          flex-1
          bg-slate-900/70
          border border-slate-700
          rounded-2xl
          px-5 py-3
          text-white
          placeholder:text-slate-400
          focus:outline-none
          focus:border-cyan-500
          "
        />

        <button
          onClick={() => setDark(!dark)}
          className="
          px-5 py-3
          rounded-2xl
          bg-slate-800
          border border-slate-700
          hover:border-cyan-500
          transition
          "
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>

      </div>

      <div className="flex gap-3">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new task..."
          className="
          flex-1
          bg-slate-900/70
          border border-slate-700
          rounded-2xl
          px-5 py-3
          text-white
          placeholder:text-slate-400
          focus:outline-none
          focus:border-cyan-500
          "
        />

        <button
          onClick={() => {
            addTask(title);
            setTitle("");
          }}
          className="
          px-6 py-3
          bg-cyan-500
          hover:bg-cyan-400
          text-black
          font-semibold
          rounded-2xl
          transition
          "
        >
          Add Task
        </button>

      </div>

    </div>
  );
}

export default Header;