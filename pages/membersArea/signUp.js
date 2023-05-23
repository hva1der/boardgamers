// This page is mostly a placeholder for now. In the future it will house the
// functionality for users to sign up to games. However, this was too complex
// to implement within the timeframe for the task.

// Imports
import Link from "next/link";
import styles from "@/styles/SignUp.module.css";
import WelcomeUser from "@/components/WelcomeUser";

export default function SignUp({ token }) {
  return (
    <div className={styles.signUpPage}>
      {/* Welcome message for user - confirms if/not Admin */}
      {/* <WelcomeUser token={token} secretKey={secretKey} /> - NOT IN USE as I can't get it to work */}

      <h2>In the future this is where you will sign up for games</h2>
      {/* Admin area access - style to appear on left? In future make this into a Component that can appear on different pages with different options  */}
      <div>
        <h3>
          In the meantime, GMs/Admins can access the allocation page below
        </h3>
        <Link href="http://localhost:3000/membersArea/admin/allocateGames">
          Allocate Games
        </Link>
      </div>
    </div>
  );

  // OLD FUNCTIONALITY
  // if (!token) {
  //   return (
  //     <div>
  //       <h2>This is a members only area. Please log in to view</h2>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h2>Welcome to the members area "{token}"</h2>
  //     </div>
  //   );
  // }
}

// Get username from cookie: "token" to display greeting with username and admin status
export function getServerSideProps(context) {
  return { props: { token: context.req.cookies.token } };
}
// get jwt secretKey from env.local
const secretKey = process.env.JWT_SECRET_KEY;
