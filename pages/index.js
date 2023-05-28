import Head from "next/head";
import styles from "@/styles/Home.module.css";

// Welcome page
// Visible regardless of whether user is logged in.

export default function Home() {
  return (
    <>
      <Head>
        <title>GSBG Website</title>
      </Head>
      {/* Main content */}
      <div className={styles.homePage}>
        {/* data-testid added to identify element for testing - see root/tests/index.test.js */}
        <h1 data-testid="heading">
          Welcome to Glasgow Southside Board Gamers!
        </h1>
        <h2>Please register and log in to access the members' areas</h2>
        {/* Random boardgame related image - to be changed to image from group/venue */}
        <img src="/bloodRage.jpg" alt="landing-page image"></img>
      </div>
    </>
  );
}
