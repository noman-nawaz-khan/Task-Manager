function StatsCards({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(
    (task) => task.completed
  ).length;
  const active = total - completed;

  const card =
    "bg-slate-900/60 backdrop-blur-lg border border-slate-700 rounded-3xl p-6 shadow-xl hover:border-cyan-500 transition";

  return (
    <div className="grid md:grid-cols-3 gap-5 my-8">

      <div className={card}>
        <p className="text-slate-400">
          Total Tasks
        </p>
        <h1 className="text-4xl font-bold mt-2">
          {total}
        </h1>
      </div>

      <div className={card}>
        <p className="text-slate-400">
          Active Tasks
        </p>
        <h1 className="text-4xl font-bold mt-2 text-yellow-400">
          {active}
        </h1>
      </div>

      <div className={card}>
        <p className="text-slate-400">
          Completed
        </p>
        <h1 className="text-4xl font-bold mt-2 text-green-400">
          {completed}
        </h1>
      </div>

    </div>
  );
}

export default StatsCards;