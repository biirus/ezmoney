const mongoose = require("mongoose");

const { MONGO_CONNECTION } = process.env;

const connectDB = async () => {
  mongoose.connection.once("open", () => {
    console.log("🔌   DB CONNECTED");
  });

  const connection = await mongoose.connect(MONGO_CONNECTION, {
    useNewUrlParser: true,
  });

  return connection;
};

module.exports = {
  connectDB,
};
