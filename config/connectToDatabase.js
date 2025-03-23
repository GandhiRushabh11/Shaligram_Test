const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.Mongo_URL);
    console.log(
      `MongoDb Connection At ${connection.host} and ${connection.name}`
    );
  } catch (error) {
    console.log(`MongoDb Connection Failed`, error);
    process.exit(1);
  }
};

module.exports = { connectToDatabase };
