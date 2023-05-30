// This page is mostly a placeholder for now. In the future it will house the
// functionality for users to sign up to games. However, this was too complex
// to implement within the timeframe for the project.
// At present it only provides access to the admin-only game allocation page.

// Imports
import Link from "next/link";
import styles from "@/styles/SignUp.module.css";

export default function SignUp({ token }) {
  // get url for link from .env.local *************************** NEEDS FIXING *************************************
  // const allocateLink =
  //   process.env.BACKEND_URL + "/membersArea/admin/allocateGames";
  // console.log(allocateLink);
  return (
    <div className={styles.signUpPage}>
      <h2>In the future this is where you will sign up for games</h2>
      {/* Admin area access - In future will make this into a Component that can appear on different pages with different options  */}
      <div>
        <h3>
          In the meantime, GMs/Admins can access the allocation page below
        </h3>
        <Link href="http://localhost:3000/membersArea//admin/allocateGames">
          Allocate Games
        </Link>
      </div>
    </div>
  );
}
