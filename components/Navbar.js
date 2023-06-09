import Link from "next/link";
import styles from "../styles/Navbar.module.css";

// Navbar with the required paths. Styled to move with rest of page when user scrolls down
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/membersArea/thisWeek">This week's games</Link>
        <Link href="/membersArea/signUp">Sign Up</Link>
        <Link href="/membersArea/nominate">Nominate Games</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contactUs">Where to find us</Link>
      </div>
    </div>
  );
};

export default Navbar;
