import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");
  const [UserData, setUserData] = useState("");
  const [AuthData] = useContext(AuthContext);
  const [viewingEmployee, setViewingEmployee] = useState(null);

  useEffect(() => {
    if (AuthData) {
      const LoggedInUser = localStorage.getItem("LoggedInUser");
      if (LoggedInUser) {
        const { role, data } = JSON.parse(LoggedInUser);
        setUser(role);
        setUserData(data);
      }
    }
  }, [AuthData]);

  if (!AuthData) {
    return <div style={{color: 'white', textAlign: 'center', marginTop: '2rem'}}>Loading...</div>;
  }

  const handleLogin = (email, password) => {
    if (AuthData) {
      const employee = AuthData.employee.find((emp) => emp.email === email && emp.password === password);
      const admin = AuthData.admin.find((adm) => adm.email === email && adm.password === password);
      if (admin) {
        setUser("admin");
        setUserData(admin);
        localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin", data: admin }));
      } else if (employee) {
        setUser("employee");
        setUserData(employee);
        localStorage.setItem("LoggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const handleEmployeeClick = (emp) => {
    setViewingEmployee(emp);
  };

  const handleBackToAdmin = () => {
    setViewingEmployee(null);
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" && !viewingEmployee ? (
        <AdminDashboard changeUser={setUser} userData={UserData} onEmployeeClick={handleEmployeeClick} />
      ) : null}
      {user === "admin" && viewingEmployee ? (
        <EmployeeDashboard changeUser={handleBackToAdmin} userData={viewingEmployee} />
      ) : null}
      {user === "employee" ? <EmployeeDashboard changeUser={setUser} userData={UserData} /> : null}
    </>
  );
};

export default App;
