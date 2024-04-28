import React, { useState } from "react";
import { login } from "../services/api";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password);
      onLogin(token);
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none hover:bg-blue-600"
      >
        Login
      </button>
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </form>
  );
}

export default LoginForm;
