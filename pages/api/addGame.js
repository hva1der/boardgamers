// Handler for POST add new game to DB requests
const gamesModel = require("../../server/models/gameSchema");
// req.body contains boardgame ID, name, playtime(min+max), playercount(min+max), and thumbnail URL to be saved in DB

// import DB connection - I know I can shorten the paths (ex just: "db" below) but I prefer to be reminded where the files are
const connectDB = require("../../db");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // connect to DB
      await connectDB();
      // get game info from req.body
      const newGame = req.body.newGameDisplay;
      // check if game is already present in DB
      const checkDB = await gamesModel.findOne({ gameId: newGame.gameId }); // remember it has to be saved as req.body.gameId
      if (checkDB) {
        res.status(409).send({
          message: `Game: ${newGame.gameName} with BGG ID: ${newGame.gameId} already exists`,
        });
      } else {
        // create new DB entry with game info in same format as in req.body
        await gamesModel.create(newGame);
        // Could add check to confirm game has been added.
        res.send({
          message: `${newGame.gameName} has been added to Our Games.`,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  }
}
