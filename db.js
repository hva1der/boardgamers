// Set mongoose/MongoDB connection - import where needed.

//
// PROBLEM?: where does 'connection' go? Greyed out/not being called atm?
//
const mongoose = require("mongoose");
// Deal with strictQuery deprecation warning - IS THIS WHERE THIS SHOULD GO?
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    // 'connection' variable no needed unless I plan to use it to check connection status etc.
    const connection = await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.error(err);
    // Exit process to prevent errors etc.
    process.exit(1);
  }
};

module.exports = connectDB;
