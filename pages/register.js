// Page for new user to register
// imports
import { useState } from "react";
import styles from "@/styles/Register.module.css";

export default function register() {
  // state for new user details
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className={styles.registerPage}>
      <h1>Register here</h1>
      <input
        placeholder="username"
        onChange={(e) => setNewUsername(e.target.value)}
      ></input>
      <input
        placeholder="password"
        onChange={(e) => setNewPassword(e.target.value)}
      ></input>
      {/* onClick function (specified below) to register new user */}
      <button onClick={() => createUser(newUsername, newPassword)}>
        Register
      </button>
    </div>
  );
}

// POST fetch request with new user details to /api/createUser handler
async function createUser(username, password) {
  try {
    const res = await fetch("http://localhost:3000/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await res.json();
    alert(result.message);
  } catch (err) {
    console.error(err);
  }
}
