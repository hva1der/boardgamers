//
// /api/login path: handles POST login requests - returns JWT token
// used in utility fetchJWT in C:BannerAndLogin.

const usersModel = require("../../server/models/userSchema");
const jwt = require("jsonwebtoken");
// import and use Jose - NB wasn't required - but may implement later to reflect use of jose in other parts of app.
// const jose = require("jose");
// ref: https://www.npmjs.com/package/jose

// import DB connection
const connectDB = require("../../db");

// take key from process.env (.env.local) and set it as a uint8Array using TextEncoder() (required by Jose)
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // connect to DB
      await connectDB();

      // find existing user details
      const userInfo = await usersModel.findOne({
        username: req.body.username,
      });
      // check if user exists
      if (userInfo) {
        // Check if password is correct
        if (req.body.password === userInfo.password) {
          // Convert the signing to use Jose? Seems to work as intended without - may implement later.
          let jwtToken = jwt.sign(
            {
              username: userInfo.username,
              // Save admin details - NOTE: Add other priveliges (host/GM) here if wanted
              isAdmin: userInfo.isAdmin,
            },
            secretKey
          );
          // If password is correct: respond with message and token
          res.send({ message: "You have logged in", token: jwtToken });
        } else {
          res.status(401).send({ message: "wrong password" });
        }
      } else {
        res.status(404).send({ message: "user not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  }
}
