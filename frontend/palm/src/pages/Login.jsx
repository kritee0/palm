import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 const navigate=useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  const registerNavigate=()=>{
    navigate('/register')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-gray-500" onClick={registerNavigate}>
          Don’t have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Register</span>
        </p>

      </div>
    </div>
  );
};

export default Login;
