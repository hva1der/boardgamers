//
import Image from "next/image";
import styles from "@/styles/Banner.module.css";
import Link from "next/link";
//
// Key bit: Banner in background with login section floated on top on right side.
// login sections has if() statement to change if user is already logged in -
// i.e. Alex - log out
//

export default function BannerAndLogin() {
  return (
    <div>
      {/* div container - responsive for banner image to 'fill' */}
      <div className={styles.banner}>
        <Image src="/darth.jpg" alt="banner image" fill />
      </div>

      {/* Login section */}
      <div className={styles.login}>
        <input></input>
        <input></input>
        <button>Log in</button>
        <Link href="/">Register</Link>
      </div>
    </div>
  );
}
