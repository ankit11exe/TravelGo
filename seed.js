const mongoose = require("mongoose");
const { data } = require("./init/data"); // Make sure this file exists and exports `data`
const Listing = require("./models/listing"); // Make sure path is correct

require("dotenv").config();
const mongo_url = process.env.mongo_url; // <-- lowercase to match your .env

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB connected for seeding");
  })
  .catch((err) => {
    console.error("Mongo connection failed:", err);
  });

const seedDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(data);
    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding failed:", err);
  }
};

seedDB();
