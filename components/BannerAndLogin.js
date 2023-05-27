//
// COMPONENT: Banner at top of all pages, with login section on left.
// I had wanted the login section to change to "Username + [log out] button", if
// a user is already logged in. However, this proved surprisingly difficult.
//
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
            // location.reload() causes issues - find an alternative? Want it to make changes when logged in be reflected immediately, such as "Welcome X" on the /home page
            // SOLVED - moved it to within the fetchJWT function - though screen flicker is an issue when it runs - ideally use state or something instead?
            // location.reload();
          }}
        >
          Log in
        </button>
        {/* Link to registration page */}
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
