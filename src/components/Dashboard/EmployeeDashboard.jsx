import React, { useState, useContext } from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {
  // Local state for tasks and counts
  const [tasks, setTasks] = useState(props.userData.tasks);
  const [taskCounts, setTaskCounts] = useState(props.userData.taskCounts);
  const [Data, setData] = useContext(AuthContext);

  // Helper to recalculate counts
  const recalcCounts = (tasks) => {
    return {
      newTask: tasks.filter(t => t.newTask).length,
      active: tasks.filter(t => t.active).length,
      completed: tasks.filter(t => t.completed).length,
      failed: tasks.filter(t => t.failed).length,
    };
  };

  // Handler for task status change
  const handleTaskStatus = (taskIndex, newStatus) => {
    setTasks(prevTasks => {
      const updated = prevTasks.map((t, i) => {
        if (i !== taskIndex) return t;
        // Reset all status flags
        return {
          ...t,
          newTask: newStatus === 'active' ? false : newStatus === 'newTask',
          active: newStatus === 'active',
          completed: newStatus === 'completed',
          failed: newStatus === 'failed',
        };
      });
      const newCounts = recalcCounts(updated);
      setTaskCounts(newCounts);

      // Update global context for admin view
      if (Data && setData) {
        const updatedEmployees = Data.employee.map(emp => {
          if (emp.id === props.userData.id) {
            return {
              ...emp,
              tasks: updated,
              taskCounts: newCounts
            };
          }
          return emp;
        });
        setData({ ...Data, employee: updatedEmployees });
      }
      return updated;
    });
  };

  return (
    <div className='p-8 bg-[#1c1c1c] h-screen'>
        {typeof props.changeUser === 'function' && (
          <button
            className="mb-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 cursor-pointer active:bg-emerald-800 active:scale-95"
            onClick={() => props.changeUser(null)}
            type="button"
          >
            ← Back
          </button>
        )}
        <Header changeUser={props.changeUser} userData={props.userData} />
        <TaskListNumbers userData={{...props.userData, taskCounts}} />
        <TaskList userData={{...props.userData, tasks}} onTaskStatusChange={handleTaskStatus} />
    </div>
  )
}

export default EmployeeDashboard