//
import Image from "next/image";
import styles from "@/styles/Banner.module.css";
import Link from "next/link";
import { useState } from "react";
// cookie functionality
import cookie from "js-cookie";
// Utility: fetch JWT
import fetchJWT from "./utilities/fetchJWT";
//
// Key bit: Banner in background with login section floated on top on right side.
// login sections has if() statement to change if user is already logged in -
// i.e. Alex - log out
//

export default function BannerAndLogin() {
  // states for username and pw to log in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {/* div container - responsive for banner image to 'fill' */}
      <div className={styles.banner}>
        <Image src="/darth.jpg" alt="banner image" fill />
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
            // check DB and return JWT if user exists and password is correct.

            fetchJWT(username, password);

            // // remove expiry?
            // cookie.set("token", password, { expires: 1 / 24 });
            // // remove reload? using it so logged in content will display straight away
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
