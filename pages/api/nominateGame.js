// Handler for POST fetch requests from C:OurGameDisplay to change boolean property 'nominated' to
// 'true' (or to false if clicked again?)

const gamesModel = require("../../server/models/gameSchema");
// import DB connection
const connectDB = require("../../db");

// req.body contains (at minimum) gameId and the handler just toggles the 'nominated' boolean(?)
export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      // connect to DB
      await connectDB();
      // locate the relevant game in the DB
      const nominatedGame = await gamesModel.findOne({
        gameId: req.body.gameId,
      });
      // update local copy of the game - change nominated boolean to 'true'
      nominatedGame.nominated = true;
      // save updated game to DB
      await nominatedGame.save();
      res.send({ message: `${nominatedGame.gameName} has been Nominated!` });

      // If game is already nominated: add a message to say contact GM if want to withdraw nomination
      //
    } catch (err) {
      res.status(500).send({ message: "Could not nominate game" });
    }
  }
}
