import React from "react";

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] px-5 bg-blue-500 rounded-xl">
      <div className="flex justify-between items-center p-5">
        <h3 className="bg-blue-400 px-3 py-1 rounded text-sm">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <div className="h-[200px] overflow-y-auto hideScroll">
        <h2 className="mt-3 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">
          {data.taskDescription}
        </p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <button onClick={onComplete} className="bg-green-600 cursor-pointer hover:bg-green-400 active:bg-green-700 active:scale-95 text-white px-3 py-2 rounded text-sm">Mark as Completed</button>
        <button onClick={onFail} className="bg-red-600 cursor-pointer hover:bg-red-400 active:bg-red-700 active:scale-95 text-white px-3 py-2 rounded text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
