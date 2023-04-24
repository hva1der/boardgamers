// Handle POST create new user requests
const usersModel = require("../../server/models/userSchema");

// import DB connection
const connectDB = require("../../db");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // connect to DB
      await connectDB();

      const newUser = req.body;
      // check if user already exists
      const oldUser = await usersModel.findOne({ username: newUser.username });
      if (oldUser) {
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
