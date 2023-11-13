// LoginForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../thunk/action";

function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;