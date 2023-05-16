//
// Known issue: App appears to ignore criteria in the Schema. I can't work out why, but users are able to create users with username/pw under 3 characters.
//
const mongoose = require("mongoose");

// Schema for users, inc admins, and possible classes 'host' and 'gm/game-master'
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  //   Add any further user classes here, with default false
});

// Keep getting error when I try to POST createUser.js: Error [OverwriteModelError]: Cannot overwrite `users` model once compiled.
// const usersModel = mongoose.model("users", userSchema);
// module.exports = usersModel;
// Solution: check if the model already exists before defining it:
const modelName = "users";
if (mongoose.modelNames().includes(modelName)) {
  module.exports = mongoose.model(modelName);
} else {
  const usersModel = mongoose.model(modelName, userSchema);
  module.exports = usersModel;
}
