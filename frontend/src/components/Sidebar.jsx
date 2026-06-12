function Sidebar() {
  return (
    <aside
      className="
      hidden md:flex
      flex-col
      w-72
      min-h-screen
      bg-slate-900
      border-r
      border-slate-800
      p-6
      "
    >
      <h1 className="text-3xl font-bold text-cyan-400">
        TaskFlow
      </h1>

      <p className="text-slate-400 mt-2">
        Smart Task Manager
      </p>

      <ul className="mt-10 space-y-5 text-slate-300">

        <li className="hover:text-cyan-400 cursor-pointer transition">
          📊 Dashboard
        </li>

        <li className="hover:text-cyan-400 cursor-pointer transition">
          ✅ Tasks
        </li>

        <li className="hover:text-cyan-400 cursor-pointer transition">
          📁 Projects
        </li>

        <li className="hover:text-cyan-400 cursor-pointer transition">
          ⚙ Settings
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;