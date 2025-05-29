import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import React from "react";

const TaskList = ({ userData, onTaskStatusChange }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full overflow-x-auto scroll-smooth pb-5 Scroll rounded-xl flex flex-nowrap justify-start items-center mt-10 gap-5"
    >
      {userData.tasks.map((e, idx) => (
        <React.Fragment key={e.id || idx}>
          {e.newTask && <NewTask data={e} onAccept={() => onTaskStatusChange(idx, 'active')} />}
          {e.completed && <CompleteTask data={e} />}
          {e.active && <AcceptTask data={e} onComplete={() => onTaskStatusChange(idx, 'completed')} onFail={() => onTaskStatusChange(idx, 'failed')} />}
          {e.failed && <FailedTask data={e} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskList;
