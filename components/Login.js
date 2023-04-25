// IGNORE THIS FOR NOW - EXPERIMENTING WITH MIDDLEWARE INSTEAD FOR AUTHENTICATION

// //
// const jwt = require("jsonwebtoken");
// import styles from "@/styles/Banner.module.css";
// import Link from "next/link";
// //
// // Key bit: Banner in background with login section floated on top on right side.
// // login sections has if() statement to change if user is already logged in -
// // i.e. Alex - log out
// //

// // check JWT token function - is user logged in? (check if their username is in the db)
// function checkJWT() {
//   // get secret key (JWT_SECRET_KEY="secretKey")
//   const secretKey = process.env.JWT_SECRET_KEY;
//   // check if there is a jwt in localstorage
//   if (!localStorage.getItem("jwt")) {
//     console.log("no jwt token found")
//   } else {

//   }
// }

// export default function Login() {
//   // If user is logged in -> display username + logout button

//   // else display login fields, login button and register link

//   return (
//     <div>
//       <div className={styles.login}>
//         <input></input>
//         <input></input>
//         <button>Log in</button>
//         <Link href="/">Register</Link>
//       </div>
//     </div>
//   );
// }
