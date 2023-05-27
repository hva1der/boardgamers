// Handler for DELETE fetch requests from /admin/allocateGames to delete nominated games from DB.

// import Mongoose schema and DB connection
const nominatedModel = require("../../server/models/nominatedSchema");
const connectDB = require("../../db");

// function deletes ALL info of game in this collection - data in ourGames collection remains intact.
// takes game ID from req.query (expecting: http://localhost:3000/api/deleteGame/?gameId=XXXX)
export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      // connect to DB
      await connectDB();
      // Identify game from gameId in req.query and DELETE
      const deletedGame = await nominatedModel.deleteOne({
        gameId: req.query.gameId,
      });
      // check if game was deleted and send confirmation
      if (deletedGame.deletedCount > 0) {
        res.status(200).send({ message: "game deleted" });
      } else {
        res.status(404).send({ message: "game not found" });
      }
    } catch (err) {
      res.sendStatus(500);
    }
  }
}
