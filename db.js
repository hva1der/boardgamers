//
// Sets mongoose/MongoDB connection - import where needed.

const mongoose = require("mongoose");
// Deal with strictQuery deprecation warning - ref: https://stackoverflow.com/questions/74711770/how-to-fix-mongoose-deprecation-warning-the-strictquery
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    // 'connection' variable not needed unless I use it in future versions to check connection status etc.
    const connection = await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.error(err);
    // Exit process to prevent errors etc.
    process.exit(1);
  }
};

module.exports = connectDB;
