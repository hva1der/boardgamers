// Handler for POST fetch requests from C:OurGameDisplay (via utility: 'nominateToDB.js') to
// add game from the 'games' DB collection to the 'nominated' collection.

// import Mongoose schema and DB connection
const nominatedModel = require("../../server/models/nominatedSchema");
const connectDB = require("../../db");

// req.body contains all game info from its entry in DB collection 'games'
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // connect to DB
      await connectDB();
      // get game info from req.body
      const nominatedGame = req.body.nominatedGame;
      // check if game is already present in this collection
      const checkDB = await nominatedModel.findOne({
        gameId: nominatedGame.gameId,
      });
      if (checkDB) {
        res.status(409).send({
          message: `${nominatedGame.gameName} has already been nominated`,
        });
      } else {
        // create new collection entry with game info from req.body.
        // At this point the entry should be identical to the one in the 'games' collection (with additional data later added by GM/Admin via /admin/allocateGames)
        await nominatedModel.create(nominatedGame);
        // NOTE: Maybe add a check to see if the game has actually been added - just repeat the checkDB?
        res.send({
          message: `${nominatedGame.gameName} has been nominated!`,
        });
      }
    } catch (err) {
      res.status(500).send({ message: "Could not nominate game" });
    }
  }
}
