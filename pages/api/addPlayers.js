// Handler for PUT fetch requests from /admin/allocateGames to add allocated players
// to the 'nominated' DB collection.

// import Mongoose schema and DB connection
const nominatedModel = require("../../server/models/nominatedSchema");
const connectDB = require("../../db");

// req.body should contain the game ID, an array of allocated players, and an (optional) YouTube link/code.
export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      // connect to DB
      await connectDB();
      // get players array from req.body
      const players = req.body.players; // check the notation/format of req.body
      // get YouTube url
      const tutorial = req.body.tutorial;
      // get the relevant game from DB
      const DBGame = await nominatedModel.findOne({ gameId: req.body.gameId });
      // update local copy of the game info with player data
      DBGame.allocatedPlayers = players;
      // add tutorial, if present
      if (tutorial) {
        DBGame.tutorial = tutorial;
      }
      // save updated game to DB
      await DBGame.save();
      // send confirmation
      res.send({ message: "Players added" });

      // Handle errors
    } catch (err) {
      res.status(500).send({ message: "Error adding players" });
    }
  }
}
