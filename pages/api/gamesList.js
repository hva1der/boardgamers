// Handler for GET requests to list games from DB collection 'games' (contains all our games)
// on Nominate Games (pages/membersArea/nominate.js) page.
const gamesModel = require("../../server/models/gameSchema");
// import DB connection
const connectDB = require("../../db");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // connect to DB
      await connectDB();
      // get list of games from DB
      const allGames = await gamesModel.find();
      // return array of all games in DB
      res.send({ allGames });

      // handle errors
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  }
}
