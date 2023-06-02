//
// COMPONENT: Banner at top of all pages, with login section on left.
// I had wanted the login section to change to "Username + [log out] button", if
// a user is already logged in. However, this proved surprisingly difficult in Next.js

// imports
import Image from "next/image";
import styles from "@/styles/Banner.module.css";
import Link from "next/link";
import { useState } from "react";
// cookie functionality
import cookie from "js-cookie";
// Utility: fetch JWT
import fetchJWT from "./utilities/fetchJWT";

export default function BannerAndLogin() {
  // states for username and pw to log in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {/* div container - responsive for banner image to 'fill' */}
      <div className={styles.banner}>
        <Image src="/bannerMeeples.png" alt="banner image" fill />
      </div>

      {/* Login section */}
      <div className={styles.login}>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          onClick={() => {
            // check DB and return JWT token saved as cookie if user exists and password is correct.
            fetchJWT(username, password);
          }}
        >
          Log in
        </button>
        {/* Log out functionality: deletes token cookie and reloads page */}
        <button
          onClick={() => {
            cookie.remove("token");
            location.reload();
          }}
        >
          Log out
        </button>
        {/* Link to registration page */}
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
