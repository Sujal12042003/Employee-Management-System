import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-8">
      <Header changeUser={props.changeUser} userData={props.userData} />
      <CreateTask userData={props.userData} />
      <AllTask
        userData={props.userData}
        onEmployeeClick={props.onEmployeeClick}
      />
    </div>
  );
};

export default AdminDashboard;
