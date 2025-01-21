const mongoose = require("mongoose");

mongoose.set("debug", true);

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_URI, {
            serverSelectionTimeoutMS: 15000, 
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = {
    connectToDb,
};