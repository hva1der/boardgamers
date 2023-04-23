import Head from "next/head";
import styles from "@/styles/Home.module.css";
// Import fetch JWT funcationality
import fetchJWT from "@/components/utilities/fetchJWT";

// ********************************
// Welcome page
//
// Visible regardless of whether user is logged in.
// ********************************

export default function Home() {
  return (
    <>
      <Head>
        <title>GSBG Website</title>
      </Head>

      <h1 className={styles.homePage}>
        Welcome to Glasgow Southside Board Gamers!
      </h1>

      <button
        onClick={() => {
          fetchJWT();
        }}
      >
        testFetch
      </button>
    </>
  );
}
