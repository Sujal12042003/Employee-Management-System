import React from "react";

const TaskListNumbers = ({ userData }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 width-screen">
      <div className="w-[45%] bg-red-500 rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{userData.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New task</h3>
      </div>
      <div className="w-[45%] bg-green-500 rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{userData.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="w-[45%] bg-blue-500 rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{userData.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted</h3>
      </div>

      <div className="w-[45%] bg-yellow-500 rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{userData.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
