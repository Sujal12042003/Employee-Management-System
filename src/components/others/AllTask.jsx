import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = ({ onEmployeeClick }) => {
  const [Data] = useContext(AuthContext);
  return (
    <div
      className="bg-[#1c1c1c] p-10 mt-5 rounded w-full h-[calc(100vh-23rem)]"
    >
      <div className="bg-red-500 p-5 rounded flex mb-2 justify-between">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Tasks</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Tasks</h5>
        <h5 className="w-1/5 text-lg font-medium">Complete Tasks</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed Tasks</h5>
      </div>
      <div className="overflow-y-auto Scroll scroll-smooth pr-3 h-60">
        {Data.employee.map((emp) => (
          <div
            key={emp.id}
            className="border-2 border-emerald-600 p-5 rounded flex mb-2 justify-between"
          >
            <button
              className="w-1/5 text-lg font-medium text-white text-left hover:underline focus:outline-none cursor-pointer"
              onClick={() => onEmployeeClick(emp)}
              type="button"
            >
              {emp.name}
            </button>
            <h3 className="w-1/5 text-lg font-medium !text-yellow-400">{emp.taskCounts.newTask}</h3>
            <h5 className="w-1/5 text-lg font-medium !text-blue-400 ">{emp.taskCounts.active}</h5>
            <h5 className="w-1/5 text-lg font-medium !text-green-500 ">{emp.taskCounts.completed}</h5>
            <h5 className="w-1/5 text-lg font-medium !text-red-500 ">{emp.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
