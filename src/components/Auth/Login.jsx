import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-3xl shadow-lg shadow-gray-500">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 p-8 items-center justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
            className="border bg-[#222] border-gray-300 p-2 w-[300px] px-4 text-xl rounded-xl placeholder:text-xl"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Your Password"
            className="border bg-[#222] border-gray-300 p-2 w-[300px] px-4 text-xl rounded-xl placeholder:text-xl"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white text-2xl rounded-xl px-14 py-2 hover:bg-blue-600 active:bg-blue-700 active:scale-95 transition duration-300 ease-in-out cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
