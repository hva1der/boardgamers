//
// NOT IN USE as I can't get it to work...
//
//

// COMPONENT: Displays welcome message to user on members only pages
// also confirms if user has admin priveliges.
// Takes cookie JWT token as prop from getServerSideProps on each page
//  and decodes to get the user's info.

import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";

export default function WelcomeUser({ token, secretKey }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // decode token
    try {
      const decoded = jwt.verify(token, secretKey);
      const { username } = decoded;
      console.log(username);
      setUsername(username);
    } catch (err) {
      console.error(err);
    }
  }, [token, secretKey]);

  return (
    <div>
      <h2>Welcome {username}</h2>
    </div>
  );
}

// DO I NEED JOSE?
// // Imports
// // Jose to process cookie
// const jose = require("jose");
// // get secretKey and set to uint8Array (required by jose)
// const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

// export default function WelcomeUser() {

//     // get cookie info function
//     async function cookieInfo() {
//         const cookie = await request.cookies.get("token")
//     }

// }
