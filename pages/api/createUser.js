// Handle POST create new user requests
const usersModel = require("../../server/models/userSchema");

// import DB connection - I know I can shorten the paths (ex just: "db" below) but I prefer to be reminded where the files are
const connectDB = require("../../db");

// takes a request with body {username: x, password: y}
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // connect to DB
      await connectDB();

      const newUser = req.body;
      const oldUser = await usersModel.findOne({ username: newUser.username });

      // check if password meets criteria (more than 5 characters and != username) - see below
      if (badPassword(newUser.username, newUser.password)) {
        res.status(422).send({
          message:
            "Registration failed: Your password needs to be at least 6 characters, and can't be the same as your username",
        });
        // check if user already exists
      } else if (oldUser) {
        // Is 409 (conflict) appropriate to use here?
        res.status(409).send({
          message: `User with username ${newUser.username} already exists`,
        });
      } else {
        // create new user
        await usersModel.create(newUser);
        res.send({
          message: `User created with username: ${newUser.username}`,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  }
}

// function to check password requirements (more than 5 characters and != username) - tested in root/tests/
function badPassword(username, password) {
  if (password == username || password.length < 6) {
    return true;
  } else return false;
}
