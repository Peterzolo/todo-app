const mongoose = require("mongoose");

exports.databaseConnection = async () => {
  const mongoDBCon = await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB successfully connected");
};
