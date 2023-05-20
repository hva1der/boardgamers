// Handler for GET requests to list games from DB collection 'nominatedgames' (contains games nominated to be played thisWeek) on allocate Games page.
const nominatedModel = require("../../server/models/nominatedSchema");
// import DB connection
const connectDB = require("../../db");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // connect to DB
      await connectDB();
      // get list of all games from DB collection
      const allGames = await nominatedModel.find();
      // return array of all games in collection
      res.send({ allGames });

      // handle errors
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  }
}
