const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log("📦 Database Connected", connection.connection.name, connection.connection.host);
    } catch (error) {
        console.log("error: ", error);
        process.exit(1);
    }
};

module.exports = connectDB