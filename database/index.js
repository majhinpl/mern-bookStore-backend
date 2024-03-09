const mongoose = require('mongoose');

const connectToString = "mongodb+srv://majhintech:majhintech@cluster0.dgotzls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectToDatabase() {
    await mongoose.connect(connectToString);
    console.log("connected to database successfully");
}

module.exports = connectToDatabase;