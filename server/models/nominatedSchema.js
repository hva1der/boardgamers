//
// Schema for Collection of games that have been 'nominated' to be played this week.

const mongoose = require("mongoose");

// Schema for nominated games.
const nominatedSchema = new mongoose.Schema({
  gameId: {
    type: Number,
    required: true,
  },
  gameName: {
    type: String,
    required: true,
  },
  minPlayerCount: {
    type: Number,
    required: true,
  },
  maxPlayerCount: {
    type: Number,
    required: true,
  },
  minLength: {
    type: Number,
    required: true,
  },
  maxLength: {
    type: Number,
    required: true,
  },
  gameThumbnailUrl: {
    type: String,
    required: true,
  },
  // Details for (optional) YouTube tutorial/how to play video - takes video ID as string
  tutorial: {
    type: String,
    required: false,
  },
  // record players allocated to game in an array
  allocatedPlayers: {
    type: Array,
    required: false,
  },
});

// *not working - see below
// const gamesModel = mongoose.model("games", gameSchema);
// module.exports = gamesModel;

// Same erorr as with user and gameSchema:
// Keep getting error when I try to POST to addGame.js: Error [OverwriteModelError]: Cannot overwrite `games` model once compiled.
// Solution: check if the model already exists before defining it:
const modelName = "nominatedGames";
if (mongoose.modelNames().includes(modelName)) {
  module.exports = mongoose.model(modelName);
} else {
  const nominatedModel = mongoose.model(modelName, nominatedSchema);
  module.exports = nominatedModel;
}
