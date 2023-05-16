//
// NB NB: Does this have the same issue as noted in userSchema.js?

const mongoose = require("mongoose");

// Schema for games. No specified Schemas, as info from BGG API should be fixed info already (no user input)
const gameSchema = new mongoose.Schema({
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
});

// *not working - see below
// const gamesModel = mongoose.model("games", gameSchema);
// module.exports = gamesModel;

// Same erorr as with userSchema:
// Keep getting error when I try to POST to addGame.js: Error [OverwriteModelError]: Cannot overwrite `games` model once compiled.
// Solution: check if the model already exists before defining it:
const modelName = "games";
if (mongoose.modelNames().includes(modelName)) {
  module.exports = mongoose.model(modelName);
} else {
  const gamesModel = mongoose.model(modelName, gameSchema);
  module.exports = gamesModel;
}
