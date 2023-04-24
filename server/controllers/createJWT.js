//
//
//
//
//
// Decided not to use this?
// Using the next/api folder thingy instead (?)
//
//
//
//
//
//
//
//
//

// Authenticates user, then Creates and returns JWT (code mostly taken from L3T10)
// const usersModel = require("../models/userSchema");
// const jwt = require("jsonwebtoken");

// // expecting request body: {username: username, password: password}
// async function createJWT(req, res) {
//   try {
//     // find existing user details
//     const userInfo = await usersModel.findOne({ username: req.body.username });
//     // check if user exists
//     if (userInfo) {
//       // Check if password is correct
//       if (req.body.password === userInfo.password) {
//         let jwtToken = jwt.sign(
//           {
//             username: userInfo.username,
//             // Save admin details - NOTE: Add other priveliges (host/GM) here if wanted
//             isAdmin: userInfo.isAdmin,
//           },
//           "secretKey" // need a comma here?
//         );
//         // If password is correct: respond with message and token
//         res.send({ message: "You have logged in", token: jwtToken });
//       } else {
//         res.status(401).send({ message: "wrong password" });
//       }
//     } else {
//       res.status(404).send({ message: "user not found" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ message: "Internal server error" });
//   }
// }

// module.exports = createJWT;
