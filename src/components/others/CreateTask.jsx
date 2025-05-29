import React from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {

  const [Data, setData] = React.useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [Assignee, setAssignee] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle || !taskDate || !Assignee || !category || !taskDescription) {
      alert("Please fill all fields");
      return;
    }
    const newTask = { taskTitle, taskDate, category, taskDescription, active: false, newTask: true, completed: false, failed: false };
    const taskData = Data.employee;
    taskData.forEach(element => {
      if (Assignee === element.name) {
        element.tasks.push(newTask);
        element.taskCounts.newTask += 1;
      }
    });
    const assigneeFound = taskData.some(element => Assignee === element.name);
    if (!assigneeFound) {
      alert("Assignee not found");
      return;
    } else {
      setData(Data);
    }
    setTaskTitle('');
    setTaskDate('');
    setAssignee('');
    setCategory('');
    setTaskDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap items-start w-full bg-[#1c1c1c] p-10 mt-5 rounded justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="py-4 text-2xl font-semibold">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              className="bg-[#2c2c2c] border-2 border-[#444] p-2 rounded w-[calc(100%-90px)] text-xl"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <h3 className="py-4 text-2xl font-semibold">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="bg-[#2c2c2c] border-2 border-[#444] p-2 rounded w-[calc(100%-90px)] text-xl"
            />
          </div>
          <div>
            <h3 className="py-4 text-2xl font-semibold">Assigned to</h3>
            <input
              value={Assignee}
              onChange={(e) => setAssignee(e.target.value)}
              type="text"
              className="bg-[#2c2c2c] border-2 border-[#444] p-2 rounded w-[calc(100%-90px)] text-xl"
              placeholder="Enter assignee name"
            />
          </div>
          <div>
            <h3 className="py-4 text-2xl font-semibold">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="bg-[#2c2c2c] border-2 border-[#444] p-2 rounded w-[calc(100%-90px)] text-xl"
              placeholder="Enter task category"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="py-4 text-2xl font-semibold">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="bg-[#2c2c2c] border-2 border-[#444] p-2 rounded h-[400px] w-full text-xl"
            placeholder="Enter task description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer active:bg-blue-700 active:scale-95 text-white mt-5 p-2 text-2xl w-1/3 rounded"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
